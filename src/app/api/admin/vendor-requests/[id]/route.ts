import { NextResponse } from "next/server";
import { getPortalSession } from "@/controllers/auth.controller";
import { reviewVendorInterestRequest } from "@/controllers/vendor-request.controller";

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getPortalSession();

  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { id } = await params;
    const body = (await req.json()) as { decision?: string };

    if (body.decision !== "approved" && body.decision !== "rejected") {
      return NextResponse.json({ error: "Invalid review decision" }, { status: 400 });
    }

    const request = reviewVendorInterestRequest(id, body.decision, session.email);

    return NextResponse.json({
      ok: true,
      requestId: request.id,
      status: request.status,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unable to review vendor request",
      },
      { status: 400 }
    );
  }
}
