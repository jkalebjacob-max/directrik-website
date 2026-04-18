import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import directrikLogo from '../assets/logos/directrik.png';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, ArrowRight, Menu, X } from 'lucide-react';
import { NAV_LINKS, MANUFACTURERS, CONTACT_INFO } from '../constants';

export default function ProductsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openManufacturer, setOpenManufacturer] = useState<string | null>(null);

  const toggle = (name: string) =>
    setOpenManufacturer((prev) => (prev === name ? null : name));

  const totalProducts = MANUFACTURERS.reduce((sum, m) => sum + m.products.length, 0);

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

        {/* Page header */}
        <div className="relative bg-brand-900 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_90%_at_0%_50%,rgba(72,101,129,0.25),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="text-xs font-bold text-accent uppercase tracking-[0.18em] mb-4">Our Catalog</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-4">
                Pumps, Parts & Equipment
              </h1>
              <p className="text-slate-400 text-lg leading-[1.7] max-w-2xl">
                Directrik is an authorized distributor for {MANUFACTURERS.length} leading pump and process equipment manufacturers. Browse our full catalog below — all products available for municipal water and wastewater applications.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-slate-900 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex divide-x divide-white/10">
              {[
                { value: MANUFACTURERS.length, label: 'Authorized Manufacturers' },
                { value: totalProducts, label: 'Product Lines' },
                { value: '24/7', label: 'Emergency Service' },
              ].map((stat) => (
                <div key={stat.label} className="flex-1 py-5 px-6 text-center">
                  <p className="text-xl font-bold text-white leading-none">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-1.5 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accordion */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3">
              {MANUFACTURERS.map((mfr, idx) => (
                <motion.div
                  key={mfr.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04, duration: 0.35, ease: 'easeOut' }}
                  className="bg-white border border-slate-200/80 shadow-sm shadow-slate-200/40 overflow-hidden"
                >
                  <button
                    onClick={() => toggle(mfr.name)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors duration-150 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-9 flex items-center flex-shrink-0">
                        {mfr.logo ? (
                          <img
                            src={mfr.logo}
                            alt={mfr.name}
                            className="w-full h-full object-contain object-left"
                          />
                        ) : (
                          <span className="text-base font-extrabold text-brand-700 tracking-[0.1em]">
                            {mfr.name.split(' ').map((w: string) => w[0]).join('').slice(0, 2)}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-900 tracking-tight">{mfr.name}</p>
                        <p className="text-xs text-slate-500">{mfr.specialty}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-xs text-slate-400 hidden sm:block">
                        {mfr.products.length} products
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 transition-transform duration-250 ${openManufacturer === mfr.name ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openManufacturer === mfr.name && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-slate-100">
                          <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {mfr.products.map((product) => (
                              <div key={product} className="flex items-center gap-2.5 py-2 px-3 bg-slate-50 border border-slate-100">
                                <div className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                                <span className="text-sm text-slate-700 font-medium">{product}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-5">
                            <Link
                              to="/contact"
                              className="inline-flex items-center text-xs font-bold text-accent hover:text-orange-600 transition-colors"
                            >
                              Request a quote for {mfr.name} products
                              <ArrowRight size={13} className="ml-1.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold text-accent uppercase tracking-[0.18em] mb-5">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 tracking-[-0.025em] mb-5">
              Looking for a Specific Pump or Part?
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Not everything is listed here. Contact our team with your specifications and we'll source the right pump or component for your facility.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent text-white px-9 py-4 rounded-sm font-bold text-sm hover:bg-orange-600 hover:-translate-y-px hover:shadow-xl hover:shadow-orange-700/25 transition-all duration-200 group"
            >
              Contact Our Team
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
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
