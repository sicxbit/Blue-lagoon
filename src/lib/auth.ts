import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export interface AdminSession {
  email: string;
  iat: number;
}

const DEFAULT_SESSION_SECRET = "blue-lagoon-demo-session-secret";

function signSession(payload: string, secret: string) {
  return crypto.createHmac("sha256", secret).update(payload).digest("base64url");
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const token = (await cookies()).get("cc_session")?.value;
  const sessionSecret = process.env.SESSION_SECRET ?? DEFAULT_SESSION_SECRET;

  if (!token) {
    return null;
  }

  const [payloadBase64, signature] = token.split(".");

  if (!payloadBase64 || !signature) {
    return null;
  }

  const expectedSignature = signSession(payloadBase64, sessionSecret);

  if (signature !== expectedSignature) {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(payloadBase64, "base64url").toString("utf8")) as AdminSession;

    if (!payload.email || typeof payload.iat !== "number") {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export async function requireAdminSession() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/login?next=/admin");
  }

  return session;
}
