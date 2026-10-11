import { Link } from 'react-router-dom';
import { Phone, MapPin, CalendarCheck } from 'lucide-react';
import WaIcon from './WaIcon';
import { LOGO, PROVINCES, SITE, TEL_LINK, waLink } from '../config/site';

const FOOTER_SERVICES = [
  'Backyard Rooms',
  'Rental Units',
  'Family Extensions',
  'Emergency Housing',
  'Multi-Room Homes (1–9 rooms)',
  'Transport & Installation',
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO} alt={SITE.name} className="h-14 w-14 object-contain" />
              <div>
                <p className="text-amber-400 font-extrabold text-lg leading-tight tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>BOLELWANE</p>
                <p className="text-white text-[10px] tracking-[0.2em] uppercase font-semibold">Precast Construction</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-5">
              Strong, durable and cost-effective precast rooms and homes — backyard rooms, rental units, family extensions and emergency housing across South Africa.
            </p>
            <div className="flex items-center gap-3">
              <a href={TEL_LINK} aria-label="Call us" className="w-9 h-9 rounded-full bg-stone-800 hover:bg-amber-500 hover:text-stone-900 flex items-center justify-center transition-colors">
                <Phone size={15} />
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-stone-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                <WaIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-stone-700">Quick Links</h4>
            <ul className="space-y-2">
              {[['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Gallery', '/gallery'], ['FAQ', '/faq'], ['Testimonials', '/testimonials'], ['Contact', '/contact']].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-stone-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-amber-500 group-hover:w-2 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-stone-700">Our Services</h4>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-stone-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-amber-500 group-hover:w-2 transition-all duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-stone-700">Contact Us</h4>
            <ul className="space-y-3 mb-5">
              <li>
                <a href={TEL_LINK} className="flex items-start gap-3 text-stone-400 hover:text-amber-400 text-sm transition-colors">
                  <Phone size={15} className="mt-0.5 shrink-0 text-amber-500" />
                  Call: {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-stone-400 hover:text-amber-400 text-sm transition-colors">
                  <span className="mt-0.5 shrink-0 text-amber-500"><WaIcon size={15} /></span>
                  WhatsApp: {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-stone-400 text-sm">
                  <CalendarCheck size={15} className="mt-0.5 shrink-0 text-amber-500" />
                  <p>WhatsApp bookings only – {SITE.bookingsPerMonth} bookings per month</p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-stone-400 text-sm">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-amber-500" />
                  <p>Serving {PROVINCES.length} provinces across South Africa</p>
                </div>
              </li>
            </ul>
            <a
              href={waLink(`Hi ${SITE.name}, I would like a quote.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <WaIcon /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* Mini map */}
        <div className="mt-12 rounded-xl overflow-hidden border border-stone-700 h-40">
          <iframe
            title="Bolelwane Precast service area – South Africa"
            src="https://www.google.com/maps?q=South+Africa&z=5&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(50%) contrast(0.9)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>
            Website designed by{' '}
            <a href="https://www.webdevpro.co.za" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">
              www.webdevpro.co.za
            </a>
            {' '}| +27 81 215 9792
          </p>
        </div>
      </div>
    </footer>
  );
}
