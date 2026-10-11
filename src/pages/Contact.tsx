import { useState } from 'react';
import { Phone, CalendarCheck, MapPin, Send, CheckCircle, Loader, Wallet } from 'lucide-react';
import Reveal from '../components/Reveal';
import WaIcon from '../components/WaIcon';
import { BOOKING_NOTES, IMG, PROVINCES, SERVICE_OPTIONS, SITE, TEL_LINK, waLink } from '../config/site';

type FormState = { name: string; phone: string; email: string; service: string; message: string };
const EMPTY: FormState = { name: '', phone: '', email: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 9) e.phone = 'Valid phone number is required';
    if (form.email.trim() && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email or leave it blank';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  }

  // Bookings are WhatsApp-only, so a valid enquiry opens WhatsApp with the details pre-filled.
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    const text =
      `Hi ${SITE.name}, I would like a quote.\n\n` +
      `Name: ${form.name.trim()}\nPhone: ${form.phone.trim()}\n` +
      (form.email.trim() ? `Email: ${form.email.trim()}\n` : '') +
      `Service: ${form.service}\nMessage: ${form.message.trim()}`;
    await new Promise((r) => setTimeout(r, 600));
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
    setLoading(false);
    setSuccess(true);
    setForm(EMPTY);
  }

  const field = (label: string, name: keyof FormState, type = 'text', ph = '') => (
    <div>
      <label className="block text-sm font-medium text-stone-700 mb-1.5">{label}</label>
      <input
        type={type}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        placeholder={ph}
        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-stone-800 outline-none transition-all duration-200 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 ${errors[name] ? 'border-red-400' : 'border-stone-200 hover:border-stone-300'}`}
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  const cards = [
    { icon: <Phone size={22} />, label: 'Call Us', value: SITE.phoneDisplay, href: TEL_LINK },
    { icon: <WaIcon size={22} />, label: 'WhatsApp', value: SITE.phoneDisplay, href: waLink() },
    { icon: <Wallet size={22} />, label: 'Booking Fee', value: `${SITE.bookingFee} (WhatsApp bookings only)`, href: waLink(`Hi ${SITE.name}, I would like to book a precast build.`) },
    { icon: <MapPin size={22} />, label: 'Areas Served', value: `${PROVINCES.length} provinces nationwide`, href: '#service-areas' },
  ];

  return (
    <div className="page-enter pt-24">
      {/* Header */}
      <section className="relative py-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${IMG.hip})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-amber-400">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Contact Us</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-300 max-w-xl mx-auto mt-4">Ready to build? Call or WhatsApp us for a quote on your precast room.</p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map((card) => (
              <Reveal key={card.label}>
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center p-6 rounded-2xl border border-stone-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300 group bg-white hover:-translate-y-1 h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:bg-amber-500 group-hover:text-stone-900 transition-colors">
                    {card.icon}
                  </div>
                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">{card.label}</p>
                  <p className="text-stone-700 font-medium text-sm">{card.value}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Reveal>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
                <h2 className="section-heading mb-1">Request a Quote</h2>
                <p className="text-stone-500 text-sm mb-6">Fill in your details and we&apos;ll continue the conversation with you on WhatsApp.</p>

                {success ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center animate-scale-in">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="font-bold text-stone-800 text-xl mb-2">WhatsApp Opened</h3>
                    <p className="text-stone-500 text-sm mb-6 max-w-xs">Your details are ready in WhatsApp — press send to complete your enquiry.</p>
                    <button onClick={() => setSuccess(false)} className="btn-gold">Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {field('Full Name *', 'name', 'text', 'e.g. Thabo Mokoena')}
                    {field('Phone Number *', 'phone', 'tel', 'e.g. 082 734 8675')}
                    {field('Email Address (optional)', 'email', 'email', 'e.g. thabo@example.com')}

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Service Required *</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-stone-800 outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all ${errors.service ? 'border-red-400' : 'border-stone-200'}`}
                      >
                        <option value="">Select a service…</option>
                        {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Message *</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={4}
                        placeholder="Number of rooms, your town / province, preferred start date…"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-stone-800 outline-none resize-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all ${errors.message ? 'border-red-400' : 'border-stone-200'}`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-stone-900 font-semibold rounded-xl transition-colors text-sm"
                    >
                      {loading ? (<><Loader size={16} className="animate-spin-slow" /> Opening WhatsApp…</>) : (<><Send size={16} /> Send via WhatsApp</>)}
                    </button>

                    <div className="text-center pt-2">
                      <p className="text-stone-400 text-xs mb-2">Prefer to chat directly?</p>
                      <a
                        href={waLink('Hi Bolelwane Precast, I would like a quote for a precast room.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-xl transition-colors"
                      >
                        <WaIcon /> WhatsApp Us Instead
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Info */}
            <Reveal>
              <div className="space-y-6">
                {/* Booking info */}
                <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center"><CalendarCheck size={18} /></div>
                    <h3 className="font-bold text-stone-800">Payment &amp; Booking</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm">
                    {BOOKING_NOTES.map((n) => (
                      <li key={n} className="flex items-start gap-2.5 text-stone-600">
                        <CheckCircle size={16} className="text-amber-500 shrink-0 mt-0.5" /> {n}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service areas + map */}
                <div id="service-areas" className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm scroll-mt-28">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center"><MapPin size={18} /></div>
                    <h3 className="font-bold text-stone-800">Locations Served</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {PROVINCES.map((p) => (
                      <span key={p} className="px-3 py-1 rounded-full bg-stone-50 border border-stone-200 text-xs font-medium text-stone-700">{p}</span>
                    ))}
                  </div>
                  <div className="rounded-xl overflow-hidden border border-stone-100 h-48">
                    <iframe
                      title="Bolelwane Precast service area – South Africa"
                      src="https://www.google.com/maps?q=South+Africa&z=5&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* Quick contact */}
                <div className="grid grid-cols-2 gap-4">
                  <a href={TEL_LINK} className="flex items-center justify-center gap-2 py-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-2xl text-sm transition-colors">
                    <Phone size={16} /> Call Now
                  </a>
                  <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-2xl text-sm transition-colors">
                    <WaIcon /> WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
