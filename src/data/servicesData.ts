export interface ServiceItem {
  id: string;
  title: string;
  category: 'incorporation' | 'licenses' | 'taxation' | 'ip' | 'certifications' | 'government';
  tagline: string;
  description: string;
  turnaroundTime: string;
  startingPrice: string;
  popular?: boolean;
  features: string[];
  documentsRequired: string[];
}

export const CATEGORIES = [
  { id: 'all', name: 'All Services' },
  { id: 'incorporation', name: 'Company Registration' },
  { id: 'licenses', name: 'Licenses & Approvals' },
  { id: 'taxation', name: 'Tax & Annual Filings' },
  { id: 'ip', name: 'Trademark & IP' },
  { id: 'certifications', name: 'BIS & ISO Certifications' },
  { id: 'government', name: 'Government Schemes' },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'pvt-ltd',
    title: 'Private Limited Company Registration',
    category: 'incorporation',
    tagline: 'Most preferred legal structure for startups looking to raise funding',
    description: 'Complete registration process including DSC, DIN, MOA/AOA drafting, SPICe+ MCA filing, PAN, TAN, and Certificate of Incorporation.',
    turnaroundTime: '7 - 10 Working Days',
    startingPrice: '₹1,499*',
    popular: true,
    features: [
      '2 Director Identification Numbers (DIN)',
      'Digital Signature Certificates (DSC)',
      'Name Approval via RUN/SPICe+ Part A',
      'Certificate of Incorporation + PAN & TAN',
      'Free Current Account opening assistance',
      'Provident Fund (EPF) and ESI Registration'
    ],
    documentsRequired: ['PAN card & Aadhaar of all directors', 'Passport sized photograph', 'Latest bank statement / electricity bill (premises)', 'NOC from property owner']
  },
  {
    id: 'llp',
    title: 'LLP Registration Online',
    category: 'incorporation',
    tagline: 'Limited liability protection with minimal compliance overhead',
    description: 'Ideal for professionals, consultancy firms, and small partnerships looking for limited personal liability without stringent corporate ROC rules.',
    turnaroundTime: '7 - 10 Days',
    startingPrice: '₹2,499*',
    popular: true,
    features: [
      'DPIN for 2 Designated Partners',
      'DSC for Designated Partners',
      'LLP Agreement drafting & filing in Form 3',
      'PAN & TAN for the LLP'
    ],
    documentsRequired: ['Partner PAN & ID Proof', 'Address proof for registered office', 'Utility bill & landlord NOC']
  },
  {
    id: 'opc',
    title: 'One Person Company (OPC)',
    category: 'incorporation',
    tagline: 'Start a solo corporate entity with limited liability',
    description: 'All the prestige and legal shield of a Private Limited company managed by a single individual founder and one nominee.',
    turnaroundTime: '5 - 7 Days',
    startingPrice: '₹1,999*',
    features: [
      'Full corporate status for solo founder',
      'Nominee director paperwork handling',
      'SPICe+ submission with MCA',
      'PAN & TAN issuance'
    ],
    documentsRequired: ['Founder PAN & Aadhaar', 'Nominee consent in INC-3', 'Nominee ID proof', 'Office electricity bill']
  },
  {
    id: 'partnership',
    title: 'Partnership Firm Registration',
    category: 'incorporation',
    tagline: 'Traditional and swift setup for co-owned traditional businesses',
    description: 'Partnership deed drafting, notarization, and ROF (Registrar of Firms) filing with state authority.',
    turnaroundTime: '3 - 5 Days',
    startingPrice: '₹1,299*',
    features: ['Custom Partnership Deed drafting', 'Stamp duty & Notary guidance', 'PAN & TAN application support', 'Bank resolution draft'],
    documentsRequired: ['All partners PAN cards', 'Aadhaar / Voter ID', 'Commercial address proof']
  },
  {
    id: 'fssai',
    title: 'FSSAI Food License & Registration',
    category: 'licenses',
    tagline: 'Mandatory license for restaurants, food brands, and cloud kitchens',
    description: 'Get your 14-digit FSSAI license smoothly: Basic registration, State License, or Central License for multi-state food businesses.',
    turnaroundTime: '1 - 3 Days',
    startingPrice: '₹999*',
    popular: true,
    features: [
      'Form A / Form B preparation',
      'Food safety management plan advisory',
      'Government fee calculation & payment assistance',
      'Instant tracking of inspection queries'
    ],
    documentsRequired: ['Photo of applicant', 'Government ID', 'Premises possession proof (Rent agreement/Electricity bill)', 'Food category list']
  },
  {
    id: 'gst-reg',
    title: 'GST Registration & Return Filing',
    category: 'taxation',
    tagline: 'Complete Goods & Services Tax registration and regular filing',
    description: 'Obtain your 15-digit GSTIN within 3-5 days. Avoid penalties with automated reminders and monthly GSTR-1 & GSTR-3B filings.',
    turnaroundTime: '3 - 5 Days',
    startingPrice: '₹799*',
    popular: true,
    features: ['New GSTIN issuance', 'Biometric/Aadhaar OTP authentication', 'HSN/SAC code mapping', 'Monthly return packages available'],
    documentsRequired: ['PAN card & Aadhaar of business owner', 'Cancelled cheque / bank statement', 'Registered office address proof']
  },
  {
    id: 'trademark',
    title: 'Trademark Registration & Protection',
    category: 'ip',
    tagline: 'Protect your brand name, logo, and identity with ™ and ®',
    description: 'Comprehensive trademark search across all 45 classes, drafting of TM-A application, filing with Trademark Registry, and objection advisory.',
    turnaroundTime: '24 Hours Filing (™ in 1 day)',
    startingPrice: '₹1,499*',
    popular: true,
    features: [
      'Comprehensive IP India registry clearance search',
      'Class identification & specification drafting',
      'Same-day filing acknowledgment receipt (Use ™ instantly)',
      'Free response to initial formal examination queries'
    ],
    documentsRequired: ['Logo / brand artwork', 'Applicant identity & address proof', 'Power of Attorney / TM-48 signed']
  },
  {
    id: 'msme',
    title: 'MSME / Udyam Registration',
    category: 'government',
    tagline: 'Access priority government loans, subsidies, and tender benefits',
    description: 'Lifetime valid Udyam certificate directly linked with your Aadhaar and PAN to claim central & state startup incentives.',
    turnaroundTime: 'Same Day (2 - 4 Hours)',
    startingPrice: '₹499*',
    features: ['Zero collateral loan eligibility benefits', 'Concessions on trademark & patent filings', 'Protection against delayed payments (MSME Samadhaan)', 'Subsidies on electricity and ISO certifications'],
    documentsRequired: ['Aadhaar card linked to mobile', 'PAN card of enterprise / proprietor', 'Bank account details']
  },
  {
    id: 'iec',
    title: 'Import Export Code (IEC) & DGFT',
    category: 'licenses',
    tagline: 'Mandatory 10-digit code to import or export goods/services globally',
    description: 'Direct online DGFT portal filing with automatic PAN-based IEC issuance and verification support.',
    turnaroundTime: '1 - 2 Days',
    startingPrice: '₹1,499*',
    features: ['DGFT IEC profile creation', 'Digital Signature integration', 'Free consultation for foreign trade policies', 'Bank AD code assistance'],
    documentsRequired: ['Entity PAN card', 'Cancelled cheque with printed entity name', 'Address proof of premises']
  },
  {
    id: 'bis-certification',
    title: 'BIS Certification & ISI Mark',
    category: 'certifications',
    tagline: 'Compulsory compliance for electronics, toys, steel & industrial goods',
    description: 'End-to-end liaison with Bureau of Indian Standards (BIS) covering testing coordination, lab audit documentation, and FMCS/CRS registration.',
    turnaroundTime: '15 - 30 Days',
    startingPrice: '₹9,999*',
    features: ['BIS CRS (Compulsory Registration Scheme)', 'ISI Mark grant support', 'FMCS for foreign manufacturers', 'Accredited testing lab coordination'],
    documentsRequired: ['Factory manufacturing license', 'Test reports from recognized labs', 'List of machinery and quality control equipment']
  },
  {
    id: 'psara-license',
    title: 'PSARA License (Security Agencies)',
    category: 'licenses',
    tagline: 'License to operate private security guard agencies in India',
    description: 'Complete documentation, MOU with approved training institutes, police verification assistance, and state home department filing.',
    turnaroundTime: '30 - 45 Days',
    startingPrice: '₹14,999*',
    features: ['State home ministry portal compliance', 'Security training institute MOU arrangement', 'Director character & background clearance', 'Arms license advisory where applicable'],
    documentsRequired: ['Controlling authority application', 'Ex-servicemen / civilian training affidavit', 'Premises lease agreement']
  },
  {
    id: 'roc-compliance',
    title: 'ROC Annual Compliance & Filings',
    category: 'taxation',
    tagline: 'Keep your company strike-off free and avoid heavy per-day penalties',
    description: 'Annual ROC return filings including Form AOC-4 (Financial Statements), Form MGT-7 (Annual Return), and Director KYC (DIR-3 KYC).',
    turnaroundTime: 'Annual Retainer / On Demand',
    startingPrice: '₹4,999*',
    features: ['DIR-3 KYC filing for all directors', 'AOC-4 financial filing assistance', 'MGT-7 annual filing preparation', 'Statutory audit liaison support'],
    documentsRequired: ['Audited balance sheet & P&L', 'Director DSC tokens', 'Board meeting minutes']
  },
  {
    id: 'trade-license',
    title: 'Trade License & Shop Act',
    category: 'licenses',
    tagline: 'Local municipal permission to operate commercial activities',
    description: 'Filing with municipal corporations (BMC, MCD, BBMP, etc.) and State Labor Department Shop & Commercial Establishment license.',
    turnaroundTime: '3 - 7 Days',
    startingPrice: '₹1,199*',
    features: ['Local municipal authority submission', 'Fire safety declaration verification', 'Shop act certificate download', 'Annual renewal tracking'],
    documentsRequired: ['Rental agreement & tax receipt of property', 'Entity registration certificate', 'Applicant identity document']
  },
  {
    id: 'startup-india',
    title: 'Startup India (DPIIT) Recognition',
    category: 'government',
    tagline: 'Unlock 3-year income tax holiday (80-IAC) and capital gains exemptions',
    description: 'Comprehensive application preparation highlighting business innovation, pitch deck review, and DPIIT certificate generation.',
    turnaroundTime: '5 - 10 Days',
    startingPrice: '₹3,499*',
    features: ['DPIIT recognition certificate', 'Section 80-IAC tax exemption application', 'Self-certification under 6 labor and 3 environmental laws', 'Fast-tracked patent & trademark rebates'],
    documentsRequired: ['Certificate of incorporation', 'Brief note on innovation / scalable model', 'Website / pitch deck link']
  }
];

