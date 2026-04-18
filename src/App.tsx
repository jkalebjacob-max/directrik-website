import { useState } from 'react';
import heroBg from './photos/hero1.png';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Droplets,
  Settings2,
  Thermometer,
  Wind,
  Factory,
  DraftingCompass,
  Wrench,
  Cpu,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
} from 'lucide-react';
import {
  NAV_LINKS,
  PRODUCT_CATEGORIES,
  INDUSTRIES,
  BRANDS,
  SERVICES,
  WHY_CHOOSE_US,
  CONTACT_INFO,
  MANUFACTURERS,
  TRUST_STATS,
} from './constants';

const IconMap: Record<string, any> = {
  Droplets, Settings2, Thermometer, Wind, Factory,
  DraftingCompass, Wrench, Cpu,
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-brand-200 selection:text-brand-900">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-brand-900">
              DIRECTRIK<span className="text-accent">.</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-brand-900 text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-brand-800 transition-all shadow-sm"
              >
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
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-slate-100 px-4 py-6 space-y-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-base font-medium text-slate-600 hover:text-brand-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full text-center bg-brand-900 text-white px-6 py-3 rounded-sm text-sm font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Request a Quote
            </Link>
          </motion.div>
        )}
      </nav>

      <main className="pt-20">

        {/* ── Hero ── */}
        <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-brand-900">

          {/* Background image — full opacity, gradient does the work */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroBg}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
            {/* Left-to-right: strong cover on text side, fades to nearly clear on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/80 to-brand-900/25" />
            {/* Bottom vignette for grounding */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/65 via-transparent to-transparent" />
            {/* Subtle top darkening so nav transition is smooth */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-900/30 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/25 px-3 py-1.5 rounded-full mb-7">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span className="text-accent text-xs font-bold uppercase tracking-[0.15em]">
                  Authorized Pump Distributor — Ontario
                </span>
              </div>

              <h1 className="text-5xl md:text-[4rem] font-bold text-white tracking-[-0.03em] leading-[1.08] mb-6">
                Reliable Pumps for Water<br />
                <span className="text-slate-300">& Wastewater Treatment.</span>
              </h1>

              <p className="text-base text-slate-300 leading-[1.75] mb-10 max-w-lg">
                Directrik supplies pumps, pump parts, and repair services to municipalities and public utilities operating water treatment and wastewater treatment facilities across Ontario and beyond.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-sm font-bold hover:bg-orange-600 hover:-translate-y-px hover:shadow-xl hover:shadow-orange-700/25 transition-all duration-200 group"
                >
                  Request a Quote
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-sm font-bold hover:bg-white/18 transition-all duration-200"
                >
                  View Products
                </Link>
              </div>

              {/* Trust stats */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-white/10">
                {TRUST_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-bold text-white leading-none">{stat.value}</p>
                    <p className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Brand strip ── */}
        <div className="bg-slate-50 border-y border-slate-200 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-7">
              Authorized distributor for leading pump manufacturers
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-50 grayscale hover:opacity-70 transition-all duration-500">
              {BRANDS.slice(0, 6).map((brand) => (
                <span key={brand} className="text-lg md:text-xl font-black text-slate-800 tracking-tighter italic">
                  {brand.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── What We Do ── */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Core Capabilities</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-brand-900 tracking-[-0.025em]">
                  What We Do
                </h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                From pump supply and parts to on-site repair and long-term maintenance — supporting municipal water and wastewater operations at every stage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((service, idx) => {
                const Icon = IconMap[service.icon];
                return (
                  <motion.div
                    key={service.title}
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
                    <h4 className="text-sm font-bold text-brand-900 mb-2 tracking-tight">{service.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Products Portfolio ── */}
        <section className="py-24 bg-brand-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Our Catalog</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-[-0.025em]">Pumps, Parts & Process Equipment</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {PRODUCT_CATEGORIES.map((cat) => {
                const Icon = IconMap[cat.icon];
                return (
                  <motion.div
                    key={cat.name}
                    whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeOut' } }}
                    className="relative aspect-square bg-white/5 border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 transition-all cursor-pointer group overflow-hidden"
                  >
                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icon size={120} />
                    </div>
                    <Icon size={32} className="text-accent" />
                    <h4 className="text-base font-bold leading-tight tracking-tight">{cat.name}</h4>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/products"
                className="inline-flex items-center text-white font-bold hover:text-accent transition-colors"
              >
                View All Products <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Manufacturers Preview ── */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Brand Partners</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-brand-900 tracking-[-0.025em]">
                  Authorized Manufacturers
                </h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                Direct factory partnerships with 10+ pump and process equipment manufacturers serving the municipal water and wastewater sector.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {MANUFACTURERS.slice(0, 6).map((mfr, idx) => (
                <motion.div
                  key={mfr.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07, duration: 0.4, ease: 'easeOut' }}
                  className="bg-white border border-slate-200/80 shadow-sm shadow-slate-200/40 p-6 group hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/70 transition-all duration-250"
                >
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                    <div className="w-20 h-10 flex items-center flex-shrink-0">
                      {mfr.logo ? (
                        <img
                          src={mfr.logo}
                          alt={mfr.name}
                          className="w-full h-full object-contain object-left"
                        />
                      ) : (
                        <span className="text-xl font-extrabold text-brand-700 tracking-[0.08em]">
                          {mfr.name.split(' ').map((w: string) => w[0]).join('').slice(0, 3)}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-900 tracking-tight">{mfr.name}</p>
                      <p className="text-xs text-slate-500">{mfr.specialty}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mfr.products.slice(0, 3).map((p) => (
                      <span key={p} className="text-xs bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full">
                        {p}
                      </span>
                    ))}
                    {mfr.products.length > 3 && (
                      <span className="text-xs text-slate-400 px-1 py-1">
                        +{mfr.products.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center bg-brand-900 text-white px-8 py-3.5 rounded-sm font-bold text-sm hover:bg-brand-800 hover:shadow-lg transition-all duration-200"
              >
                View All Manufacturers & Products
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Industries ── */}
        <section id="industries" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Who We Serve</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-brand-900 mb-8 tracking-[-0.025em]">
                  Municipal Applications
                </h3>
                <div className="space-y-3">
                  {INDUSTRIES.map((industry) => (
                    <div key={industry} className="flex items-center p-4 bg-white border border-slate-200/80 shadow-sm shadow-slate-200/40 hover:border-slate-300 hover:shadow-md transition-all duration-200">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-4 flex-shrink-0" />
                      <span className="font-bold text-brand-900 text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
                <img
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000"
                  alt="Industrial Plant"
                  className="rounded-sm shadow-2xl ring-1 ring-slate-900/5 relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-900 overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 md:p-20">
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">The Directrik Advantage</h2>
                <h3 className="text-4xl font-bold text-white mb-12 tracking-[-0.025em]">Why Municipalities Choose Directrik</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {WHY_CHOOSE_US.map((item) => (
                    <div key={item.title}>
                      <h4 className="text-accent font-bold mb-2 text-sm tracking-tight">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 bg-slate-200 relative min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000"
                  alt="Engineering Team"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Repair Highlight ── */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-1 bg-brand-900 text-white text-xs font-bold uppercase tracking-widest mb-6">
                Emergency Service
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6 tracking-[-0.025em]">
                24-Hour Pump Repair for Municipal Facilities
              </h3>
              <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                Water and wastewater operations cannot stop. Our technicians respond within 24 hours to pump failures at treatment plants, pumping stations, and distribution infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['Pump Repair', 'Compressor Repair', 'Blower Repair'].map((service) => (
                  <div key={service} className="flex items-center px-6 py-3 bg-white border border-slate-200 shadow-sm font-bold text-brand-900 text-sm">
                    <CheckCircle2 className="text-accent mr-2" size={18} />
                    {service}
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-brand-900 text-white px-10 py-4 rounded-sm font-bold hover:bg-brand-800 hover:shadow-lg transition-all duration-200"
              >
                Schedule Emergency Repair
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-24 bg-accent relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(0,0,0,0.15),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-white max-w-2xl text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-[-0.03em] leading-[1.1]">
                  Need Pumps, Parts, or Repair Support?
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Speak with our team about your water or wastewater facility requirements — we'll recommend the right equipment and get you what you need.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-brand-900 text-white px-10 py-5 rounded-sm font-bold hover:bg-brand-800 transition-all shadow-xl text-sm"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center bg-white text-accent px-10 py-5 rounded-sm font-bold hover:bg-slate-50 transition-all shadow-xl text-sm"
                >
                  About Directrik
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact strip ── */}
        <section className="py-10 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center group">
                <div className="w-11 h-11 bg-brand-50 border border-brand-100 rounded-sm flex items-center justify-center mr-4 group-hover:bg-brand-900 group-hover:border-brand-900 transition-all duration-200">
                  <Phone size={18} className="text-brand-700 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Call Us</p>
                  <p className="text-base font-bold text-brand-900">{CONTACT_INFO.phone}</p>
                </div>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center group">
                <div className="w-11 h-11 bg-brand-50 border border-brand-100 rounded-sm flex items-center justify-center mr-4 group-hover:bg-brand-900 group-hover:border-brand-900 transition-all duration-200">
                  <Mail size={18} className="text-brand-700 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
                  <p className="text-base font-bold text-brand-900">{CONTACT_INFO.email}</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-white py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <span className="text-2xl font-bold tracking-tighter text-white mb-4 block">
                DIRECTRIK<span className="text-accent">.</span>
              </span>
              <p className="text-slate-500 text-sm leading-relaxed">
                Authorized distributor of pumps, pump parts, and process equipment for municipal water and wastewater facilities across Ontario and North America.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Navigation</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Products</h4>
              <ul className="space-y-3">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <li key={cat.name}>
                    <Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Contact</h4>
              <div className="space-y-3 text-sm text-slate-400">
                <p>{CONTACT_INFO.location}</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="block hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="block hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Directrik Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/about" className="text-slate-500 hover:text-white text-xs transition-colors">About</Link>
              <Link to="/contact" className="text-slate-500 hover:text-white text-xs transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
