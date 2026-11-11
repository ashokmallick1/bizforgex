export interface ServiceItem {
  id: string;
  title: string;
  category: 'incorporation' | 'licenses' | 'taxation' | 'ip' | 'certifications' | 'government';
  tagline: string;
  badge?: string;
  description: string;
  turnaroundTime: string;
  startingPrice: string;
  popular?: boolean;
  features: string[];
  documentsRequired: string[];
}

export const CATEGORIES = [
  { id: 'all', name: 'All Services' },
  { id: 'incorporation', name: 'Startup & Company Registration' },
  { id: 'licenses', name: 'Licenses & Approvals' },
  { id: 'taxation', name: 'Tax & Annual Filings' },
  { id: 'ip', name: 'Trademark & IP' },
  { id: 'certifications', name: 'BIS & ISO Certifications' },
  { id: 'government', name: 'MSME & Government Schemes' },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'pvt-ltd',
    title: 'Company Registration in India',
    category: 'incorporation',
    badge: 'Save 50% Today on Professional Services',
    tagline: 'Avail consultation from our seasoned consultants for expert support',
    description: 'Launch and grow your business with confidence. Bizforgex offers end-to-end company registration, DIN, DSC, MCA SPICe+ filing, Certificate of Incorporation, PAN, TAN, and bank account setup.',
    turnaroundTime: '7 - 10 Working Days',
    startingPrice: '₹1,499*',
    popular: true,
    features: [
      '2 Director Identification Numbers (DIN)',
      'Digital Signature Certificates (Class 3 DSC)',
      'RUN / SPICe+ Part A Name Approval',
      'Certificate of Incorporation + PAN & TAN',
      'Drafting of MOA & AOA by qualified CS/CA',
      'Free Current Account opening guidance'
    ],
    documentsRequired: ['PAN card & Aadhaar of all directors', 'Passport sized photograph', 'Latest bank statement / electricity bill (registered office)', 'NOC from property owner']
  },
  {
    id: 'llp',
    title: 'LLP Registration Online',
    category: 'incorporation',
    badge: 'Register in Just 7 Days',
    tagline: 'Start your LLP registration with Bizforgex through a simple, fully online process',
    description: 'Register a Limited Liability Partnership backed by expert assistance and transparent pricing. Benefit from limited liability protection without the strict compliance overhead of private limited entities.',
    turnaroundTime: 'Just 7 Days',
    startingPrice: '₹2,499*',
    popular: true,
    features: [
      'DPIN for 2 Designated Partners',
      'DSC for 2 Designated Partners',
      'Name Reservation on MCA portal',
      'Drafting & Form 3 filing of LLP Agreement',
      'PAN & TAN for the LLP entity'
    ],
    documentsRequired: ['Partner PAN & Aadhaar/Passport', 'Address proof for registered office', 'Utility bill & landlord NOC']
  },
  {
    id: 'opc',
    title: 'One Person Company Registration',
    category: 'incorporation',
    badge: 'Rated 4.8/5 by 42,800+ Entrepreneurs',
    tagline: 'Ready to start your business journey solo with full corporate shield',
    description: 'All the legal status and credibility of a corporate structure designed for single founders. Limited personal liability with 1 nominee.',
    turnaroundTime: '5 - 7 Days',
    startingPrice: '₹1,499*',
    features: [
      'Dedicated solo founder corporate structure',
      'Nominee director paperwork handling',
      'SPICe+ MCA electronic submission',
      'PAN & TAN issuance + bank account'
    ],
    documentsRequired: ['Founder PAN & Aadhaar', 'Nominee consent form (INC-3)', 'Nominee ID proof', 'Office premises proof']
  },
  {
    id: 'partnership',
    title: 'Partnership Firm Registration in India',
    category: 'incorporation',
    badge: 'Grab 50% Off on Bizforgex® Expert Services',
    tagline: 'Are you seeking partnership firm registration with notarized deed?',
    description: 'Drafting of comprehensive Partnership Deeds with state-specific stamp duty guidance and Registrar of Firms (ROF) registration.',
    turnaroundTime: '3 - 5 Days',
    startingPrice: '₹1,299*',
    features: ['Custom Partnership Deed drafting', 'Stamp duty & Notary guidance', 'PAN & TAN application support', 'Bank resolution draft'],
    documentsRequired: ['All partners PAN cards', 'Aadhaar / Voter ID', 'Commercial address proof & lease deed']
  },
  {
    id: 'msme',
    title: 'MSME Registration (Udyam Certificate)',
    category: 'government',
    badge: 'Get Your Udyam Certificate Easily',
    tagline: 'Looking to grow your business and access government schemes and subsidies?',
    description: 'Instant official Udyam Certificate directly linked with your Aadhaar and PAN to claim central & state startup incentives, priority credit, and tender preferences.',
    turnaroundTime: 'Same Day (2 - 4 Hours)',
    startingPrice: '₹499*',
    popular: true,
    features: [
      'Zero collateral loan eligibility benefits',
      '50% discount on Trademark and Patent filings',
      'Protection against delayed payments (MSME Samadhaan)',
      'Electricity bill concession and ISO subsidies'
    ],
    documentsRequired: ['Aadhaar card linked to mobile OTP', 'PAN card of enterprise / proprietor', 'Bank account details']
  },
  {
    id: 'iec',
    title: 'IEC Registration (Import Export Code)',
    category: 'licenses',
    badge: 'Free Consultation for DGFT License',
    tagline: 'Are you looking to scale up your business outside India? Manage foreign trade easily',
    description: 'Direct online DGFT portal filing with automatic PAN-based IEC issuance and verification support for cross-border transactions.',
    turnaroundTime: '1 - 2 Days',
    startingPrice: '₹1,499*',
    popular: true,
    features: ['DGFT IEC profile creation', 'Digital Signature integration', 'Foreign trade policy advisory', 'Bank AD code assistance'],
    documentsRequired: ['Entity PAN card', 'Cancelled cheque with printed entity name', 'Address proof of premises']
  },
  {
    id: 'fssai',
    title: 'FSSAI Registration & Food License',
    category: 'licenses',
    badge: 'Application Filing in 1 Hour',
    tagline: 'Losing customers because your FSSAI registration is still pending? Bizforgex makes it quick',
    description: 'Get your 14-digit FSSAI license smoothly: Basic registration, State License, or Central License for multi-state food businesses, cloud kitchens, and restaurants.',
    turnaroundTime: '1 Hour Application Filing',
    startingPrice: '₹999*',
    popular: true,
    features: [
      'Form A / Form B preparation',
      'Food safety management plan advisory',
      'Government fee calculation & payment assistance',
      'Direct monitoring of food safety officer queries'
    ],
    documentsRequired: ['Photo of applicant', 'Government ID', 'Premises possession proof (Rent agreement/Electricity bill)', 'Food category list']
  },
  {
    id: 'epf',
    title: 'EPF Registration Process Online for Employer',
    category: 'government',
    badge: 'Get Approved with Zero Hassle',
    tagline: 'Facing delays in EPF registration and afraid of making mistakes? Let experts ease the process',
    description: 'Employee Provident Fund (EPF) registration for employers under the EPFO portal with compliance guidance for statutory contributions.',
    turnaroundTime: '3 - 5 Days',
    startingPrice: '₹1,999*',
    features: ['EPFO employer establishment code', 'DSC registration on Shram Suvidha', 'Staff onboarding template', 'Monthly ECR return guidance'],
    documentsRequired: ['Business registration proof', 'PAN & Aadhaar of authorized signatory', 'Specimen signature card', 'Employee list']
  },
  {
    id: 'shop-act',
    title: 'Shop and Establishment License',
    category: 'licenses',
    badge: 'Mandatory Municipal Legal Approval',
    tagline: 'Ensure both organized and unorganized commercial activities are properly permitted',
    description: 'Registration under the State Shops and Commercial Establishments Act to legalize retail shops, corporate offices, and warehouses.',
    turnaroundTime: '2 - 5 Days',
    startingPrice: '₹1,199*',
    features: ['State labor department online submission', 'Commercial license certificate download', 'Fire safety declaration verification', 'Annual renewal tracking'],
    documentsRequired: ['Rental agreement & tax receipt of property', 'Entity registration certificate', 'Applicant identity document']
  },
  {
    id: 'psara',
    title: 'PSARA License in India (Security Agencies)',
    category: 'licenses',
    badge: 'Limited-Time Deal: Save Up to 50%',
    tagline: 'Worried about challenges in PSARA License registration in India? We handle state approvals',
    description: 'Complete documentation, MOU with approved security guard training institutes, police verification assistance, and state home department filing.',
    turnaroundTime: '30 - 45 Days',
    startingPrice: '₹14,999*',
    features: ['State home ministry portal compliance', 'Security training institute MOU arrangement', 'Director character & background clearance', 'Arms license advisory where applicable'],
    documentsRequired: ['Controlling authority application', 'Ex-servicemen / civilian training affidavit', 'Premises lease agreement']
  },
  {
    id: 'ce-iso',
    title: 'Apply For CE Certification in India',
    category: 'certifications',
    badge: 'European Conformity & Quality Audits',
    tagline: 'Are you experiencing delays in getting your CE or ISO certification? Let Bizforgex ease the process',
    description: 'Conformité Européenne (CE) marking and ISO 9001, 14001, 27001 certifications enabling exporters to sell compliant goods across European and global markets.',
    turnaroundTime: '10 - 15 Days',
    startingPrice: '₹8,999*',
    features: ['Technical file documentation', 'Accredited audit body liaison', 'Declaration of Conformity (DoC)', 'Global export compliance badge'],
    documentsRequired: ['Product test reports', 'Technical drawings & user manual', 'Factory quality management documentation']
  },
  {
    id: 'trade-license',
    title: 'Trade License in India - Apply in 2 Minutes',
    category: 'licenses',
    badge: 'Apply in 2 Minutes Online',
    tagline: 'Need a trade license in India, but are unaware of the online application steps?',
    description: 'Procure municipal trade licenses from civic bodies across all 28 Indian states to validate that your trade activities are safe and authorized.',
    turnaroundTime: '3 - 7 Days',
    startingPrice: '₹1,499*',
    features: ['Municipal corporation portal submission', 'Zonal inspector liaison', 'Trade fee calculation', 'Express processing'],
    documentsRequired: ['Premises property tax receipt / rent agreement', 'Consent letter from landlord', 'PAN and Certificate of Incorporation']
  },
  {
    id: 'bis-certification',
    title: 'BIS Certification & ISI Mark',
    category: 'certifications',
    badge: 'Mandatory Product Quality Standards',
    tagline: 'Compulsory compliance for electronics, toys, steel & industrial goods',
    description: 'End-to-end liaison with Bureau of Indian Standards (BIS) covering testing coordination, lab audit documentation, and FMCS/CRS registration.',
    turnaroundTime: '15 - 30 Days',
    startingPrice: '₹9,999*',
    features: ['BIS CRS (Compulsory Registration Scheme)', 'ISI Mark grant support', 'FMCS for foreign manufacturers', 'Accredited testing lab coordination'],
    documentsRequired: ['Factory manufacturing license', 'Test reports from recognized labs', 'List of machinery and quality control equipment']
  },
  {
    id: 'gst-reg',
    title: 'GST Registration & Return Filing',
    category: 'taxation',
    badge: 'Zero Penalty Guarantee',
    tagline: 'Obtain your 15-digit GSTIN within 3-5 days and automate monthly returns',
    description: 'Goods & Services Tax registration and regular return filings (GSTR-1, GSTR-3B) with input tax credit reconciliation.',
    turnaroundTime: '3 - 5 Days',
    startingPrice: '₹799*',
    popular: true,
    features: ['New GSTIN issuance', 'Biometric / Aadhaar OTP authentication', 'HSN/SAC code mapping', 'Monthly return packages available'],
    documentsRequired: ['PAN card & Aadhaar of business owner', 'Cancelled cheque / bank statement', 'Registered office address proof']
  },
  {
    id: 'trademark',
    title: 'Trademark Registration & Protection',
    category: 'ip',
    badge: 'Use ™ within 24 Hours',
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
  }
];

