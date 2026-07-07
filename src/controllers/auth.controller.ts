import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { parseSessionToken } from "@/services/auth.service";

export async function getPortalSession() {
  const token = (await cookies()).get("cc_session")?.value;
  return parseSessionToken(token);
}

export async function requirePortalSession() {
  const session = await getPortalSession();

  if (!session) {
    redirect("/login?next=/admin");
  }

  return session;
}

export async function requireAdminSession() {
  const session = await requirePortalSession();

  if (session.role !== "admin") {
    redirect("/admin");
  }

  return session;
}
