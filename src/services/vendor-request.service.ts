import crypto from "node:crypto";
import type { ApprovedVendorIdentity, VendorInterest, VendorRequest, VendorRequestStatus } from "@/models/vendor.model";

type VendorRequestStore = {
  requests: VendorRequest[];
};

const globalVendorRequestStore = globalThis as typeof globalThis & {
  __blueLagoonVendorRequestStore?: VendorRequestStore;
};

function getVendorRequestStore() {
  if (!globalVendorRequestStore.__blueLagoonVendorRequestStore) {
    globalVendorRequestStore.__blueLagoonVendorRequestStore = {
      requests: [],
    };
  }

  return globalVendorRequestStore.__blueLagoonVendorRequestStore;
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function hashPassword(password: string) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function toVendorRequest(input: VendorInterest): VendorRequest {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    ownerName: input.ownerName.trim(),
    organizationName: input.organizationName.trim(),
    mobileNumber: input.mobileNumber.trim(),
    email: normalizeEmail(input.email),
    passwordHash: hashPassword(input.password),
    category: input.category,
    status: "pending",
    createdAt: now,
  };
}

export function getVendorRequests() {
  return [...getVendorRequestStore().requests].sort((left, right) => right.createdAt.localeCompare(left.createdAt));
}

export function getVendorRequestById(id: string) {
  return getVendorRequestStore().requests.find((request) => request.id === id) ?? null;
}

export function createVendorRequest(input: VendorInterest) {
  const store = getVendorRequestStore();
  const normalizedEmail = normalizeEmail(input.email);
  const existingRequest = store.requests.find((request) => request.email === normalizedEmail);

  if (existingRequest && existingRequest.status === "pending") {
    throw new Error("This email already has a pending review request.");
  }

  if (existingRequest && existingRequest.status === "approved") {
    throw new Error("This vendor already has access. Please sign in instead.");
  }

  const nextRequest = toVendorRequest({
    ...input,
    email: normalizedEmail,
  });

  if (existingRequest && existingRequest.status === "rejected") {
    const refreshedRequest: VendorRequest = {
      ...nextRequest,
      id: existingRequest.id,
    };
    store.requests = store.requests.map((request) => (request.id === existingRequest.id ? refreshedRequest : request));
    return refreshedRequest;
  }

  store.requests.unshift(nextRequest);
  return nextRequest;
}

export function reviewVendorRequest(id: string, status: Exclude<VendorRequestStatus, "pending">, reviewedBy: string) {
  const store = getVendorRequestStore();
  const existingRequest = store.requests.find((request) => request.id === id);

  if (!existingRequest) {
    throw new Error("Vendor request not found.");
  }

  const reviewedRequest: VendorRequest = {
    ...existingRequest,
    status,
    reviewedAt: new Date().toISOString(),
    reviewedBy: reviewedBy.trim().toLowerCase(),
  };

  store.requests = store.requests.map((request) => (request.id === id ? reviewedRequest : request));

  return reviewedRequest;
}

export function authenticateApprovedVendor(email: string, password: string): ApprovedVendorIdentity | null {
  const normalizedEmail = normalizeEmail(email);
  const passwordHash = hashPassword(password);
  const approvedRequest = getVendorRequestStore().requests.find(
    (request) => request.email === normalizedEmail && request.status === "approved" && request.passwordHash === passwordHash
  );

  if (!approvedRequest) {
    return null;
  }

  return {
    email: approvedRequest.email,
    ownerName: approvedRequest.ownerName,
    organizationName: approvedRequest.organizationName,
  };
}
