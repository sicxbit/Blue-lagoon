import { NextResponse } from "next/server";
import { submitVendorInterest } from "@/controllers/vendor-request.controller";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const request = submitVendorInterest(body);

    return NextResponse.json({
      ok: true,
      requestId: request.id,
      status: request.status,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unable to submit vendor request",
      },
      { status: 400 }
    );
  }
}
