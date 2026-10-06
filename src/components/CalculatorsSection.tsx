import React, { useState } from 'react';
import {
  calculateEmi,
  calculateEligibility,
  calculateBalanceTransferSavings,
  generateAmortizationSchedule,
  formatCurrencyINR,
  formatIndianAmountCompact,
  buildWhatsAppLink,
} from '../utils/loanCalculators';
import {
  Calculator,
  ArrowRight,
  Sparkles,
  PieChart,
  Calendar,
  Layers,
  Percent,
  CheckCircle2,
  TrendingDown,
  Info,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { LoanType } from '../types';
import { AchIconMark } from './AchLogo';

interface CalculatorsSectionProps {
  onApplyWithEmi: (loanType: LoanType, amount: number, tenure: number, emi: number) => void;
}

export const CalculatorsSection: React.FC<CalculatorsSectionProps> = ({ onApplyWithEmi }) => {
  const [activeTab, setActiveTab] = useState<'emi' | 'eligibility' | 'transfer'>('emi');

  // EMI Calculator State
  const [loanType, setLoanType] = useState<LoanType>('home_loan');
  const [principal, setPrincipal] = useState<number>(5000000); // 50 Lakhs
  const [annualRate, setAnnualRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years
  const [showAmortization, setShowAmortization] = useState<boolean>(false);

  // Eligibility Calculator State
  const [monthlyIncome, setMonthlyIncome] = useState<number>(120000); // 1.2 Lakh/mo
  const [existingEmi, setExistingEmi] = useState<number>(15000); // 15k existing
  const [eligibilityTenure, setEligibilityTenure] = useState<number>(20);
  const [eligibilityRate, setEligibilityRate] = useState<number>(8.5);

  // Balance Transfer Calculator State
  const [outstandingPrincipal, setOutstandingPrincipal] = useState<number>(4500000);
  const [currentRate, setCurrentRate] = useState<number>(9.75);
  const [newRate, setNewRate] = useState<number>(8.4);
  const [transferRemainingYears, setTransferRemainingYears] = useState<number>(18);

  // Calculated Results
  const emiResult = calculateEmi(principal, annualRate, tenureYears);
  const amortizationData = showAmortization
    ? generateAmortizationSchedule(principal, annualRate, tenureYears)
    : [];

  const eligibilityResult = calculateEligibility(
    monthlyIncome,
    existingEmi,
    eligibilityRate,
    eligibilityTenure
  );

  const transferResult = calculateBalanceTransferSavings(
    outstandingPrincipal,
    currentRate,
    newRate,
    transferRemainingYears
  );

  // Quick preset buttons for loan amounts
  const presetAmounts = [
    { label: '₹25 L', value: 2500000 },
    { label: '₹50 L', value: 5000000 },
    { label: '₹75 L', value: 7500000 },
    { label: '₹1 Cr', value: 10000000 },
    { label: '₹2 Cr', value: 20000000 },
    { label: '₹5 Cr', value: 50000000 },
  ];

  return (
    <section id="calculators" className="py-16 sm:py-24 bg-white scroll-mt-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F483E] uppercase tracking-wider mb-2">
            <AchIconMark className="w-4 h-5 shrink-0" color="#2F483E" />
            <span>Interactive Financial Planning Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Interactive Loan & EMI Calculators
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Slide loan parameters to simulate your monthly cash outflow, check maximum borrowing capacity, or calculate how many lakhs you can save with a Balance Transfer.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 shadow-sm max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('emi')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'emi'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Loan EMI Calculator
            </button>
            <button
              onClick={() => setActiveTab('eligibility')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'eligibility'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Borrowing Eligibility Estimator
            </button>
            <button
              onClick={() => setActiveTab('transfer')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'transfer'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Balance Transfer Savings
            </button>
          </div>
        </div>

        {/* TAB 1: EMI CALCULATOR */}
        {activeTab === 'emi' && (
          <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
            
            {/* Top Loan Type toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-700">Calculate For:</span>
                <div className="inline-flex p-1 bg-white rounded-lg border border-slate-200 text-xs font-medium">
                  <button
                    onClick={() => {
                      setLoanType('home_loan');
                      setAnnualRate(8.5);
                    }}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      loanType === 'home_loan' ? 'bg-sky-600 text-white font-semibold' : 'text-slate-600'
                    }`}
                  >
                    Home Loan (8.35%+)
                  </button>
                  <button
                    onClick={() => {
                      setLoanType('loan_against_property');
                      setAnnualRate(9.4);
                    }}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      loanType === 'loan_against_property' ? 'bg-sky-600 text-white font-semibold' : 'text-slate-600'
                    }`}
                  >
                    Loan Against Property (9.25%+)
                  </button>
                </div>
              </div>

              {/* Quick Amount presets */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-slate-500 mr-1 hidden sm:inline">Quick Amounts:</span>
                {presetAmounts.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => setPrincipal(preset.value)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors ${
                      principal === preset.value
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Sliders Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Loan Amount */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Loan Amount Required
                    </label>
                    <div className="text-base font-extrabold text-slate-900 font-mono">
                      {formatIndianAmountCompact(principal)}{' '}
                      <span className="text-xs text-slate-500 font-normal">({formatCurrencyINR(principal)})</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="100000000"
                    step="250000"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                    <span>₹5 Lakh</span>
                    <span>₹50 Lakh</span>
                    <span>₹1 Crore</span>
                    <span>₹5 Crore</span>
                    <span>₹10 Crore</span>
                  </div>
                </div>

                {/* 2. Interest Rate */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Interest Rate (% p.a.)
                    </label>
                    <div className="text-base font-extrabold text-sky-700 font-mono">
                      {annualRate.toFixed(2)}%
                    </div>
                  </div>
                  <input
                    type="range"
                    min="7.5"
                    max="15.0"
                    step="0.05"
                    value={annualRate}
                    onChange={(e) => setAnnualRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                    <span>7.50%</span>
                    <span>8.50% (Avg Bank)</span>
                    <span>10.00%</span>
                    <span>12.50%</span>
                    <span>15.00%</span>
                  </div>
                </div>

                {/* 3. Loan Tenure */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Loan Tenure (Years)
                    </label>
                    <div className="text-base font-extrabold text-slate-900 font-mono">
                      {tenureYears} Years{' '}
                      <span className="text-xs text-slate-500 font-normal">({tenureYears * 12} Months)</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={loanType === 'home_loan' ? 30 : 20}
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                    <span>1 Year</span>
                    <span>5 Yrs</span>
                    <span>10 Yrs</span>
                    <span>20 Yrs</span>
                    <span>{loanType === 'home_loan' ? '30 Yrs' : '20 Yrs'}</span>
                  </div>
                </div>

              </div>

              {/* Result Summary Card Column */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Estimated Monthly Payment
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-sky-700 font-mono tracking-tight">
                    {formatCurrencyINR(emiResult.monthlyEmi)}
                    <span className="text-xs font-sans text-slate-500 font-medium ml-1">/ month</span>
                  </div>

                  {/* Visual ratio bar */}
                  <div className="my-6">
                    <div className="flex justify-between text-xs font-medium mb-1.5">
                      <span className="text-slate-700 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-sky-600 inline-block" />
                        Principal Amount ({emiResult.principalPercent}%)
                      </span>
                      <span className="text-slate-700 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                        Total Interest ({emiResult.interestPercent}%)
                      </span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
                      <div
                        className="bg-sky-600 h-full transition-all duration-300"
                        style={{ width: `${emiResult.principalPercent}%` }}
                      />
                      <div
                        className="bg-amber-500 h-full transition-all duration-300"
                        style={{ width: `${emiResult.interestPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Financial Breakdown Table */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2.5 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Principal Loan Amount:</span>
                      <span className="font-bold text-slate-900 font-mono">
                        {formatCurrencyINR(principal)}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Total Interest Payable:</span>
                      <span className="font-bold text-amber-700 font-mono">
                        {formatCurrencyINR(emiResult.totalInterest)}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex justify-between text-slate-900 font-semibold text-sm">
                      <span>Total Payment (P + I):</span>
                      <span className="font-extrabold font-mono text-slate-900">
                        {formatCurrencyINR(emiResult.totalPayment)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-6">
                  <button
                    onClick={() =>
                      onApplyWithEmi(loanType, principal, tenureYears, emiResult.monthlyEmi)
                    }
                    className="w-full py-3 px-4 bg-slate-900 hover:bg-sky-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Apply for this EMI Scheme</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={buildWhatsAppLink(
                      `Hi Group ACH, I calculated EMI on www.achlinks.in for ${
                        loanType === 'home_loan' ? 'Home Loan' : 'Loan Against Property'
                      }: Loan Amount ${formatCurrencyINR(principal)} for ${tenureYears} yrs at ${annualRate}% = EMI ${formatCurrencyINR(
                        emiResult.monthlyEmi
                      )}. Can you help negotiate a lower rate with partner banks?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Send Quote to Secured Line Chat</span>
                  </a>

                  {/* Toggle Amortization Schedule */}
                  <button
                    onClick={() => setShowAmortization(!showAmortization)}
                    className="w-full text-center text-xs font-semibold text-sky-700 hover:text-sky-900 py-1 flex items-center justify-center gap-1"
                  >
                    <span>{showAmortization ? 'Hide Repayment Schedule' : 'View Year-by-Year Amortization Schedule'}</span>
                    {showAmortization ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>

            </div>

            {/* Amortization Table */}
            {showAmortization && (
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sky-600" />
                  <span>Amortization Schedule (Yearly Principal vs Interest Payment)</span>
                </h4>
                <div className="overflow-x-auto max-h-72 border border-slate-200 rounded-xl bg-white">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 text-slate-700 font-semibold sticky top-0 border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3">Year</th>
                        <th className="py-2.5 px-3">Annual EMI Paid</th>
                        <th className="py-2.5 px-3">Principal Component</th>
                        <th className="py-2.5 px-3">Interest Component</th>
                        <th className="py-2.5 px-3">Ending Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono tabular-nums">
                      {amortizationData.map((row) => (
                        <tr key={row.year} className="hover:bg-slate-50 transition-colors">
                          <td className="py-2 px-3 font-sans font-medium text-slate-800">Year {row.year}</td>
                          <td className="py-2 px-3 text-slate-700">{formatCurrencyINR(row.yearlyEmi)}</td>
                          <td className="py-2 px-3 text-emerald-700 font-medium">{formatCurrencyINR(row.yearlyPrincipal)}</td>
                          <td className="py-2 px-3 text-amber-700">{formatCurrencyINR(row.yearlyInterest)}</td>
                          <td className="py-2 px-3 text-slate-900 font-semibold">{formatCurrencyINR(row.endingBalance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: ELIGIBILITY ESTIMATOR */}
        {activeTab === 'eligibility' && (
          <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Net Monthly Take-Home Income
                    </label>
                    <span className="text-base font-extrabold text-slate-900 font-mono">
                      {formatCurrencyINR(monthlyIncome)} / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="25000"
                    max="1000000"
                    step="5000"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                    <span>₹25,000</span>
                    <span>₹1 Lakh</span>
                    <span>₹2.5 Lakh</span>
                    <span>₹5 Lakh</span>
                    <span>₹10 Lakh+</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Existing Monthly EMI Obligations
                    </label>
                    <span className="text-base font-extrabold text-slate-900 font-mono">
                      {formatCurrencyINR(existingEmi)} / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="300000"
                    step="2500"
                    value={existingEmi}
                    onChange={(e) => setExistingEmi(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                    <span>₹0 (No loans)</span>
                    <span>₹50,000</span>
                    <span>₹1 Lakh</span>
                    <span>₹2 Lakh</span>
                    <span>₹3 Lakh</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Desired Loan Tenure
                    </label>
                    <select
                      value={eligibilityTenure}
                      onChange={(e) => setEligibilityTenure(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs font-semibold text-slate-800"
                    >
                      <option value={10}>10 Years</option>
                      <option value={15}>15 Years</option>
                      <option value={20}>20 Years (Standard)</option>
                      <option value={25}>25 Years</option>
                      <option value={30}>30 Years (Max Home Loan)</option>
                    </select>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Benchmark Rate (% p.a.)
                    </label>
                    <select
                      value={eligibilityRate}
                      onChange={(e) => setEligibilityRate(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs font-semibold text-slate-800"
                    >
                      <option value={8.35}>8.35% (Tier 1 Prime Rate)</option>
                      <option value={8.5}>8.50% (Standard Bank Rate)</option>
                      <option value={9.25}>9.25% (LAP Standard Rate)</option>
                      <option value={10.0}>10.00% (NBFC Flexible Rate)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Eligibility Result */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-md space-y-5">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Estimated Max Loan Eligibility
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700 font-mono tracking-tight">
                    {formatIndianAmountCompact(eligibilityResult.eligibleLoanAmount)}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Based on standard banking FOIR of {eligibilityResult.foirPercentage}%.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Max Affordable EMI:</span>
                    <span className="font-bold text-slate-900 font-mono">
                      {formatCurrencyINR(eligibilityResult.maxEmiAllowed)} / mo
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Selected Tenure:</span>
                    <span className="font-semibold text-slate-900">{eligibilityTenure} Years</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Assumed Rate:</span>
                    <span className="font-semibold text-slate-900">{eligibilityRate}%</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 text-xs text-sky-900 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-700" />
                    <span>Need to boost eligibility?</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Group ACH can help structure co-applicants (spouse/parents), add rental income, or use multi-bank clubbing to unlock up to 30% higher sanction.
                  </p>
                </div>

                <button
                  onClick={() =>
                    onApplyWithEmi(
                      'home_loan',
                      eligibilityResult.eligibleLoanAmount,
                      eligibilityTenure,
                      eligibilityResult.maxEmiAllowed
                    )
                  }
                  className="w-full py-3 px-4 bg-slate-900 hover:bg-sky-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>Apply with Maximum Eligibility</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: BALANCE TRANSFER SAVINGS */}
        {activeTab === 'transfer' && (
          <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Current Outstanding Loan Balance
                    </label>
                    <span className="text-base font-extrabold text-slate-900 font-mono">
                      {formatIndianAmountCompact(outstandingPrincipal)}{' '}
                      <span className="text-xs text-slate-500 font-normal">({formatCurrencyINR(outstandingPrincipal)})</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000000"
                    max="50000000"
                    step="250000"
                    value={outstandingPrincipal}
                    onChange={(e) => setOutstandingPrincipal(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-2">
                    <label className="block text-xs font-semibold text-rose-700">
                      Your Current Interest Rate (% p.a.)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        step="0.05"
                        value={currentRate}
                        onChange={(e) => setCurrentRate(Number(e.target.value))}
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold font-mono text-slate-900"
                      />
                      <span className="text-xs font-bold text-slate-500">%</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-2">
                    <label className="block text-xs font-semibold text-emerald-700">
                      New Rate with Group ACH (% p.a.)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        step="0.05"
                        value={newRate}
                        onChange={(e) => setNewRate(Number(e.target.value))}
                        className="w-full p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-sm font-bold font-mono text-emerald-900"
                      />
                      <span className="text-xs font-bold text-emerald-600">%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Remaining Tenure (Years)
                    </label>
                    <span className="text-base font-extrabold text-slate-900 font-mono">
                      {transferRemainingYears} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="25"
                    step="1"
                    value={transferRemainingYears}
                    onChange={(e) => setTransferRemainingYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Transfer Result Card */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-md space-y-5">
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                    <TrendingDown className="w-4 h-4 text-emerald-600" />
                    <span>Total Lifetime Interest Saved</span>
                  </span>
                  <div className="text-3xl font-extrabold text-emerald-800 font-mono">
                    {formatCurrencyINR(transferResult.totalInterestSavings)}
                  </div>
                  <p className="text-[11px] text-emerald-700">
                    Plus monthly cashflow relief of{' '}
                    <strong className="font-bold">{formatCurrencyINR(transferResult.monthlySavings)} / mo</strong>!
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block mb-0.5">Current EMI:</span>
                    <span className="font-extrabold text-slate-800 font-mono text-sm line-through">
                      {formatCurrencyINR(transferResult.currentEmi)}
                    </span>
                  </div>
                  <div className="p-3 bg-sky-50 rounded-xl border border-sky-100">
                    <span className="text-sky-800 block mb-0.5">New Monthly EMI:</span>
                    <span className="font-extrabold text-sky-900 font-mono text-sm">
                      {formatCurrencyINR(transferResult.newEmi)}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={buildWhatsAppLink(
                      `Hi Group ACH, I want to transfer my current loan of ${formatCurrencyINR(
                        outstandingPrincipal
                      )} from ${currentRate}% to a lower rate. Calculator shows I can save ${formatCurrencyINR(
                        transferResult.totalInterestSavings
                      )}. Please advise next steps.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Request Balance Transfer Switch</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <p className="text-[11px] text-slate-400 text-center">
                    We also arrange instant Top-Up loans along with Balance Transfers for home renovation or business needs.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