export const WHO_WE_ARE_CONTENT = {
  heading: 'WHO WE ARE',
  title: 'Your Trusted Partner for Business Growth & Compliance',
  subtitle: 'Bizforgex is a technology-driven business compliance platform dedicated to providing reliable registration, licensing, certification, and legal compliance services to startups, MSMEs, and enterprises across India.',
  description: 'We simplify legal registrations, certifications, licensing, and regulatory compliance through expert guidance, transparent processes, and timely execution. Our commitment to excellence and client satisfaction is reflected in everything we do.',
  features: [
    {
      title: "India's Modern Legal Tech Platform",
      desc: "Bizforgex is a technology-driven business compliance platform dedicated to providing reliable licensing, registration, certification, and legal compliance services to startups, entrepreneurs, and businesses across India."
    },
    {
      title: '99.9% Client Satisfaction',
      desc: "At Bizforgex, client satisfaction is our top priority. We deliver reliable, transparent, and efficient business registration and compliance solutions tailored to meet every client's unique requirements."
    },
    {
      title: 'Excellent Advisory Services',
      desc: "With a team of experienced legal and compliance professionals, Bizforgex delivers expert guidance and end-to-end support, ensuring your business registrations, certifications, and licensing processes are smooth, hassle-free, and fully compliant."
    }
  ]
};

export const WORKING_PROCESS_STEPS = [
  {
    step: '1',
    title: 'Fill Up Application Form',
    desc: 'Submit your basic business and personal details through our quick, simplified online form.'
  },
  {
    step: '2',
    title: 'Make Online Payment',
    desc: 'Pay securely using our transparent online checkout with zero hidden consultation surcharges.'
  },
  {
    step: '3',
    title: 'Executive Will Process Application',
    desc: 'Our dedicated CS/CA compliance executive prepares drafts, files with government portals, and handles verification.'
  },
  {
    step: '4',
    title: 'Receive Certificate & License',
    desc: 'Get your approved government registration certificate, license number, and compliance documents delivered directly.'
  }
];

export const STATS = [
  { label: 'Client Rating', value: '4.8', suffix: '★' },
  { label: 'Business Registrations', value: '12,500', suffix: '+' },
  { label: 'States Covered', value: '28', suffix: ' States' },
  { label: 'Avg. Turnaround', value: '7', suffix: ' Days' }
];
