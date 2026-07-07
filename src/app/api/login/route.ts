import { NextResponse } from "next/server";
import { ONE_DAY_SECONDS, authenticatePortalCredentials, createSessionToken } from "@/services/auth.service";

export async function POST(req: Request) {
  try {
    const { email, password } = (await req.json()) as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const session = authenticatePortalCredentials(email, password);

    if (!session) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const token = createSessionToken(session);
    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: "cc_session",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: ONE_DAY_SECONDS,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
