import armstrongLogo from './photos/armstrong.png';
import weirLogo from './photos/weir.png';
import vogelsangLogo from './photos/vogelsang.png';
import mapnerLogo from './photos/mapner.png';
import ddiLogo from './photos/ddi.png';
import ataraLogo from './photos/atara.png';
import turbowinLogo from './photos/turbowin.png';
import fujiwaraLogo from './photos/fujiwara.png';
import flowserveLogo from './photos/flowserve.png';
import hidrostalLogo from './photos/hidrostal.png';
import trilliumLogo from './photos/trillium.png';
import svenLogo from './photos/sioux.png';

/** Abbreviation for manufacturer rows without a logo image. */
export function manufacturerInitials(name: string): string {
  const cleaned = name.replace(/[^a-zA-Z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  const parts = cleaned.split(' ').filter(Boolean);
  if (parts.length === 0) return name.slice(0, 3).toUpperCase();
  if (parts.length === 1) return parts[0]!.slice(0, 3).toUpperCase();
  return parts.map((p) => p[0]).join('').slice(0, 3).toUpperCase();
}

export const NAV_LINKS = [
  { name: 'Services', href: '/#services' },
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/#industries' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const PRODUCT_CATEGORIES = [
  { name: 'Pumps & Pump Parts', icon: 'Droplets' },
  { name: 'Heat Transfer Equipment', icon: 'Thermometer' },
  { name: 'Mixers & Aeration', icon: 'Wind' },
  { name: 'Process Equipment', icon: 'Factory' },
];

export const INDUSTRIES = [
  'Municipal Water Treatment',
  'Municipal Wastewater Treatment',
  'Stormwater Management',
  'Water Distribution',
  'Utilities & Public Works',
];

/** Public-facing brand strip and partner list — exact client roster (no DDI). */
export const BRANDS = [
  'Vogelsang',
  'Weir',
  'Trillium (WEMCO)',
  'Hidrostal',
  'Fujiwara',
  'Armstrong',
  'Flowserve',
  'Turbowin',
  'Atara',
  'Sven',
  'Mapner',
];

/**
 * Full catalog for products page & home preview cards.
 * Order: client brand list, then DDI (catalog only — not in BRANDS strip).
 */
export const MANUFACTURERS = [
  {
    name: 'Vogelsang',
    logo: vogelsangLogo,
    specialty: 'Rotary Lobe Technology',
    products: [
      'Rotary Lobe Pumps',
      'Maceration Systems',
      'Biogas Equipment',
      'Distribution Systems',
      'Progressive Cavity Pumps',
    ],
  },
  {
    name: 'Weir',
    logo: weirLogo,
    specialty: 'Slurry & Process Pumps',
    products: ['Slurry Pumps', 'Dewatering Pumps', 'Process Pumps', 'Rubber-Lined Pumps'],
  },
  {
    name: 'Trillium (WEMCO)',
    logo: trilliumLogo,
    specialty: 'Municipal Process Equipment',
    products: [
      'Torque Flow Pumps',
      'Grit Removal Systems',
      'Screw Flow Pumps',
      'Chop Flow Pumps',
      'Self-Priming Pumps',
    ],
  },
  {
    name: 'Hidrostal',
    logo: hidrostalLogo,
    specialty: 'Screw Centrifugal & Mixing',
    products: [
      'Screw Centrifugal Pumps',
      'Pre-Rostal Pumping Systems',
      'Digester Mixing',
    ],
  },
  {
    name: 'Fujiwara',
    logo: fujiwaraLogo,
    specialty: 'Sludge & Scum Systems',
    products: ['Sludge and Scum Removal Systems'],
  },
  {
    name: 'Armstrong',
    logo: armstrongLogo,
    specialty: 'Pumping Solutions',
    products: [
      'Centrifugal Pumps',
      'Vertical Turbine Pumps',
      'Pump Controllers',
      'Heat Exchangers',
      'Booster Systems',
    ],
  },
  {
    name: 'Flowserve',
    logo: flowserveLogo,
    specialty: 'Engineered Pump Solutions',
    products: [
      'Vertical Turbine Pumps',
      'Split-Case Pumps',
      'SIHI Vacuum Pumps',
      'Byron Jackson Pumps',
      'Durco Innomag Worthington',
    ],
  },
  {
    name: 'Turbowin',
    logo: turbowinLogo,
    specialty: 'Compression & Blower Technology',
    products: ['Air-Bearing Compressors', 'Blowers'],
  },
  {
    name: 'Atara',
    logo: ataraLogo,
    specialty: 'Conveying Equipment',
    products: ['Shaftless Screw Conveyors'],
  },
  {
    name: 'Sven',
    logo: svenLogo,
    specialty: 'Polymer & Chemical Systems',
    products: [
      'Chemical Mixing Systems',
      'Polymer Mixing',
      'Injection Systems',
      'Polymer Dosing Systems',
    ],
  },
  {
    name: 'Mapner',
    logo: mapnerLogo,
    specialty: 'Compression Equipment',
    products: ['Sliding Vane Compressors'],
  },
  {
    name: 'DDI',
    logo: ddiLogo,
    specialty: 'Thermal Management',
    products: ['Cube & Cube Heat Exchangers', 'Sludge Heat Exchangers', 'Heat Recovery'],
  },
];

/** Count on the public brand strip (`BRANDS`). */
export const BRAND_PARTNER_COUNT = BRANDS.length;

export const SERVICES = [
  {
    title: 'Pump Refurbishment',
    description:
      'Complete refurbishment of municipal pumps and rotating equipment — disassembly, inspection, rebuild, and testing to restore rated performance and extend service life.',
    icon: 'Droplets',
  },
  {
    title: 'Field Refurbishment Support',
    description:
      'On-site support for refurbishment projects at water and wastewater facilities — coordinated shutdowns, removal assistance, and recommissioning to minimize downtime.',
    icon: 'Wrench',
  },
  {
    title: 'Refurbishment Engineering',
    description:
      'Technical assessments and specifications for refurbishment work — documenting wear, defining scope, and aligning rebuilt equipment with your facility’s operating conditions.',
    icon: 'DraftingCompass',
  },
  {
    title: 'Quality Assurance & Testing',
    description:
      'Structured acceptance testing and documentation after refurbishment — verifying performance, efficiency, and reliability before equipment returns to service.',
    icon: 'Cpu',
  },
];

export const REPAIR_SERVICES = ['Pump Repair', 'Gas Compressor Repair', 'Blower Repair'];

export const WHY_CHOOSE_US = [
  {
    title: 'Authorized Brand Partnerships',
    description:
      'Direct relationships with our manufacturer brand partners — genuine parts, warranty-aligned support, and refurbishment scope tied to municipal infrastructure needs.',
  },
  {
    title: '24-Hour Emergency Response',
    description:
      'Municipal operations cannot afford downtime. Our technicians are available around the clock for urgent pump failures and critical repairs.',
  },
  {
    title: 'Refurbishment Expertise',
    description:
      'Focused refurbishment programs that restore pumps and process equipment to reliable operating condition — reducing capital spend compared to full replacement.',
  },
  {
    title: 'Municipal Expertise',
    description:
      'Decades of experience working with water and wastewater treatment facilities means we understand the standards, timelines, and accountability municipalities require.',
  },
];

export const CONTACT_INFO = {
  phone: '(905) 565-9606',
  email: 'sales@directrik.com',
  location: 'Ontario, Canada',
};

/** Short footer blurb (home + inner pages). */
export const SITE_FOOTER_TAGLINE =
  'Pump refurbishment, parts, and support for municipal water and wastewater facilities across Ontario and North America.';

export const TRUST_STATS = [
  { value: '25+', label: 'Years Serving Municipalities' },
  { value: String(BRAND_PARTNER_COUNT), label: 'Brand Partners' },
  { value: '1,000+', label: 'Municipal Projects Completed' },
  { value: '24/7', label: 'Emergency Repair Service' },
];
