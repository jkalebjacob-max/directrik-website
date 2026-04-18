import { useState } from 'react';
import { motion } from 'motion/react';
import directrikLogo from '../assets/logos/directrik.png';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Phone, Mail, Menu, X,
  Droplets, Wrench, DraftingCompass, Cpu,
  CheckCircle2, Shield, Users, Zap,
} from 'lucide-react';
import { NAV_LINKS, INDUSTRIES, WHY_CHOOSE_US, CONTACT_INFO } from '../constants';

const SERVICES_SUMMARY = [
  {
    icon: Droplets,
    title: 'Equipment Supply',
    description: 'Authorized distributor for pumps, compressors, blowers, heat exchangers, valves, and complete fluid control systems.',
  },
  {
    icon: Wrench,
    title: 'On-Site Repair',
    description: 'Rapid field service for pump, compressor, and blower emergencies — with technicians deployable within 24 hours.',
  },
  {
    icon: DraftingCompass,
    title: 'System Engineering',
    description: 'Custom-engineered fluid handling systems designed from initial specification through to commissioning.',
  },
  {
    icon: Cpu,
    title: 'Machining & Refurbishment',
    description: 'Precision in-house machining and component restoration to extend equipment life and minimize capital expenditure.',
  },
];

const EXPERTISE_STATS = [
  { value: '25+',    label: 'Years in Operation' },
  { value: '10+',    label: 'Authorized Manufacturers' },
  { value: '1,000+', label: 'Projects Completed' },
  { value: '24/7',   label: 'Emergency Response' },
];

const INDUSTRY_DETAILS: Record<string, string> = {
  'Municipal Water Treatment':       'Pumps, mixers, and filtration equipment for water treatment plants — from raw water intake through distribution.',
  'Municipal Wastewater Treatment':  'Submersible pumps, aerators, and solids-handling equipment for primary, secondary, and tertiary wastewater treatment processes.',
  'Stormwater Management':           'Wet well pumps, lift station equipment, and controls for stormwater collection and overflow management.',
  'Water Distribution':              'High-efficiency centrifugal and booster pumps for pressurized water distribution networks serving residential and industrial areas.',
  'Utilities & Public Works':        'Reliable pump systems for public works departments managing municipal water supply, sewer, and utility infrastructure.',
};

