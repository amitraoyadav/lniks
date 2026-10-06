import React, { useState } from 'react';
import {
  Download,
  Share2,
  Maximize2,
  CheckCircle2,
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  FileText,
  X,
  ExternalLink,
  ShieldCheck,
  Building2,
  Home,
  Percent
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/loanData';
import { buildWhatsAppLink } from '../utils/loanCalculators';

interface FlyerData {
  id: string;
  category: string;
  title: string;
  tagline: string;
  rateHighlight: string;
  tenure: string;
  imageSrc: string;
  badge: string;
  accentColor: string;
  features: string[];
  partnerBanks: string[];
  sampleEmi: string;
  pdfFilename: string;
}

export const FlyersSection: React.FC = () => {
  const [selectedFlyer, setSelectedFlyer] = useState<FlyerData | null>(null);

  const flyers: FlyerData[] = [
    {
      id: 'home-loan-flyer',
      category: 'Home Loan Promotional Flyer',
      title: 'Group ACH - Premier Home Loan Flyer',
      tagline: 'Unlock India’s Lowest Home Loan Rates from 70+ Empaneled Banks',
      rateHighlight: '8.40% onwards',
      tenure: 'Up to 30 Years Tenure',
      imageSrc: '/flyers/home-loan-villa.jpg',
      badge: 'Most Popular Scheme',
      accentColor: 'from-emerald-900 to-slate-900',
      features: [
        'Compare 70+ Banks (SBI, HDFC, ICICI, Axis & more)',
        '3 to 7 Days Express Sanction Letter',
        'Zero Prepayment Penalties on Floating Rates',
        '100% Doorstep Document Pickup',
        'Transparent Process · Terms & Conditions: Nil',
      ],
      partnerBanks: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bank of Baroda'],
      sampleEmi: '₹762 / Lakh / Month',
      pdfFilename: 'Group-ACH-Home-Loan-Flyer.png',
    },
    {
      id: 'lap-flyer',
      category: 'Loan Against Property (LAP) Flyer',
      title: 'Group ACH - High-Value Property Loan Flyer',
      tagline: 'Unlock Up to 70% of Property Market Value for Business & Personal Funding',
      rateHighlight: '9.35% onwards',
      tenure: 'Up to 20 Years Tenure',
      imageSrc: '/flyers/commercial-lap.jpg',
      badge: 'High Value Funding',
      accentColor: 'from-amber-950 to-slate-950',
      features: [
        'Funding from ₹25 Lakh up to ₹10 Crore+',
        'Accepted on Residential, Commercial & Industrial Plots',
        'Multi-Bank Appraisal for Maximum Eligibility',
        'Retain Complete Property Ownership & Usage',
        'Terms & Conditions: Nil · Zero Borrower Fees',
      ],
      partnerBanks: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bajaj Housing'],
      sampleEmi: '₹922 / Lakh / Month',
      pdfFilename: 'Group-ACH-LAP-Flyer.png',
    },
  ];

  const handlePrintFlyer = (flyer: FlyerData) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${flyer.title}</title>
          <style>
            @page { size: A4 portrait; margin: 15mm; }
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #0f172a; margin: 0; padding: 0; }
            .flyer-container { max-width: 750px; margin: 0 auto; border: 2px solid #e2e8f0; border-radius: 16px; overflow: hidden; }
            .header { background: #1e293b; color: white; padding: 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 26px; letter-spacing: -0.5px; }
            .header p { margin: 6px 0 0 0; color: #94a3b8; font-size: 14px; }
            .hero-img { width: 100%; height: 260px; object-fit: cover; }
            .highlight-bar { background: #f8fafc; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; padding: 16px 24px; display: flex; justify-content: space-around; text-align: center; }
            .stat-title { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: bold; }
            .stat-val { font-size: 20px; font-weight: 800; color: #0f172a; margin-top: 4px; }
            .content { padding: 24px; }
            .features-list { list-style: none; padding: 0; margin: 16px 0; }
            .features-list li { padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; display: flex; align-items: center; }
            .features-list li::before { content: "✓ "; color: #16a34a; font-weight: bold; margin-right: 8px; }
            .contact-box { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 16px; border-radius: 12px; margin-top: 20px; }
            .contact-box h3 { margin: 0 0 8px 0; font-size: 14px; color: #166534; }
            .contact-box p { margin: 4px 0; font-size: 12px; color: #1e293b; }
            .footer { padding: 16px 24px; background: #0f172a; color: #94a3b8; font-size: 11px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="flyer-container">
            <div class="header">
              <h1>${flyer.title}</h1>
              <p>${flyer.tagline}</p>
            </div>
            <img class="hero-img" src="${flyer.imageSrc}" alt="${flyer.title}" />
            <div class="highlight-bar">
              <div>
                <div class="stat-title">Interest Rate</div>
                <div class="stat-val" style="color: #047857;">${flyer.rateHighlight}</div>
              </div>
              <div>
                <div class="stat-title">Maximum Tenure</div>
                <div class="stat-val">${flyer.tenure}</div>
              </div>
              <div>
                <div class="stat-title">Indicative EMI</div>
                <div class="stat-val">${flyer.sampleEmi}</div>
              </div>
            </div>
            <div class="content">
              <h2 style="font-size: 16px; margin-top: 0;">Key Advisory Benefits</h2>
              <ul class="features-list">
                ${flyer.features.map((f) => `<li>${f}</li>`).join('')}
              </ul>
              <div class="contact-box">
                <h3>Direct Loan Advisory & Doorstep Assistance</h3>
                <p><strong>Hotline & Secured Line Chat:</strong> ${BRAND_CONFIG.phone}</p>
                <p><strong>Official Email:</strong> ${BRAND_CONFIG.email}</p>
                <p><strong>Registered Address:</strong> ${BRAND_CONFIG.address}</p>
                <p><strong>Terms & Conditions:</strong> Nil (100% Free Borrowing Advisory)</p>
              </div>
            </div>
            <div class="footer">
              © ${new Date().getFullYear()} ${BRAND_CONFIG.name} (${BRAND_CONFIG.domain}) · Authorized Multi-Bank Loan Connector
            </div>
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <section id="flyers" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5 text-amber-700" />
            <span>Official Loan Marketing Flyers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Home Loan & Property Loan Promotional Flyers
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Download or view our official flyers with competitive rate benchmarks, partner bank coverage, and direct advisory credentials. Terms & Conditions: Nil.
          </p>
        </div>

        {/* 2-Column Flyers Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {flyers.map((flyer) => (
            <div
              key={flyer.id}
              className="bg-slate-50 rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col group"
            >
              {/* Flyer Top Visual Header */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                <img
                  src={flyer.imageSrc}
                  alt={flyer.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Ribbon Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold tracking-wide shadow-md uppercase">
                    {flyer.badge}
                  </span>
                </div>

                {/* Rate Overlay Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-xl shadow-lg border border-slate-200 text-right">
                  <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">Interest Rate</span>
                  <span className="text-base sm:text-lg font-extrabold text-emerald-700 font-mono">
                    {flyer.rateHighlight}
                  </span>
                </div>

                {/* Bottom title on image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase font-semibold tracking-wider text-amber-300 block mb-1">
                    {flyer.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif leading-tight">
                    {flyer.title}
                  </h3>
                </div>
              </div>

              {/* Flyer Details Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {flyer.tagline}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5 p-3.5 rounded-2xl bg-white border border-slate-200 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Max Tenure</span>
                      <span className="font-bold text-slate-900">{flyer.tenure}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Indicative EMI</span>
                      <span className="font-bold text-emerald-700 font-mono">{flyer.sampleEmi}</span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 text-xs text-slate-700">
                    {flyer.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Partner Banks Chips */}
                  <div className="pt-4 mt-4 border-t border-slate-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Empaneled Lenders:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {flyer.partnerBanks.map((bank) => (
                        <span
                          key={bank}
                          className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700"
                        >
                          {bank}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons: Preview, Download, and WhatsApp */}
                <div className="pt-4 border-t border-slate-200 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedFlyer(flyer)}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-xs font-bold text-slate-800 transition-colors shadow-2xs"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Full View</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handlePrintFlyer(flyer)}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-white transition-colors shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Print / PDF</span>
                    </button>
                  </div>

                  <a
                    href={buildWhatsAppLink(`Hello Group ACH, I reviewed the ${flyer.category} on achlinks.in and would like to apply.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Secured Line Chat ({BRAND_CONFIG.phone})</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Reassurance Footer Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FAF8F5] border border-[#EAE4DC] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Zero Consulting Charges · Terms & Conditions: Nil</span>
            </h4>
            <p className="text-xs text-slate-600">
              Need custom corporate or high-ticket builder project flyers? Write to us at <a href={`mailto:${BRAND_CONFIG.email}`} className="text-sky-700 font-medium underline">{BRAND_CONFIG.email}</a>.
            </p>
          </div>
          <div className="text-xs text-slate-500 font-mono text-center md:text-right">
            Office: {BRAND_CONFIG.address}
          </div>
        </div>

      </div>

      {/* LIGHTBOX MODAL FOR FULLSCREEN FLYER INSPECTION */}
      {selectedFlyer && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedFlyer(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center z-10 transition-colors"
              aria-label="Close flyer preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Flyer Image Preview */}
            <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-900 rounded-t-3xl">
              <img
                src={selectedFlyer.imageSrc}
                alt={selectedFlyer.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400 block mb-1">
                  {selectedFlyer.category}
                </span>
                <h2 className="text-2xl font-bold font-serif">
                  {selectedFlyer.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-800 block">Interest Rate</span>
                  <span className="text-2xl font-extrabold text-emerald-900 font-mono">
                    {selectedFlyer.rateHighlight}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-800 block">Tenure</span>
                  <span className="text-base font-bold text-emerald-900">
                    {selectedFlyer.tenure}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-800 block">Indicative EMI</span>
                  <span className="text-base font-bold text-emerald-900 font-mono">
                    {selectedFlyer.sampleEmi}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Scheme Highlights
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {selectedFlyer.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Official Contact & Office Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                <div className="font-bold text-slate-900">Group ACH Direct Contact:</div>
                <div><strong>Office:</strong> {BRAND_CONFIG.address}</div>
                <div><strong>Email:</strong> {BRAND_CONFIG.email}</div>
                <div><strong>Secured Line Chat & Phone:</strong> {BRAND_CONFIG.phone}</div>
                <div><strong>Terms & Conditions:</strong> Nil (100% Free Borrowing Advisory)</div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handlePrintFlyer(selectedFlyer)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Print / Save Flyer</span>
                </button>
                <a
                  href={buildWhatsAppLink(`Hello Group ACH, I would like to inquire about the ${selectedFlyer.category}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Secured Line Chat (+91 94825 37337)</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