export const TESTIMONIALS = [
  {
    name: 'Rajesh Mohanty',
    designation: 'Founder, CloudLogix Solutions',
    rating: 5,
    city: 'Bhubaneswar',
    review: 'Bizforgex handled our Private Limited incorporation and GST registration seamlessly. The paperwork was 100% digital, and their team guided us on MCA queries within minutes.'
  },
  {
    name: 'Ananya Sharma',
    designation: 'Director, HerbPure Organics',
    rating: 5,
    city: 'Noida',
    review: 'We required both FSSAI central license and Trademark registration for our brand. The Bizforgex compliance executives were extremely thorough with zero hidden fees.'
  },
  {
    name: 'Vikramaditya Rao',
    designation: 'Managing Partner, Apex Logistics',
    rating: 5,
    city: 'Hyderabad',
    review: 'Getting our IEC code and MSME certificate took less than 48 hours. Transparent pricing and genuine professional support compared to traditional offline agents.'
  }
];

export const WHY_US_POINTS = [
  {
    title: '100% Online & Paperless',
    description: 'Submit your documents securely from your phone or laptop. No tedious office visits.'
  },
  {
    title: 'Transparent Pricing, Zero Hidden Costs',
    description: 'What you see is what you pay. Clear distinction between government statutory fees and professional charges.'
  },
  {
    title: 'Dedicated Compliance Manager',
    description: 'Get assigned an experienced CA/CS or legal associate who tracks your filing until approval.'
  },
  {
    title: 'Strict SLA & Real-time Updates',
    description: 'Fast turnarounds backed by WhatsApp and email milestone notifications on every state of filing.'
  }
];
