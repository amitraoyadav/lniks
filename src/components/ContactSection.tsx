import React, { useState } from 'react';
import { BRAND_CONFIG } from '../data/loanData';
import {
  Phone,
  MessageSquare,
  Mail,
  Clock,
  MapPin,
  Lock,
  ArrowRight,
  CheckCircle2,
  Send,
} from 'lucide-react';
import { LeadFormData } from '../types';
import { AchLogo, AchIconMark } from './AchLogo';

interface ContactSectionProps {
  onLeadSuccess: (data: LeadFormData) => Promise<{ success: boolean; message: string }> | void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onLeadSuccess }) => {
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    loanType: 'home_loan' as 'home_loan' | 'loan_against_property',
    loanAmount: '2500000',
    cityPincode: '',
    notes: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.fullName.trim()) {
      setFormError('Please enter your full name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      setFormError('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!formData.cityPincode.trim()) {
      setFormError('Please enter your City or Pincode');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    const leadData: LeadFormData = {
      fullName: formData.fullName,
      phone: formData.phone,
      loanType: formData.loanType,
      loanAmount: Number(formData.loanAmount) || 2500000,
      cityPincode: formData.cityPincode,
      message: formData.notes,
    };

    try {
      const res = await onLeadSuccess(leadData);
      if (res && res.success === false) {
        setFormError('Unable to submit your request. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Clear the form after successful submission
      setFormData({
        fullName: '',
        phone: '',
        loanType: 'home_loan',
        loanAmount: '2500000',
        cityPincode: '',
        notes: '',
      });
      setFormSubmitted(true);
    } catch {
      setFormError('Unable to submit your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#FAF8F5] text-[#1C1917] py-16 sm:py-24 border-t border-[#EAE4DC]"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact Brand Logo as sent by user */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex justify-center mb-3">
            <AchLogo
              variant="stacked"
              iconClassName="w-10 h-14"
              color="#2F483E"
              brandName="ACH"
              showSubtitle={false}
            />
          </div>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8C6D46] mb-2.5">
            <span className="w-5 h-px bg-[#8C6D46]/40" />
            <span>DIRECT ADVISORY</span>
            <span className="w-5 h-px bg-[#8C6D46]/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] tracking-tight leading-[1.15]">
            Contact Group ACH
          </h2>
          <p className="text-sm sm:text-base text-[#6B6560] mt-3 font-normal leading-relaxed">
            We respond within one business hour during working days.
          </p>
        </div>

        {/* Vertical Contact Information List */}
        <div className="space-y-3.5 mb-8">
          
          {/* 1. PHONE */}
          <a
            href="tel:+919482537337"
            className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#EBE4DC] hover:border-[#85673E]/50 shadow-[0_2px_12px_rgba(28,25,23,0.02)] hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F3EDE5] border border-[#E4DACD] text-[#7A5C38] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#8C7A6B] block mb-0.5">
                PHONE
              </span>
              <span className="text-base sm:text-lg font-medium text-[#1C1917] tracking-tight block font-mono">
                +91 94825 37337
              </span>
            </div>
          </a>

          {/* 2. SECURED LINE CHAT */}
          <button
            type="button"
            onClick={() => setShowDetailsForm(true)}
            className="w-full text-left flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#EBE4DC] hover:border-[#85673E]/50 shadow-[0_2px_12px_rgba(28,25,23,0.02)] hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F3EDE5] border border-[#E4DACD] text-[#7A5C38] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#8C7A6B] block mb-0.5">
                SECURED LINE CHAT
              </span>
              <span className="text-base sm:text-lg font-medium text-[#85673E] group-hover:text-[#6F522C] tracking-tight block">
                Secured Line Chat
              </span>
              <span className="text-[11px] font-mono text-[#8C7A6B] block mt-0.5">
                +91 94825 37337
              </span>
            </div>
          </button>

          {/* 3. EMAIL */}
          <a
            href={`mailto:${BRAND_CONFIG.email}`}
            className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#EBE4DC] hover:border-[#85673E]/50 shadow-[0_2px_12px_rgba(28,25,23,0.02)] hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F3EDE5] border border-[#E4DACD] text-[#7A5C38] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#8C7A6B] block mb-0.5">
                EMAIL
              </span>
              <span className="text-base sm:text-lg font-medium text-[#1C1917] tracking-tight block">
                {BRAND_CONFIG.email}
              </span>
            </div>
          </a>

          {/* 4. WORKING HOURS */}
          <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#EBE4DC] shadow-[0_2px_12px_rgba(28,25,23,0.02)]">
            <div className="w-12 h-12 rounded-xl bg-[#F3EDE5] border border-[#E4DACD] text-[#7A5C38] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#8C7A6B] block mb-0.5">
                WORKING HOURS
              </span>
              <span className="text-sm sm:text-base font-medium text-[#1C1917] tracking-tight block">
                Mon–Sat · 9:30 AM – 7:00 PM IST
              </span>
            </div>
          </div>

        </div>

        {/* MAIN WHATSAPP CTA CARD: Asks details without redirecting to WhatsApp */}
        <div className="bg-white rounded-3xl border border-[#EAE4DC] shadow-[0_4px_24px_rgba(28,25,23,0.04)] p-6 sm:p-9 mb-6 text-center relative overflow-hidden">
          {/* Subtle antique gold top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#85673E]/60 to-transparent" />

          {formSubmitted ? (
            <div className="py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#F3EDE5] text-[#7A5C38] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-serif text-2xl text-[#1C1917]">Request Submitted!</h4>
                <p className="text-xs text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200 py-1.5 px-3 rounded-lg max-w-sm mx-auto">
                  Thank you! Your request has been submitted successfully.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setShowDetailsForm(false);
                  }}
                  className="text-xs text-[#85673E] underline font-medium"
                >
                  Submit another inquiry
                </button>
              </div>
            </div>
          ) : showDetailsForm ? (
            <div className="text-left space-y-4">
              <div className="text-center pb-2 border-b border-[#EAE4DC]">
                <h3 className="font-serif text-2xl font-normal text-[#1C1917]">
                  Enter Your Details
                </h3>
                <p className="text-xs text-[#6B6560] mt-1">
                  Share your loan details to initiate your direct consultation.
                </p>
              </div>

              <form onSubmit={handleDetailsSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#4E4843] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DC] rounded-xl px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#85673E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#4E4843] mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-xs text-[#8C7A6B] font-mono">+91</span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })
                        }
                        placeholder="98765 43210"
                        className="w-full bg-[#FAF8F5] border border-[#EAE4DC] rounded-xl pl-10 pr-3 py-2.5 text-xs text-[#1C1917] font-mono focus:outline-none focus:border-[#85673E]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#4E4843] mb-1">
                      Loan Category
                    </label>
                    <select
                      value={formData.loanType}
                      onChange={(e) =>
                        setFormData({ ...formData, loanType: e.target.value as any })
                      }
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DC] rounded-xl px-3 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#85673E]"
                    >
                      <option value="home_loan">Home Loan</option>
                      <option value="loan_against_property">Loan Against Property</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#4E4843] mb-1">
                      City / Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cityPincode}
                      onChange={(e) => setFormData({ ...formData, cityPincode: e.target.value })}
                      placeholder="e.g. Bangalore, 560011"
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DC] rounded-xl px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#85673E]"
                    />
                  </div>
                </div>

                {formError && (
                  <div className="text-xs text-rose-700 bg-rose-50 border border-rose-200 p-2 rounded-lg">
                    {formError}
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 px-6 rounded-xl text-sm font-semibold tracking-wide text-white bg-[#85673E] hover:bg-[#735730] disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                       <span>Submitting...</span>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4 text-[#F3EDE5]" />
                        <span>Secured Line Chat</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDetailsForm(false)}
                    className="py-3 px-4 rounded-xl text-xs text-[#6B6560] hover:text-[#1C1917] transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917] tracking-tight">
                Prefer to talk now?
              </h3>

              <p className="text-xs sm:text-sm text-[#6B6560] leading-relaxed max-w-lg mx-auto">
                Tap below to start a secure conversation with a Group ACH advisor — no forms required.
              </p>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setShowDetailsForm(true)}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-[#85673E] hover:bg-[#735730] active:scale-[0.99] transition-all shadow-md hover:shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 text-[#F3EDE5]" />
                  <span>Secured Line Chat</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8C7A6B] pt-1">
                <Lock className="w-3 h-3 text-[#85673E]" />
                <span>Direct line to +91 94825 37337</span>
              </div>
            </div>
          )}
        </div>

        {/* LOCATION / SERVICE INFORMATION AREA */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#F4EFE6]/90 border border-[#E6DDD0] flex flex-col sm:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#EAE2D5] border border-[#DDD3C3] text-[#7A5C38] flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-5 h-5 stroke-[1.75]" />
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#85673E]">Registered Office</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">Terms: Nil</span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#1C1917] leading-relaxed">
              {BRAND_CONFIG.address}
            </p>
            <p className="text-[11px] text-[#6B6560]">
              Dedicated channel connector network with doorstep loan consultation across all Bangalore localities.
            </p>
          </div>
        </div>

        {/* MANDATORY LEGAL DISCLAIMER & TERMS */}
        <div className="pt-6 border-t border-[#EAE4DC] text-center space-y-1.5">
          <p className="text-xs font-semibold text-emerald-800">
            Terms & Conditions: Nil (Zero advisory charges for loan borrowers)
          </p>
          <p className="text-[11px] sm:text-xs text-[#78716C] leading-relaxed max-w-3xl mx-auto">
            "{BRAND_CONFIG.legalDisclaimer}"
          </p>
        </div>

      </div>
    </section>
  );
};
