import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { parseAdminSessionToken } from "@/services/auth.service";

export async function getAdminSession() {
  const token = (await cookies()).get("cc_session")?.value;
  return parseAdminSessionToken(token);
}

export async function requireAdminSession() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/login?next=/admin");
  }

  return session;
}