const WHY_ICONS = [Shield, Zap, Users, CheckCircle2];

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-brand-200 selection:text-brand-900">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img src={directrikLogo} alt="Directrik Logo" className="h-9 w-auto object-contain" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link key={link.name} to={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors">
                  {link.name}
                </Link>
              ))}
              <Link to="/contact"
                className="bg-brand-900 text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-brand-800 transition-all shadow-sm">
                Request a Quote
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-slate-100 px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} to={link.href}
                className="block text-base font-medium text-slate-600 hover:text-brand-900"
                onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link to="/contact"
              className="block w-full text-center bg-brand-900 text-white px-6 py-3 rounded-sm text-sm font-semibold"
              onClick={() => setIsMenuOpen(false)}>
              Request a Quote
            </Link>
          </motion.div>
        )}
      </nav>

      <main className="pt-20">

        {/* ── Hero ── */}
        <div className="relative bg-brand-900 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_90%_at_0%_50%,rgba(72,101,129,0.25),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <p className="text-xs font-bold text-accent uppercase tracking-[0.18em] mb-5">About Directrik</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6">
                Pump Expertise Built for Municipal Water & Wastewater Operations
              </h1>
              <p className="text-slate-400 text-lg leading-[1.7] max-w-2xl">
                Directrik Inc. is an authorized pump distributor and service provider based in Ontario, Canada. We supply pumps, pump parts, and repair services to municipalities operating water treatment and wastewater treatment infrastructure across Canada and the United States.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="bg-slate-900 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap divide-x divide-white/10">
              {EXPERTISE_STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.07, duration: 0.4 }}
                  className="flex-1 min-w-[120px] py-6 px-6 text-center"
                >
                  <p className="text-2xl font-bold text-white leading-none">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-2 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Company Overview ── */}
        <section className="pt-24 pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Who We Are</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-900 tracking-[-0.025em] mb-6">
                  A Trusted Partner for Municipal Infrastructure
                </h3>
                <div className="space-y-5 text-slate-600 leading-[1.78]">
                  <p>
                    Founded on deep technical knowledge and long-standing manufacturer relationships, Directrik supplies pumps, pump components, and repair services specifically to municipalities and public utilities managing water and wastewater infrastructure.
                  </p>
                  <p>
                    We work directly with plant operators, engineers, and procurement teams to identify the right pump for each application — whether it's a new installation, a replacement, or an urgent repair. Our team provides hands-on technical support that goes well beyond catalogue distribution.
                  </p>
                  <p>
                    Headquartered in Ontario, we serve municipal clients across Canada and the United States, with on-site field service capabilities and in-house machining for pump component restoration.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative"
              >
                {/* Ambient glow */}
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent/6 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-300/8 rounded-full blur-3xl pointer-events-none" />
                {/* Offset depth frame */}
                <div className="absolute bottom-[-12px] right-[-12px] w-full h-[420px] border border-slate-300/50 z-0" />
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000"
                  alt="Directrik engineering team"
                  className="w-full h-[420px] object-cover rounded-sm shadow-2xl ring-1 ring-slate-900/8 relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Our Approach ── */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">How We Work</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-900 tracking-[-0.025em] max-w-xl">
                Our Approach
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  step: '01',
                  title: 'Understand the Facility & Application',
                  description: 'We start by reviewing your system requirements, flow conditions, site constraints, and existing equipment — so the pump we recommend is the right fit, not just the easiest one to supply.',
                },
                {
                  step: '02',
                  title: 'Supply the Right Equipment',
                  description: 'We source pumps and components from our authorized manufacturer network and confirm compatibility with your facility\'s operating conditions before anything ships.',
                },
                {
                  step: '03',
                  title: 'Support the Life of the Equipment',
                  description: 'We stay involved after delivery. Our team provides on-site repair, scheduled maintenance, emergency response, and in-house machining to keep municipal systems running reliably over the long term.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.45, ease: 'easeOut' }}
                  whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
                  className="relative bg-white border border-slate-200/80 shadow-sm shadow-slate-200/50 p-8 group hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-250 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="block text-4xl font-extrabold text-slate-300 leading-none mb-5 tracking-tight select-none group-hover:text-slate-400 transition-colors duration-200">
                    {item.step}
                  </span>
                  <h4 className="text-base font-bold text-brand-900 mb-3 tracking-tight leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What We Do (Capabilities) ── */}
        <section className="pt-20 pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Capabilities</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-900 tracking-[-0.025em]">
                  Equipment, Engineering & Service
                </h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                The specific product categories and service disciplines that make up Directrik's technical offering.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES_SUMMARY.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.45, ease: 'easeOut' }}
                    whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
                    className="relative bg-white border border-slate-200/80 shadow-sm shadow-slate-200/50 p-7 group hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-250 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-10 h-10 bg-brand-50 border border-brand-100 rounded-sm flex items-center justify-center mb-5 group-hover:bg-brand-900 group-hover:border-brand-900 transition-all duration-200">
                      <Icon size={20} className="text-brand-700 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <h4 className="text-sm font-bold text-brand-900 mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Industries ── */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 items-start">

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="lg:sticky lg:top-28"
              >
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Market Expertise</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-900 tracking-[-0.025em] mb-5">
                  Municipal Applications We Support
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our pump supply and service work spans the core areas of municipal water infrastructure, each with distinct flow requirements, regulatory standards, and operational demands.
                </p>
              </motion.div>

              <div className="space-y-4">
                {INDUSTRIES.map((industry, idx) => (
                  <motion.div
                    key={industry}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.07, duration: 0.4, ease: 'easeOut' }}
                    className="flex items-start gap-5 p-6 border border-slate-200/80 bg-white shadow-sm shadow-slate-200/40 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/70 transition-all duration-250 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-900 mb-1 tracking-tight">{industry}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{INDUSTRY_DETAILS[industry]}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Directrik ── */}
        <section className="py-24 bg-brand-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">The Directrik Advantage</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.025em]">
                Why Municipalities Choose Directrik
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {WHY_CHOOSE_US.map((item, idx) => {
                const Icon = WHY_ICONS[idx];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.45, ease: 'easeOut' }}
                    whileHover={{ y: -3, transition: { duration: 0.2, ease: 'easeOut' } }}
                    className="bg-white/5 border border-white/10 p-7 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-brand-900/20 transition-all duration-250 group"
                  >
                    <div className="w-10 h-10 rounded-sm bg-accent/15 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:border-accent transition-all duration-200">
                      <Icon size={18} className="text-accent group-hover:text-white transition-colors duration-200" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(242,125,38,0.05),transparent)] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <p className="text-xs font-bold text-accent uppercase tracking-[0.18em] mb-5">Work With Us</p>
              <h2 className="text-3xl md:text-[2.75rem] font-bold text-brand-900 tracking-[-0.03em] leading-[1.1] mb-5">
                Get the Right Pump for Your Facility
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-xl mx-auto">
                Talk to our team about your water or wastewater application. We'll specify the right pump and service plan for your facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-accent text-white px-9 py-4 rounded-sm font-bold text-sm hover:bg-orange-600 hover:-translate-y-px hover:shadow-xl hover:shadow-orange-700/25 transition-all duration-200 group"
                >
                  Request a Quote
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center bg-white text-brand-900 border border-slate-300 px-9 py-4 rounded-sm font-bold text-sm hover:border-slate-400 hover:shadow-md transition-all duration-200"
                >
                  View Our Products
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
            <div>
              <img src={directrikLogo} alt="Directrik Logo" className="h-8 w-auto object-contain mb-3 brightness-0 invert" />
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Authorized industrial distributor for pumps, fluid systems, and process equipment across North America.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                <Phone size={14} />{CONTACT_INFO.phone}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                <Mail size={14} />{CONTACT_INFO.email}
              </a>
            </div>
          </div>
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs">© {new Date().getFullYear()} Directrik Inc. All rights reserved.</p>
            <Link to="/" className="text-slate-500 hover:text-white text-xs transition-colors">← Back to Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
