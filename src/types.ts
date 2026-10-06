export type LoanType = 'home_loan' | 'loan_against_property';

export interface LeadFormData {
  fullName: string;
  phone: string;
  email?: string;
  loanType: LoanType;
  loanAmount: number | string;
  cityPincode: string;
  city?: string;
  employmentType?: 'salaried' | 'self_employed' | 'business_owner';
  monthlyIncome?: number | string;
  existingEmi?: number | string;
  propertyType?: string;
  message?: string;
  leadSource?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export interface BankPartner {
  name: string;
  category: 'Public Bank' | 'Private Bank' | 'Housing Finance Co' | 'NBFC';
  homeLoanRate: string;
  lapRate: string;
  maxTenure: string;
  popularFor: string;
}

export interface LoanProduct {
  id: string;
  title: string;
  type: LoanType;
  tagline: string;
  interestRateStarting: string;
  maxTenureYears: number;
  maxLtv: string;
  description: string;
  variants: {
    title: string;
    description: string;
  }[];
  keyBenefits: string[];
  eligibility: string[];
  documentsRequired: {
    salaried: string[];
    selfEmployed: string[];
  };
}
