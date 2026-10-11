import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, DoorOpen, HardHat, Truck, Layers } from 'lucide-react';
import Reveal from '../components/Reveal';
import { PaymentBooking, PriceList } from '../components/Sections';
import { IMG, SITE, TEL_LINK } from '../config/site';

const SERVICES = [
  {
    title: 'Backyard Rooms',
    img: IMG.finished,
    desc: 'Add a strong, secure room to your property for family, a home office or extra living space. Precast panels go up quickly, with a neat finish and very little upkeep.',
    features: ['From 1 room (R6 000)', 'Windows & door included', 'Quick on-site assembly', 'Low maintenance walls'],
  },
  {
    title: 'Rental Units',
    img: IMG.brick,
    desc: 'Turn spare space into steady income. Our cost-effective precast rooms are an affordable way to build rental units, whether you need one room or a row of them.',
    features: ['Build 2, 3, 4 or more rooms', 'Cost-effective per-room pricing', 'Durable for long-term tenants', 'Fast turnaround'],
  },
  {
    title: 'Family Extensions',
    img: IMG.hip,
    desc: 'Growing family? Extend your home with additional bedrooms or living rooms without the long build times and costs of conventional construction.',
    features: ['Extra bedrooms & living space', 'Weather-resistant structure', 'Transport & labour included', 'Pay balance on completion'],
  },
  {
    title: 'Emergency Housing',
    img: IMG.panel,
    desc: 'When you need a safe, solid roof over your head quickly, precast delivers. Fast installation makes it a practical choice for urgent housing needs.',
    features: ['Fast installation', 'Strong & durable panels', 'Weather-resistant', 'Affordable entry price'],
  },
  {
    title: 'Multi-Room Homes',
    img: IMG.tile,
    desc: 'Need more than a single room? Choose from 1 to 9 rooms and build a complete home on your plot, all at a clear published price.',
    features: ['Sizes from 1 to 9 rooms', 'Up to R28 900 for 9 rooms', 'Windows & doors included', 'Monthly instalments up to 6 months'],
  },
  {
    title: 'Transport & Installation',
    img: IMG.progress,
    desc: 'We bring the materials to your site and our team does the building. Every package includes transport, materials, labour, windows and doors.',
    features: ['Delivery to your site', 'Materials supplied', 'Experienced labour', 'Serving 9 provinces'],
  },
];

const INCLUDED_CARDS = [
  { icon: <Truck size={24} />, name: 'Transport', desc: 'Delivery of all materials to your site is built into the price.' },
  { icon: <Layers size={24} />, name: 'Materials', desc: 'Precast panels and all the building materials for your structure.' },
  { icon: <HardHat size={24} />, name: 'Labour', desc: 'Our team builds your structure from start to finish.' },
  { icon: <DoorOpen size={24} />, name: 'Windows & Doors', desc: 'Fitted as part of every package — nothing extra to buy.' },
];

export default function Services() {
  return (
    <div className="page-enter pt-24">
      {/* Header */}
      <section className="relative py-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${IMG.tile})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-amber-400">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Our Services</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-300 max-w-2xl mx-auto mt-4">
            Backyard rooms, rental units, family extensions and emergency housing — built in precast, from 1 to 9 rooms.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.title}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="gallery-item rounded-3xl overflow-hidden shadow-xl h-[360px]">
                    <img src={svc.img} alt={svc.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <span className="section-tag">Service 0{i + 1}</span>
                  <h2 className="section-heading mb-4">{svc.title}</h2>
                  <div className="gold-bar" />
                  <p className="text-stone-500 leading-relaxed mt-4 mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-stone-700 text-sm">
                        <CheckCircle size={16} className="text-amber-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-gold">
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="section-tag">Every Package Includes</span>
            <h2 className="section-heading text-center">All-Inclusive Pricing</h2>
            <div className="gold-bar mx-auto" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCLUDED_CARDS.map((c, i) => (
              <Reveal key={c.name} delay={`delay-${(i + 1) * 100}`}>
                <div className="h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">{c.icon}</div>
                  <h3 className="font-bold text-stone-800 mb-2">{c.name}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PriceList />
      <PaymentBooking />

      {/* CTA */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Ready to Get Started?</h2>
          <p className="text-stone-800 mb-8">WhatsApp us to book — only {SITE.bookingsPerMonth} bookings are taken each month.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={TEL_LINK} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-stone-900 text-white font-semibold rounded-xl hover:bg-stone-800 transition-colors">
              Call {SITE.phoneDisplay}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-stone-900 text-stone-900 font-semibold rounded-xl hover:bg-stone-900/10 transition-colors">
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
