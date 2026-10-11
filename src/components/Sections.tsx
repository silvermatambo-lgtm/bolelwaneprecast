import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck, CheckCircle, MapPin, Wallet } from 'lucide-react';
import Reveal from './Reveal';
import WaIcon from './WaIcon';
import {
  BOOKING_NOTES,
  INCLUDED,
  PAYMENT_STEPS,
  PRICES,
  PROVINCES,
  SITE,
  waLink,
} from '../config/site';

/** Price list — navy panel, one gold card per room size, each opens WhatsApp with the size pre-filled. */
export function PriceList({ dark = true }: { dark?: boolean }) {
  return (
    <section id="pricing" className={`py-20 relative overflow-hidden ${dark ? 'bg-stone-900' : 'bg-white'}`}>
      <div className="relative max-w-7xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <span className="section-tag">Price List</span>
          <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${dark ? 'text-white' : 'text-stone-800'}`}>
            Precast Rooms — Materials &amp; Labour Included
          </h2>
          <div className="gold-bar mx-auto" />
          <p className={`max-w-2xl mx-auto mt-2 ${dark ? 'text-stone-300' : 'text-stone-500'}`}>
            Simple, transparent pricing from one room to nine. Tap a price to request that quote on WhatsApp.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PRICES.map((p, i) => (
            <Reveal key={p.rooms} delay={`delay-${((i % 5) + 1) * 100}`}>
              <a
                href={waLink(`Hi ${SITE.name}, I would like a quote for a ${p.rooms}-room precast (${p.price}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-2xl border border-amber-500/30 bg-stone-800/70 hover:bg-stone-800 hover:border-amber-400 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-stone-300 text-xs font-semibold uppercase tracking-widest mb-2">
                  {p.rooms} {p.rooms === 1 ? 'Room' : 'Rooms'}
                </p>
                <p className="text-amber-400 font-extrabold text-2xl md:text-3xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {p.price}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-stone-400 group-hover:text-amber-300 transition-colors">
                  Get this quote <ArrowRight size={12} />
                </span>
              </a>
            </Reveal>
          ))}

          {/* Included card fills the last grid slot on desktop */}
          <Reveal delay="delay-500" className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="h-full rounded-2xl bg-amber-500 p-5 text-stone-900">
              <p className="text-xs font-bold uppercase tracking-widest mb-3">Included</p>
              <ul className="space-y-1.5">
                {INCLUDED.map((x) => (
                  <li key={x} className="flex items-center gap-2 text-sm font-semibold">
                    <CheckCircle size={15} className="shrink-0" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <p className={`text-center text-xs mt-8 ${dark ? 'text-stone-400' : 'text-stone-500'}`}>
          Contact us on WhatsApp to confirm your quote for your location and site.
        </p>
      </div>
    </section>
  );
}

/** Payment & booking terms taken from the company poster. */
export function PaymentBooking() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <span className="section-tag">Payment &amp; Booking</span>
          <h2 className="section-heading text-center">Easy, Flexible Payment</h2>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-500 max-w-2xl mx-auto mt-2">
            Book on WhatsApp, pay a deposit for materials and petrol, and settle the balance when your build is complete.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {PAYMENT_STEPS.map((s, i) => (
            <Reveal key={s.title} delay={`delay-${(i + 1) * 100}`}>
              <div className="h-full bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-extrabold mb-4">
                  {i === 3 ? <Wallet size={20} /> : i + 1}
                </div>
                <h3 className="font-bold text-stone-800 mb-1">{s.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-3xl bg-stone-900 p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <ul className="space-y-3">
              {BOOKING_NOTES.map((n) => (
                <li key={n} className="flex items-start gap-3 text-stone-200 text-sm">
                  <CheckCircle size={17} className="text-amber-400 shrink-0 mt-0.5" />
                  {n}
                </li>
              ))}
            </ul>
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
                <CalendarCheck size={15} /> Limited slots
              </div>
              <p className="text-white text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Only {SITE.bookingsPerMonth} bookings per month
              </p>
              <a
                href={waLink(`Hi ${SITE.name}, I would like to book a precast build.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <WaIcon size={16} /> Book on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Provinces served chips. */
export function ProvincesServed({ dark = false }: { dark?: boolean }) {
  return (
    <section className={`py-20 ${dark ? 'bg-stone-900' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 text-center">
        <Reveal>
          <span className="section-tag">Locations Served</span>
          <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${dark ? 'text-white' : 'text-stone-800'}`}>
            We Build In {PROVINCES.length} Provinces
          </h2>
          <div className="gold-bar mx-auto" />
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {PROVINCES.map((p) => (
              <span
                key={p}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
                  dark ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-700'
                }`}
              >
                <MapPin size={14} className="text-amber-500" /> {p}
              </span>
            ))}
          </div>
          <p className={`text-sm mt-6 ${dark ? 'text-stone-400' : 'text-stone-500'}`}>
            Not sure if we reach your area?{' '}
            <Link to="/contact" className="text-amber-500 font-semibold hover:underline">Ask us on WhatsApp</Link>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
