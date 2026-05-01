import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import FadeUp from '../components/FadeUp';
import SplitText from '../components/SplitText';

const HERO_IMG =
  'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const services = [
  'Company Registration',
  'Tax & VAT',
  'B-BBEE',
  'Ongoing Compliance',
  'Graphic Design / Branding',
  'Motion Graphics',
  'Social Media Management',
  'Paid Ads',
  'Full Package (Starter / Growth / Scale)',
  'Something else',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    service: services[0],
    message: '',
  });
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.message) {
      setStatus({ state: 'error', msg: 'Please fill in name, email and message.' });
      return;
    }
    setStatus({ state: 'loading', msg: '' });
    try {
      await axios.post(`${API}/contact`, form);
      setStatus({
        state: 'success',
        msg: 'Message received. We’ll reach out within 24 hours.',
      });
      setForm({ full_name: '', email: '', phone: '', service: services[0], message: '' });
    } catch (err) {
      setStatus({
        state: 'error',
        msg: 'Something went wrong. Please try WhatsApp or email us directly.',
      });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Your Business."
        subtitle={"Tell us about your idea. We\u2019ll come back with a clear plan, honest timelines and a package that fits your stage."}
        image={HERO_IMG}
      />

      <section className="relative py-20 md:py-28 border-t border-white/5" data-testid="contact-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          {/* Left: Contact details */}
          <div>
            <FadeUp>
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#FFB300] mb-6">
                / Get in touch
              </div>
            </FadeUp>
            <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight text-white mb-8">
              <SplitText text="Direct lines. Real people." />
            </h2>
            <FadeUp delay={0.2}>
              <p className="text-zinc-400 leading-relaxed mb-10 max-w-md">
                We are committed to helping businesses succeed by providing professional,
                reliable, and efficient services across compliance, branding, and marketing.
              </p>
            </FadeUp>

            <div className="space-y-4">
              <FadeUp delay={0.25}>
                <a
                  href="mailto:info@smartcompany.co.za"
                  data-testid="contact-email-link"
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-[#FFB300]/50 transition-all"
                >
                  <div className="h-12 w-12 rounded-full bg-[#FFB300]/10 flex items-center justify-center text-[#FFB300]">
                    <Mail size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-1">Email</div>
                    <div className="text-white group-hover:text-[#FFB300] transition-colors">info@smartcompany.co.za</div>
                  </div>
                  <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-[#FFB300] transition-colors" />
                </a>
              </FadeUp>

              <FadeUp delay={0.3}>
                <a
                  href="tel:+27632393273"
                  data-testid="contact-phone-link"
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-[#FFB300]/50 transition-all"
                >
                  <div className="h-12 w-12 rounded-full bg-[#FFB300]/10 flex items-center justify-center text-[#FFB300]">
                    <Phone size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-1">Phone</div>
                    <div className="text-white group-hover:text-[#FFB300] transition-colors">063 239 3273</div>
                  </div>
                  <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-[#FFB300] transition-colors" />
                </a>
              </FadeUp>

              <FadeUp delay={0.35}>
                <a
                  href="https://wa.me/27632393273"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="contact-whatsapp-link"
                  className="group flex items-center gap-5 rounded-2xl border border-[#FFB300]/30 bg-[#FFB300]/5 p-5 hover:bg-[#FFB300]/10 transition-all"
                >
                  <div className="h-12 w-12 rounded-full bg-[#FFB300] text-black flex items-center justify-center">
                    <MessageCircle size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#FFB300] mb-1">Fastest</div>
                    <div className="text-white">Chat on WhatsApp</div>
                  </div>
                  <ArrowUpRight size={18} className="text-[#FFB300]" />
                </a>
              </FadeUp>
            </div>
          </div>

          {/* Right: Form */}
          <FadeUp delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 md:p-10"
              data-testid="contact-form"
            >
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#FFB300] mb-8">
                / Send us a message
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Full Name"
                  name="full_name"
                  value={form.full_name}
                  onChange={update('full_name')}
                  placeholder="Your name"
                  testid="input-full-name"
                  required
                />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@company.co.za"
                  testid="input-email"
                  required
                />
                <Field
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="063 000 0000"
                  testid="input-phone"
                />
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-2">
                    Service Needed
                  </label>
                  <select
                    value={form.service}
                    onChange={update('service')}
                    data-testid="input-service"
                    className="w-full bg-transparent border-b border-white/15 focus:border-[#FFB300] text-white py-3 px-0 outline-none transition-colors"
                  >
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#0C0C0E]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-2">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  rows={5}
                  required
                  data-testid="input-message"
                  placeholder="Tell us about your business or idea..."
                  className="w-full bg-transparent border-b border-white/15 focus:border-[#FFB300] text-white py-3 px-0 outline-none transition-colors resize-none placeholder:text-zinc-600"
                />
              </div>

              {status.state === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-center gap-3 rounded-xl border border-[#FFB300]/40 bg-[#FFB300]/10 p-4 text-[#FFB300] text-sm"
                  data-testid="contact-success-msg"
                >
                  <CheckCircle2 size={18} />
                  {status.msg}
                </motion.div>
              )}
              {status.state === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300 text-sm"
                  data-testid="contact-error-msg"
                >
                  <AlertCircle size={18} />
                  {status.msg}
                </motion.div>
              )}

              <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500">
                  Need faster help? Ping us on WhatsApp.
                </div>
                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  data-testid="contact-submit-btn"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#FFB300] text-black font-medium px-8 py-4 text-sm hover:bg-[#FFC940] transition-all disabled:opacity-60 disabled:cursor-not-allowed glow-amber-hover"
                >
                  {status.state === 'loading' ? 'Sending…' : 'Send Message'}
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, value, onChange, placeholder, type = 'text', required, testid }) {
  return (
    <div>
      <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-2">
        {label}
        {required && <span className="text-[#FFB300]"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        data-testid={testid}
        className="w-full bg-transparent border-b border-white/15 focus:border-[#FFB300] text-white py-3 px-0 outline-none transition-colors placeholder:text-zinc-600"
      />
    </div>
  );
}
