import type { VendorInterest, VendorRequestStatus } from "@/models/vendor.model";
import { createVendorRequest, getVendorRequests, reviewVendorRequest } from "@/services/vendor-request.service";

function getRequiredField(value: unknown, fieldName: string) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${fieldName} is required.`);
  }

  return value.trim();
}

function getOptionalCategory(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

export function getVendorRequestsForAdmin() {
  return getVendorRequests();
}

export function submitVendorInterest(input: Partial<VendorInterest>) {
  return createVendorRequest({
    ownerName: getRequiredField(input.ownerName, "Owner name"),
    organizationName: getRequiredField(input.organizationName, "Organization name"),
    mobileNumber: getRequiredField(input.mobileNumber, "Mobile number"),
    email: getRequiredField(input.email, "Email"),
    password: getRequiredField(input.password, "Password"),
    category: getOptionalCategory(input.category) as VendorInterest["category"],
  });
}

export function reviewVendorInterestRequest(id: string, status: Exclude<VendorRequestStatus, "pending">, reviewedBy: string) {
  if (!id.trim()) {
    throw new Error("Vendor request id is required.");
  }

  if (!reviewedBy.trim()) {
    throw new Error("Reviewer identity is required.");
  }

  return reviewVendorRequest(id, status, reviewedBy);
}
