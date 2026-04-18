import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

const TRUST_POINTS = [
  { icon: Clock,         text: 'Response within 24 hours' },
  { icon: Shield,        text: 'Serving municipalities across Ontario and Canada' },
  { icon: CheckCircle2,  text: 'Specialized in pumps for water & wastewater treatment' },
];

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const url = (import.meta as any).env?.VITE_GOOGLE_SCRIPT_URL;
      if (url) {
        await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(formData),
        });
      }
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 6000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-brand-200 selection:text-brand-900">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-brand-900">
              DIRECTRIK<span className="text-accent">.</span>
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

        {/* Header */}
        <div className="relative bg-brand-900 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_90%_at_0%_50%,rgba(72,101,129,0.25),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="text-xs font-bold text-accent uppercase tracking-[0.18em] mb-4">Get In Touch</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-4">
                Request a Quote
              </h1>
              <p className="text-slate-400 text-lg leading-[1.7] max-w-xl">
                Tell us about your pump requirements or facility needs and our team will respond within 24 hours.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Two-column form layout */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">

              {/* ── Left: Form ── */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 p-8 md:p-10"
              >
                <h2 className="text-xl font-bold text-brand-900 tracking-tight mb-1">Tell Us About Your Requirements</h2>
                <p className="text-sm text-slate-500 mb-8">All fields marked * are required.</p>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-sm px-4 py-3 mb-6"
                  >
                    <p className="text-green-800 font-semibold text-sm">
                      ✓ Message received. We'll be in touch within 24 hours.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-sm px-4 py-3 mb-6"
                  >
                    <p className="text-red-800 font-semibold text-sm">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-slate-300 rounded-sm text-sm text-brand-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-[3px] focus:ring-brand-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 border border-slate-300 rounded-sm text-sm text-brand-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-[3px] focus:ring-brand-100 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(416) 555-0100"
                        className="w-full px-4 py-3 border border-slate-300 rounded-sm text-sm text-brand-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-[3px] focus:ring-brand-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Optional"
                        className="w-full px-4 py-3 border border-slate-300 rounded-sm text-sm text-brand-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-[3px] focus:ring-brand-100 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your pump requirements, facility type, or what you need help with…"
                      className="w-full px-4 py-3 border border-slate-300 rounded-sm text-sm text-brand-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 focus:ring-[3px] focus:ring-brand-100 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center bg-accent text-white py-4 px-6 rounded-sm font-extrabold text-sm hover:bg-orange-600 hover:-translate-y-px hover:shadow-xl hover:shadow-orange-700/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none transition-all duration-200 group"
                    >
                      {isSubmitting ? 'Sending…' : 'Send Message'}
                      {!isSubmitting && (
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-3">
                      We respect your time — no sales spam, just a direct reply.
                    </p>
                  </div>
                </form>
              </motion.div>

              {/* ── Right: Info + Trust ── */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="space-y-5"
              >
                {/* Contact info card */}
                <div className="bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 p-7">
                  <h3 className="text-sm font-bold text-brand-900 uppercase tracking-widest mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-brand-50 border border-brand-100 rounded-sm flex items-center justify-center group-hover:bg-brand-900 group-hover:border-brand-900 transition-all duration-200 flex-shrink-0">
                        <Phone size={16} className="text-brand-700 group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Phone</p>
                        <p className="text-sm font-bold text-brand-900">{CONTACT_INFO.phone}</p>
                      </div>
                    </a>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-brand-50 border border-brand-100 rounded-sm flex items-center justify-center group-hover:bg-brand-900 group-hover:border-brand-900 transition-all duration-200 flex-shrink-0">
                        <Mail size={16} className="text-brand-700 group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email</p>
                        <p className="text-sm font-bold text-brand-900">{CONTACT_INFO.email}</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand-50 border border-brand-100 rounded-sm flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-brand-700" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Location</p>
                        <p className="text-sm font-bold text-brand-900">{CONTACT_INFO.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust points card */}
                <div className="bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 p-7">
                  <h3 className="text-sm font-bold text-brand-900 uppercase tracking-widest mb-5">
                    Why Work With Us
                  </h3>
                  <div className="space-y-4">
                    {TRUST_POINTS.map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-accent/10 border border-accent/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon size={14} className="text-accent" />
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
            <div>
              <span className="text-xl font-bold tracking-tighter text-white block mb-3">
                DIRECTRIK<span className="text-accent">.</span>
              </span>
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
