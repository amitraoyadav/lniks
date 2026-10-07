import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight, Home, Building } from 'lucide-react';
import { BRAND_CONFIG } from '../data/loanData';
import { LoanType, LeadFormData } from '../types';
import { buildWhatsAppLink, formatCurrencyINR } from '../utils/loanCalculators';
import { AchIconMark } from './AchLogo';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLoanType?: LoanType;
  initialAmount?: number;
  initialTenure?: number;
  initialEmi?: number;
  initialVariant?: string;
  onLeadSuccess: (data: LeadFormData) => Promise<{ success: boolean; message: string }> | void;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  initialLoanType = 'home_loan',
  initialAmount = 5000000,
  initialTenure = 20,
  initialEmi,
  initialVariant,
  onLeadSuccess,
}) => {
  const [loanType, setLoanType] = useState<LoanType>(initialLoanType);
  const [loanAmount, setLoanAmount] = useState<number>(initialAmount);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [cityPincode, setCityPincode] = useState('');
  const [employmentType, setEmploymentType] = useState<'salaried' | 'self_employed'>('salaried');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      setLoanType(initialLoanType);
      if (initialAmount) setLoanAmount(initialAmount);
      setSubmitted(false);
      setIsSubmitting(false);
      setErrorMsg('');
    }
  }, [isOpen, initialLoanType, initialAmount]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
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
      loanAmount,
      cityPincode,
      employmentType,
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
      setSubmitted(true);
    } catch {
      setErrorMsg('Unable to submit your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-slate-900">Application Submitted!</h3>
              <p className="text-xs text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200 py-1.5 px-3 rounded-xl max-w-sm mx-auto">
                Thank you! Your request has been submitted successfully.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5">
              <div className="flex justify-between text-slate-600">
                <span>Product:</span>
                <span className="font-semibold text-slate-900">
                  {loanType === 'home_loan' ? 'Home Loan' : 'Loan Against Property'}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Requested Amount:</span>
                <span className="font-mono font-bold text-sky-700">{formatCurrencyINR(loanAmount)}</span>
              </div>
              {initialEmi && (
                <div className="flex justify-between text-slate-600">
                  <span>Target EMI:</span>
                  <span className="font-mono font-semibold text-slate-900">
                    {formatCurrencyINR(initialEmi)} / mo
                  </span>
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2.5 mb-2">
                <AchIconMark className="w-5 h-7 shrink-0" color="#2F483E" />
                <span className="text-[11px] font-mono text-slate-700 font-semibold tracking-wider uppercase block">
                  Group ACH · Priority Sanction Desk
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                Start Secure Chat
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {initialVariant ? `Inquiring for: ${initialVariant}` : 'Direct advisor consultation · Leading Partner Banks'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product toggle */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setLoanType('home_loan')}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                    loanType === 'home_loan'
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-600 border-slate-200'
                  }`}
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home Loan</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLoanType('loan_against_property')}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                    loanType === 'loan_against_property'
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-600 border-slate-200'
                  }`}
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>Loan Against Property</span>
                </button>
              </div>

              {/* Full Name & Phone */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-mono">+91</span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      placeholder="98765 43210"
                      className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      City / Pincode <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={cityPincode}
                      onChange={(e) => setCityPincode(e.target.value)}
                      placeholder="City name"
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Employment
                    </label>
                    <select
                      value={employmentType}
                      onChange={(e) => setEmploymentType(e.target.value as any)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-2.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="salaried">Salaried</option>
                      <option value="self_employed">Self Employed</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                    <span>Required Loan Amount <span className="text-rose-500">*</span></span>
                    <span className="font-bold text-blue-700 font-mono">
                      {formatCurrencyINR(loanAmount)}
                    </span>
                  </div>
                  
                  {/* Quick picks matching screenshot */}
                  <div className="flex flex-wrap items-center gap-2 pt-1.5 pb-2">
                    <span className="text-xs text-slate-400">Quick pick:</span>
                    {[
                      { label: '₹15 Lakh', value: 1500000 },
                      { label: '₹25 Lakh', value: 2500000 },
                      { label: '₹50 Lakh', value: 5000000 },
                      { label: '₹1 Cr', value: 10000000 },
                    ].map((pick) => (
                      <button
                        key={pick.label}
                        type="button"
                        onClick={() => setLoanAmount(pick.value)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                          loanAmount === pick.value
                            ? 'bg-blue-50 border-blue-500 text-blue-600 font-semibold'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {pick.label}
                      </button>
                    ))}
                  </div>

                  {/* Indicative Monthly EMI preview box */}
                  <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-between text-xs text-slate-800">
                    <span className="text-slate-600">Indicative Monthly EMI:</span>
                    <span className="font-bold text-blue-700 font-mono text-sm">
                      ~{formatCurrencyINR(Math.round(loanAmount * (0.085/12) * Math.pow(1 + 0.085/12, 240) / (Math.pow(1 + 0.085/12, 240) - 1)))}/mo*
                    </span>
                  </div>
                </div>
              </div>

              {errorMsg && (
                <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-sky-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-md flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Start Secure Chat</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                Hotline / Secured Line Chat: <strong className="text-slate-700">{BRAND_CONFIG.phone}</strong>
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
