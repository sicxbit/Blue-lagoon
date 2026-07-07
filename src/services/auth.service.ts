import crypto from "node:crypto";
import { authenticateApprovedVendor } from "@/services/vendor-request.service";

export type PortalRole = "admin" | "vendor";

export interface PortalSession {
  email: string;
  role: PortalRole;
  name?: string;
  iat: number;
}

export type AdminSession = PortalSession;

export const ONE_DAY_SECONDS = 60 * 60 * 24;

const DEFAULT_ADMIN_EMAIL = "admin@bluelagoon.com";
const DEFAULT_ADMIN_PASSWORD = "password";
const DEFAULT_SESSION_SECRET = "blue-lagoon-demo-session-secret";

function signSession(payload: string, secret: string) {
  return crypto.createHmac("sha256", secret).update(payload).digest("base64url");
}

export function getAdminCredentials() {
  return {
    email: process.env.ADMIN_EMAIL ?? DEFAULT_ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD ?? DEFAULT_ADMIN_PASSWORD,
  };
}

function getSessionSecret() {
  return process.env.SESSION_SECRET ?? DEFAULT_SESSION_SECRET;
}

export function isValidAdminCredentials(email: string, password: string) {
  const adminCredentials = getAdminCredentials();
  return email.trim().toLowerCase() === adminCredentials.email.trim().toLowerCase() && password === adminCredentials.password;
}

export function authenticatePortalCredentials(email: string, password: string): Omit<PortalSession, "iat"> | null {
  const normalizedEmail = email.trim().toLowerCase();

  if (isValidAdminCredentials(normalizedEmail, password)) {
    return {
      email: getAdminCredentials().email,
      role: "admin",
    };
  }

  const approvedVendor = authenticateApprovedVendor(normalizedEmail, password);

  if (!approvedVendor) {
    return null;
  }

  return {
    email: approvedVendor.email,
    role: "vendor",
    name: approvedVendor.ownerName,
  };
}

export function createSessionToken(session: Omit<PortalSession, "iat">) {
  const payload = JSON.stringify({ ...session, iat: Date.now() });
  const payloadBase64 = Buffer.from(payload).toString("base64url");
  const signature = signSession(payloadBase64, getSessionSecret());
  return `${payloadBase64}.${signature}`;
}

export function createAdminSessionToken(email: string) {
  return createSessionToken({
    email,
    role: "admin",
  });
}

export function parseSessionToken(token?: string | null): PortalSession | null {
  if (!token) {
    return null;
  }

  const [payloadBase64, signature] = token.split(".");

  if (!payloadBase64 || !signature) {
    return null;
  }

  const expectedSignature = signSession(payloadBase64, getSessionSecret());

  if (signature !== expectedSignature) {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(payloadBase64, "base64url").toString("utf8")) as PortalSession;

    if (!payload.email || (payload.role !== "admin" && payload.role !== "vendor") || typeof payload.iat !== "number") {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export const parseAdminSessionToken = parseSessionToken;
