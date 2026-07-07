export type VendorCategory = "hotel" | "resort" | "homestay" | "guide" | "experience-provider";

export type VendorRequestStatus = "pending" | "approved" | "rejected";

export interface VendorInterest {
  ownerName: string;
  organizationName: string;
  mobileNumber: string;
  email: string;
  password: string;
  category?: VendorCategory;
}

export interface VendorRequest {
  id: string;
  ownerName: string;
  organizationName: string;
  mobileNumber: string;
  email: string;
  passwordHash: string;
  category?: VendorCategory;
  status: VendorRequestStatus;
  createdAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
}

export interface ApprovedVendorIdentity {
  email: string;
  ownerName: string;
  organizationName: string;
}
