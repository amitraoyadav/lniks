import React from 'react';
import {
  FileText,
  MapPin,
  Percent,
  Calculator,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Home,
  Download,
  Building2,
  Tag,
  Search
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/loanData';

interface SitemapPageProps {
  onNavigate: (path: string) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  const sections = [
    {
      category: 'Special Loan Offers & Schemes',
      icon: Tag,
      color: 'text-amber-700 bg-amber-50 border-amber-200',
      links: [
        {
          title: 'Special Loan Offers 2026',
          path: '/loan-offers',
          desc: 'Curated partner bank discounts, 0% processing fee waivers, and repo-linked rate concessions.',
        },
        {
          title: 'Home Loan Balance Transfer Offer',
          path: '/home-loan-balance-transfer',
          desc: 'Transfer high-interest loans to save ₹4L - ₹10L in interest with top-up cash facility.',
        },
      ],
    },
    {
      category: 'Core Loan Products',
      icon: Building2,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      links: [
        {
          title: 'Home Loan Advisory Hub',
          path: '/home-loan',
          desc: 'Compare rates starting at 8.40% across 70+ partner banks with doorstep processing.',
        },
        {
          title: 'Loan Against Property (LAP)',
          path: '/loan-against-property',
          desc: 'Unlock up to 70% property valuation for business expansion or personal financing.',
        },
        {
          title: 'Home Loan Consultant Services',
          path: '/home-loan-consultant',
          desc: 'Independent advisor negotiation to eliminate lender spread markups.',
        },
        {
          title: 'LAP Consultant Advisory',
          path: '/loan-against-property-consultant',
          desc: 'Multi-bank collateral valuation and high-ticket mortgage structuring.',
        },
      ],
    },
    {
      category: 'Regional & Local City Pages',
      icon: MapPin,
      color: 'text-blue-700 bg-blue-50 border-blue-200',
      links: [
        {
          title: 'Bengaluru Home Loan Advisory (Headquarters)',
          path: '/home-loan-bengaluru',
          desc: 'Local Bangalore lending: Jayanagar, Whitefield, Indiranagar, BBMP A/B-Khata & BDA approvals.',
        },
        {
          title: 'Whitefield & East Bangalore Tech Corridor',
          path: '/home-loan-bengaluru',
          desc: 'ITPL, Kadugodi, Marathahalli, Varthur IT professional multiplier home loans.',
        },
        {
          title: 'Electronic City & South Bangalore Hub',
          path: '/home-loan-bengaluru',
          desc: 'Phase 1 & 2, Bommasandra, Hosa Road, and Bannerghatta Road property financing.',
        },
        {
          title: 'Indiranagar & Central Bangalore Hub',
          path: '/home-loan-bengaluru',
          desc: 'CBD residential, Koramangala, MG Road, and Halasuru residential mortgage.',
        },
        {
          title: 'North Bangalore & Airport Corridor',
          path: '/home-loan-bengaluru',
          desc: 'Hebbal, Yelahanka, Thanisandra, Devanahalli villa & apartment financing.',
        },
        {
          title: 'Loan Against Property in Bangalore',
          path: '/loan-against-property-bangalore',
          desc: 'High LTV equity unlocking for Bangalore residential, commercial & industrial assets.',
        },
      ],
    },
    {
      category: 'Borrower Guides & Checklists',
      icon: BookOpen,
      color: 'text-purple-700 bg-purple-50 border-purple-200',
      links: [
        {
          title: 'Home Loan Eligibility Guide',
          path: '/home-loan-eligibility',
          desc: 'FOIR formulas, income multiplier calculation, and CIBIL score requirements.',
        },
        {
          title: 'Mandatory Documents Checklist',
          path: '/home-loan-documents',
          desc: 'KYC, banking statements, ITR, property title deed flow, and legal non-encumbrance papers.',
        },
        {
          title: 'Home Loan for Salaried Employees',
          path: '/home-loan-for-salaried',
          desc: 'Corporate employee benefits, Form 16 guidelines, and salary slip multiplier norms.',
        },
        {
          title: 'Home Loan for Self-Employed & Business',
          path: '/home-loan-for-self-employed',
          desc: 'Gross profit multipliers, GST returns, CA audited balance sheets, and cash-flow appraisal.',
        },
        {
          title: 'Knowledge Base & Blog Hub',
          path: '/blog',
          desc: 'Comprehensive mortgage guides, RBI repo rate updates, and tax deduction strategies (Sec 24 & 80C).',
        },
      ],
    },
    {
      category: 'Official Flyers & Downloads',
      icon: Download,
      color: 'text-amber-700 bg-amber-50 border-amber-200',
      links: [
        {
          title: 'Official Marketing Flyers (Home Loan & LAP)',
          path: '/#flyers',
          desc: 'High-resolution promotional leaflets with interest benchmarks, A4 printable PDF and Secured Line Chat sharing.',
        },
      ],
    },
    {
      category: 'Institutional Trust, Transparency & Contact',
      icon: ShieldCheck,
      color: 'text-slate-700 bg-slate-100 border-slate-200',
      links: [
        {
          title: 'About Group ACH',
          path: '/about',
          desc: 'Institutional background, multi-lender network, zero upfront fees policy, and advisory credentials.',
        },
        {
          title: 'Contact Us & Direct Advisory',
          path: '/contact',
          desc: 'Direct hotline +91 94825 37337, official email achgrouplink@gmail.com, and registered office.',
        },
        {
          title: 'Frequently Asked Questions (FAQ)',
          path: '/faq',
          desc: 'Loan requirements, processing turnaround, foreclosure terms, and Secured Line Chat inquiry.',
        },
      ],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">HTML Sitemap & Page Directory</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#FAF8F5] via-white to-slate-50 border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Search className="w-3.5 h-3.5" />
            <span>Complete Website Directory & Index</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-slate-900 tracking-tight leading-tight">
            Group ACH Website Directory & Search Index
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Navigate all available loan products, special offers, city landing pages, financial guides, calculators, and official marketing flyers. Terms & Conditions: Nil.
          </p>

          <div className="pt-2 text-xs text-slate-500">
            Head Office: {BRAND_CONFIG.address} · Email: {BRAND_CONFIG.email}
          </div>
        </div>
      </section>

      {/* Categorized Directory Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-all p-6 sm:p-8 space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${section.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                    {section.category}
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <div key={lIdx} className="group">
                      <a
                        href={link.path}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(link.path);
                        }}
                        className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center gap-1.5"
                      >
                        <span>{link.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-emerald-600" />
                      </a>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {link.desc}
                      </p>
                      <span className="font-mono text-[10px] text-slate-400 block mt-1">
                        https://www.achlinks.in{link.path}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* XML Sitemap Link Reassurance */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs">
            <span className="font-bold text-slate-900 block">Looking for the machine-readable search crawler index?</span>
            <span className="text-slate-500">Google and Bing bots can crawl our XML index directly at sitemap.xml.</span>
          </div>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
          >
            <span>View XML Sitemap</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
};
