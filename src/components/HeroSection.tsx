import React, { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  Home,
  Building2,
  Clock,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Award,
  Calculator,
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/loanData';
import { LoanType, LeadFormData } from '../types';
import { buildWhatsAppLink, calculateEmi, formatCurrencyINR } from '../utils/loanCalculators';
import { AchIconMark } from './AchLogo';

interface HeroSectionProps {
  onLeadSuccess: (data: LeadFormData) => Promise<{ success: boolean; message: string }> | void;
  onOpenCalculator: () => void;
  onNavigate?: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onLeadSuccess,
  onOpenCalculator,
  onNavigate,
}) => {
  const [loanType, setLoanType] = useState<LoanType>('home_loan');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [cityPincode, setCityPincode] = useState('');
  const [loanAmount, setLoanAmount] = useState<number>(2500000);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Quick picks matching screenshot: ₹15 Lakh, ₹25 Lakh, ₹50 Lakh, ₹1 Cr
  const quickPicks = [
    { label: '₹15 Lakh', value: 1500000 },
    { label: '₹25 Lakh', value: 2500000 },
    { label: '₹50 Lakh', value: 5000000 },
    { label: '₹1 Cr', value: 10000000 },
  ];

  // Dynamic EMI Calculation: for 20 years tenure @ 8.5% for Home Loan, 9.25% for LAP
  const rateUsed = loanType === 'home_loan' ? 8.5 : 9.25;
  const calculatedEmi = calculateEmi(loanAmount, rateUsed, 20).monthlyEmi;

  const handleQuickLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!cityPincode.trim()) {
      setErrorMsg('Please enter your City or Pincode');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    const data: LeadFormData = {
      fullName,
      phone,
      loanType,
      cityPincode,
      loanAmount,
      employmentType: 'salaried',
    };

    try {
      const res = await onLeadSuccess(data);
      if (res && res.success === false) {
        setErrorMsg('Unable to submit your request. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Clear the form after successful submission
      setFullName('');
      setPhone('');
      setCityPincode('');
      setSuccessMsg('Thank you! Your request has been submitted successfully.');
      setSubmitted(true);
    } catch {
      setErrorMsg('Unable to submit your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getLoanAmountDisplay = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(val % 10000000 === 0 ? 0 : 2)} Crore`;
    }
    return `₹${(val / 100000).toFixed(0)} Lakhs`;
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-16 lg:pt-14 lg:pb-24">
      {/* Background architectural glow & subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Catchy Headline, Sub-headline, Trust badges & Instant CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Domain verification badge with AchIconMark */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300">
              <AchIconMark className="w-3.5 h-4.5 shrink-0" color="#38BDF8" />
              <span className="font-semibold text-slate-100">{BRAND_CONFIG.name}</span>
              <span className="text-slate-500">|</span>
              <span className="font-mono text-sky-400">{BRAND_CONFIG.domain}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Home Loan &amp; Property Finance Advisory: Compare <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-emerald-300">Leading Lenders in Bangalore</span> with Expert Guidance.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Looking for a Home Loan or LAP in Bangalore? <strong className="text-white font-semibold">Group ACH</strong> connects you with leading partner banks and NBFCs for competitive interest rates, transparent eligibility guidance, and free doorstep service across all Bangalore zones.
            </p>

            {/* Direct action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={buildWhatsAppLink(
                  `Hello Group ACH, I would like to discuss a Home Loan / Loan Against Property.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-900/30 whitespace-nowrap group"
              >
                <MessageSquare className="w-4 h-4 text-emerald-950 group-hover:scale-110 transition-transform" />
                <span>Secured Line Chat</span>
              </a>

              <a
                href="/loans-in-bangalore"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('/loans-in-bangalore');
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-4.5 py-3 text-sm font-semibold text-sky-200 bg-sky-950/80 hover:bg-sky-900/90 border border-sky-800/80 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>Loans in Bangalore (70+ Banks)</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </a>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>Calculate EMI</span>
              </button>
            </div>

            {/* Trust Badges: Highlight key benefits */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-sky-950/80 border border-sky-800/60 text-sky-400 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Quick Processing</div>
                    <div className="text-[11px] text-slate-400">3–7 Days Sanction</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 shrink-0">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Door-Step Service</div>
                    <div className="text-[11px] text-slate-400">At Home or Office</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Max Loan LTV</div>
                    <div className="text-[11px] text-slate-400">Up to 90% Funding</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-950/80 border border-amber-800/60 text-amber-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">100% Transparent</div>
                    <div className="text-[11px] text-slate-400">Zero Hidden Fees</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick stats bar */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 pt-1">
              <div>
                <span className="font-bold text-white text-sm">70+</span> Partner Banks
              </div>
              <span className="text-slate-700">·</span>
              <div>
                <span className="font-bold text-white text-sm">Starting 8.35%*</span> Rates
              </div>
              <span className="text-slate-700">·</span>
              <div>
                <span className="font-bold text-white text-sm">₹500+ Cr</span> Disbursal Network
              </div>
              <span className="text-slate-700">·</span>
              <div className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Door-Step Consultation
              </div>
            </div>

          </div>

          {/* Right Column: Recreated Lead Form Card matching user's reference image */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-black/40 p-6 sm:p-7 text-slate-900">
              
              {submitted ? (
                <div className="py-6 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-slate-900">Request Submitted!</h4>
                    <p className="text-xs text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200 py-1 px-3 rounded-lg max-w-sm mx-auto">
                      Thank you! Your request has been submitted successfully.
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-1.5">
                    <div className="flex justify-between text-slate-500">
                      <span>Loan Product:</span>
                      <span className="text-slate-900 font-medium">
                        {loanType === 'home_loan' ? 'Home Loan' : 'Loan Against Property'}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Loan Amount:</span>
                      <span className="text-blue-700 font-semibold">{formatCurrencyINR(loanAmount)}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Indicative Monthly EMI:</span>
                      <span className="text-blue-700 font-bold font-mono">~{formatCurrencyINR(calculatedEmi)}/mo*</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Mobile:</span>
                      <span className="text-slate-900 font-mono">+91 {phone}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors block mx-auto"
                    >
                      Submit another query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleQuickLeadSubmit} className="space-y-4">
                  
                  {/* Top Segmented Tabs: Home Loan vs Loan Against Property (matching image.png) */}
                  <div className="grid grid-cols-2 p-1 bg-slate-100/90 rounded-2xl border border-slate-200/80 gap-1">
                    <button
                      type="button"
                      onClick={() => setLoanType('home_loan')}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        loanType === 'home_loan'
                          ? 'bg-white text-blue-600 border border-blue-200/70 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Home className="w-4 h-4 text-blue-600" />
                      <span>Home Loan</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setLoanType('loan_against_property')}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        loanType === 'loan_against_property'
                          ? 'bg-white text-blue-600 border border-blue-200/70 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Building2 className="w-4 h-4 text-blue-600" />
                      <span>Loan Against Property</span>
                    </button>
                  </div>

                  {/* Field 1: Full Name * */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Field 2: Mobile Number * */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 text-sm text-slate-600 font-mono font-medium pointer-events-none">
                        +91
                      </div>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        placeholder="98765 43210"
                        className="w-full bg-white border border-slate-300 rounded-xl pl-13 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 3: City / Pincode * */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      City / Pincode <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={cityPincode}
                      onChange={(e) => setCityPincode(e.target.value)}
                      placeholder="e.g. Bangalore, 560011"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Field 4: Required Loan Amount * */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Required Loan Amount <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formatCurrencyINR(loanAmount)}
                      readOnly
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 font-mono focus:outline-none"
                    />

                    {/* Quick pick buttons matching screenshot */}
                    <div className="flex flex-wrap items-center gap-2 pt-2.5">
                      <span className="text-xs text-slate-400 font-normal">Quick pick:</span>
                      {quickPicks.map((pick) => {
                        const isSelected = loanAmount === pick.value;
                        return (
                          <button
                            key={pick.label}
                            type="button"
                            onClick={() => setLoanAmount(pick.value)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                              isSelected
                                ? 'bg-blue-50 border-blue-500 text-blue-600 font-semibold shadow-xs'
                                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                            }`}
                          >
                            {pick.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Indicative Monthly EMI Preview Box matching screenshot */}
                  <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-between text-xs sm:text-sm text-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-slate-700">Indicative Monthly EMI:</span>
                    </div>
                    <span className="font-bold text-blue-700 font-mono text-sm sm:text-base">
                      ~{formatCurrencyINR(calculatedEmi)}/mo*
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="text-xs text-rose-600 bg-rose-50 border border-rose-200 p-2.5 rounded-xl">
                      {errorMsg}
                    </div>
                  )}

                  {/* User's Exact CTA Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-5 rounded-2xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Start Secure Chat</span>
                        <ArrowRight className="w-4 h-4 text-sky-400" />
                      </>
                    )}
                  </button>

                  {/* Trust Footer Note */}
                  <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> No credit score drop
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Direct advisor chat
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
