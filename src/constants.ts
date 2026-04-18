import armstrongLogo from './photos/armstrong.png';
import weirLogo      from './photos/weir.png';
import vogelsangLogo from './photos/vogelsang.png';
import mapnerLogo    from './photos/mapner.png';
import ddiLogo       from './photos/ddi.png';
import ataraLogo     from './photos/atara.png';
import siouxLogo     from './photos/sioux.png';
import turbowinLogo  from './photos/turbowin.png';
import fujiwaraLogo  from './photos/fujiwara.png';

export const NAV_LINKS = [
  { name: 'Services',   href: '/#services' },
  { name: 'Products',   href: '/products' },
  { name: 'Industries', href: '/#industries' },
  { name: 'About',      href: '/about' },
  { name: 'Contact',    href: '/contact' },
];

export const PRODUCT_CATEGORIES = [
  { name: 'Pumps & Pump Parts',       icon: 'Droplets' },
  { name: 'Valves & Flow Control',    icon: 'Settings2' },
  { name: 'Heat Transfer Equipment',  icon: 'Thermometer' },
  { name: 'Mixers & Aeration',        icon: 'Wind' },
  { name: 'Process Equipment',        icon: 'Factory' },
];

export const INDUSTRIES = [
  'Municipal Water Treatment',
  'Municipal Wastewater Treatment',
  'Stormwater Management',
  'Water Distribution',
  'Utilities & Public Works',
];

export const BRANDS = [
  'Armstrong',
  'Weir',
  'Vogelsang',
  'Mapner',
  'Enersave Mixers',
  'DDI Heat Exchanger',
  'Atara Equipment',
  'Sioux Valley Environmental',
  'Turbowin',
  'Fujiwara',
];

export const MANUFACTURERS = [
  {
    name: 'Armstrong',
    logo: armstrongLogo,
    specialty: 'Pumping Solutions',
    products: ['Centrifugal Pumps', 'Vertical Turbine Pumps', 'Pump Controllers', 'Heat Exchangers'],
  },
  {
    name: 'Weir',
    logo: weirLogo,
    specialty: 'Slurry & Process Pumps',
    products: ['Slurry Pumps', 'Dewatering Pumps', 'Process Pumps', 'Valves'],
  },
  {
    name: 'Vogelsang',
    logo: vogelsangLogo,
    specialty: 'Rotary Lobe Technology',
    products: ['Rotary Lobe Pumps', 'Maceration Systems', 'Biogas Equipment', 'Distribution Systems'],
  },
  {
    name: 'Mapner',
    logo: mapnerLogo,
    specialty: 'Industrial Centrifugal Pumps',
    products: ['End Suction Pumps', 'Split Case Pumps', 'Multistage Pumps', 'Vertical Pumps'],
  },
  {
    name: 'Enersave Mixers',
    logo: null,
    specialty: 'Industrial Mixing Systems',
    products: ['Submersible Mixers', 'Top Entry Mixers', 'Side Entry Mixers', 'Aerators'],
  },
  {
    name: 'DDI Heat Exchanger',
    logo: ddiLogo,
    specialty: 'Thermal Management',
    products: ['Shell & Tube Exchangers', 'Plate Heat Exchangers', 'Air Coolers', 'Condensers'],
  },
  {
    name: 'Atara Equipment',
    logo: ataraLogo,
    specialty: 'Specialty Process Equipment',
    products: ['Pressure Vessels', 'Separators', 'Skid Packages', 'Custom Fabrications'],
  },
  {
    name: 'Sioux Valley Environmental',
    logo: siouxLogo,
    specialty: 'Environmental Systems',
    products: ['Biofilter Systems', 'Odour Control', 'Chemical Dosing', 'Water Treatment'],
  },
  {
    name: 'Turbowin',
    logo: turbowinLogo,
    specialty: 'Blower Technology',
    products: ['Rotary Screw Blowers', 'Turbo Blowers', 'Roots Blowers', 'Blower Controls'],
  },
  {
    name: 'Fujiwara',
    logo: fujiwaraLogo,
    specialty: 'Precision Gear Pumps',
    products: ['Gear Pumps', 'Lobe Pumps', 'Screw Pumps', 'Chemical Metering Pumps'],
  },
];

export const SERVICES = [
  {
    title: 'Pump Supply & Parts',
    description: 'Authorized distributor for pumps and pump components — including impellers, seals, wear rings, and replacement parts for municipal water and wastewater applications.',
    icon: 'Droplets',
  },
  {
    title: 'On-Site Pump Repair',
    description: 'Rapid field service for pump failures at water and wastewater treatment facilities — technicians available within 24 hours to restore operations.',
    icon: 'Wrench',
  },
  {
    title: 'System Engineering',
    description: 'Technical support for pump selection, system design, and equipment specification for new construction and rehabilitation projects at municipal facilities.',
    icon: 'DraftingCompass',
  },
  {
    title: 'Machining & Refurbishment',
    description: 'In-house machining and pump component restoration to extend equipment service life and reduce capital replacement costs for municipalities.',
    icon: 'Cpu',
  },
];

export const REPAIR_SERVICES = [
  'Pump Repair',
  'Gas Compressor Repair',
  'Blower Repair',
];

export const WHY_CHOOSE_US = [
  {
    title: 'Authorized Distributor',
    description: 'Direct factory partnerships with leading pump manufacturers — ensuring genuine parts and full warranty support for municipal infrastructure.',
  },
  {
    title: '24-Hour Emergency Response',
    description: 'Municipal operations cannot afford downtime. Our technicians are available around the clock for urgent pump failures and critical repairs.',
  },
  {
    title: 'In-House Machining',
    description: 'We restore pump components to original specification in-house — reducing lead times and eliminating the need for full equipment replacement.',
  },
  {
    title: 'Municipal Expertise',
    description: 'Decades of experience working with water and wastewater treatment facilities means we understand the standards, timelines, and accountability municipalities require.',
  },
];

export const CONTACT_INFO = {
  phone: '(905) 565-9606',
  email: 'sales@directrik.com',
  location: 'Ontario, Canada',
};

export const TRUST_STATS = [
  { value: '25+',    label: 'Years Serving Municipalities' },
  { value: '10+',    label: 'Authorized Pump Manufacturers' },
  { value: '1,000+', label: 'Municipal Projects Completed' },
  { value: '24/7',   label: 'Emergency Repair Service' },
];
