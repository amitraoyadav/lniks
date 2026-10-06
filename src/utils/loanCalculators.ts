import { BRAND_CONFIG } from '../data/loanData';

/**
 * Calculate Monthly EMI using standard banking formula:
 * EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
 * where P = Principal, R = Monthly rate (Annual / 12 / 100), N = Months
 */
export function calculateEmi(principal: number, annualRate: number, tenureYears: number) {
  if (principal <= 0 || annualRate <= 0 || tenureYears <= 0) {
    return {
      monthlyEmi: 0,
      totalInterest: 0,
      totalPayment: 0,
      principalPercent: 100,
      interestPercent: 0,
    };
  }

  const monthlyRate = annualRate / (12 * 100);
  const totalMonths = tenureYears * 12;

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - principal;

  const principalPercent = Math.round((principal / totalPayment) * 100);
  const interestPercent = 100 - principalPercent;

  return {
    monthlyEmi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(totalPayment),
    principalPercent,
    interestPercent,
  };
}

/**
 * Generate year-by-year amortization breakdown
 */
export function generateAmortizationSchedule(
  principal: number,
  annualRate: number,
  tenureYears: number
) {
  const monthlyRate = annualRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  let remainingBalance = principal;
  const yearlySchedule = [];

  for (let year = 1; year <= tenureYears; year++) {
    let yearlyPrincipal = 0;
    let yearlyInterest = 0;

    for (let month = 1; month <= 12; month++) {
      if (remainingBalance <= 0) break;
      const interestForMonth = remainingBalance * monthlyRate;
      const principalForMonth = Math.min(emi - interestForMonth, remainingBalance);

      yearlyInterest += interestForMonth;
      yearlyPrincipal += principalForMonth;
      remainingBalance = Math.max(0, remainingBalance - principalForMonth);
    }

    yearlySchedule.push({
      year,
      yearlyEmi: Math.round(emi * 12),
      yearlyPrincipal: Math.round(yearlyPrincipal),
      yearlyInterest: Math.round(yearlyInterest),
      endingBalance: Math.round(remainingBalance),
    });

    if (remainingBalance <= 0) break;
  }

  return yearlySchedule;
}

/**
 * Calculate Maximum Loan Eligibility based on FOIR (Fixed Obligation to Income Ratio)
 * Standard Indian banking FOIR: 50% to 65% depending on income slab
 */
export function calculateEligibility(
  monthlyIncome: number,
  existingEmi: number,
  annualRate: number = 8.5,
  tenureYears: number = 20
) {
  if (monthlyIncome <= 0) {
    return {
      maxEmiAllowed: 0,
      eligibleLoanAmount: 0,
      foirPercentage: 50,
    };
  }

  // Tiered FOIR
  let foirPercentage = 50;
  if (monthlyIncome > 100000) foirPercentage = 60;
  else if (monthlyIncome > 50000) foirPercentage = 55;

  const totalCap = monthlyIncome * (foirPercentage / 100);
  const maxEmiAllowed = Math.max(0, totalCap - (existingEmi || 0));

  if (maxEmiAllowed <= 0) {
    return {
      maxEmiAllowed: 0,
      eligibleLoanAmount: 0,
      foirPercentage,
    };
  }

  // Reverse calculate principal from EMI: P = [EMI * ((1+R)^N - 1)] / [R * (1+R)^N]
  const monthlyRate = annualRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const factor = Math.pow(1 + monthlyRate, totalMonths);
  const eligibleLoanAmount = (maxEmiAllowed * (factor - 1)) / (monthlyRate * factor);

  return {
    maxEmiAllowed: Math.round(maxEmiAllowed),
    eligibleLoanAmount: Math.round(eligibleLoanAmount),
    foirPercentage,
  };
}

/**
 * Calculate Balance Transfer Savings
 */
export function calculateBalanceTransferSavings(
  outstandingPrincipal: number,
  currentRate: number,
  newRate: number,
  remainingYears: number
) {
  const currentCalc = calculateEmi(outstandingPrincipal, currentRate, remainingYears);
  const newCalc = calculateEmi(outstandingPrincipal, newRate, remainingYears);

  const monthlySavings = Math.max(0, currentCalc.monthlyEmi - newCalc.monthlyEmi);
  const totalInterestSavings = Math.max(0, currentCalc.totalInterest - newCalc.totalInterest);

  return {
    currentEmi: currentCalc.monthlyEmi,
    newEmi: newCalc.monthlyEmi,
    monthlySavings,
    totalInterestSavings,
    currentTotalInterest: currentCalc.totalInterest,
    newTotalInterest: newCalc.totalInterest,
  };
}

/**
 * Format Indian currency with ₹ symbol and Lakhs/Crores suffixes where helpful
 */
export function formatCurrencyINR(val: number): string {
  if (isNaN(val)) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(val);
}

/**
 * Format compact Indian amount like 50 Lakhs or 1.5 Crores
 */
export function formatIndianAmountCompact(val: number): string {
  if (val >= 10000000) {
    const cr = val / 10000000;
    return `₹${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2)} Cr`;
  }
  if (val >= 100000) {
    const lk = val / 100000;
    return `₹${lk % 1 === 0 ? lk.toFixed(0) : lk.toFixed(1)} Lakh`;
  }
  return formatCurrencyINR(val);
}

/**
 * Generate direct WhatsApp chat URL with pre-filled message
 */
export function buildWhatsAppLink(customMessage?: string): string {
  const defaultText = `Hello Group ACH, I would like to discuss a Home Loan / Loan Against Property.`;
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${BRAND_CONFIG.whatsappRaw}?text=${text}`;
}
