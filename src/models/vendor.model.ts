export interface VendorInterest {
  ownerName: string;
  organizationName: string;
  mobileNumber: string;
  email: string;
  password: string;
  category?: "hotel" | "resort" | "homestay" | "guide" | "experience-provider";
}
