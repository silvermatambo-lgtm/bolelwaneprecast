import { Link } from 'react-router-dom';
import { Shield, Zap, Wallet, CloudSun, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import Reveal from '../components/Reveal';
import { PaymentBooking, PriceList, ProvincesServed } from '../components/Sections';
import { IMG, PROVINCES, SITE, TEL_LINK } from '../config/site';

const WHY = [
  { icon: <Shield size={20} />, label: 'Strong & Durable' },
  { icon: <Zap size={20} />, label: 'Fast Installation' },
  { icon: <Wallet size={20} />, label: 'Cost-Effective' },
  { icon: <CloudSun size={20} />, label: 'Weather-Resistant' },
];

const WHY_CARDS = [
  { name: 'Strong & Durable', img: IMG.hip, desc: 'Solid precast panels built to last' },
  { name: 'Fast Installation', img: IMG.progress, desc: 'Panels assemble quickly on site' },
  { name: 'Cost-Effective', img: IMG.open, desc: 'Materials & labour in one price' },
  { name: 'Weather-Resistant', img: IMG.brick, desc: 'Low maintenance, season after season' },
];

const SERVICES = [
  { title: 'Backyard Rooms', img: IMG.finished, desc: 'Add a secure, durable room to your yard — for family, a home office or extra living space.' },
  { title: 'Rental Units', img: IMG.brick, desc: 'Build rooms that earn. Quick to erect and cost-effective, ideal for rental income.' },
  { title: 'Family Extensions', img: IMG.hip, desc: 'Give a growing family the space it needs without a long, expensive build.' },
  { title: 'Emergency Housing', img: IMG.panel, desc: 'Fast shelter solutions when you need a safe, solid room in a hurry.' },
  { title: 'Multi-Room Homes', img: IMG.tile, desc: 'From 1 room up to 9 rooms — choose the size that fits your plot and your budget.' },
  { title: 'Transport & Installation', img: IMG.progress, desc: 'We deliver the materials and our team builds it — windows and doors included.' },
];

export default function Home() {
  return (
    <div className="page-enter">
      <HeroSlider />

      {/* Why bar */}
      <div className="bg-stone-900 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {WHY.map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-white">
                <span className="text-amber-400">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why precast */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="section-tag">Why Precast?</span>
            <h2 className="section-heading text-center">Built Smarter, Built To Last</h2>
            <div className="gold-bar mx-auto" />
            <p className="text-stone-500 max-w-2xl mx-auto mt-2">
              Precast construction gives you a strong, neat and weather-resistant structure in a fraction of the time of conventional building — at a price you can plan for.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {WHY_CARDS.map((mat, i) => (
              <Reveal key={mat.name} delay={`delay-${(i + 1) * 100}`}>
                <Link to="/services" className="block group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="gallery-item h-52 relative">
                    <img src={mat.img} alt={mat.name} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-stone-900/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-white font-bold text-lg leading-tight">{mat.name}</h3>
                      <p className="text-stone-200 text-xs mt-0.5">{mat.desc}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={IMG.finished} alt="Finished precast home" className="w-full h-[420px] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl px-6 py-4 border border-stone-100">
                <p className="text-amber-500 font-bold text-3xl">{PROVINCES.length}</p>
                <p className="text-stone-600 text-xs font-medium">Provinces Served</p>
              </div>
            </Reveal>

            <Reveal>
              <span className="section-tag">Who We Are</span>
              <h2 className="section-heading mb-4">Professional. Reliable.<br />Trusted Precast Solutions.</h2>
              <div className="gold-bar" />
              <p className="text-stone-500 leading-relaxed mb-5">
                {SITE.name} supplies and builds strong, durable precast rooms and homes for families, landlords and communities across South Africa.
              </p>
              <p className="text-stone-500 leading-relaxed mb-8">
                Every price includes transport, materials, labour, windows and doors — so you know exactly what you are paying for before we break ground.
              </p>
              <ul className="space-y-3 mb-8">
                {['Backyard rooms, rental units & family extensions', 'Transport, materials, labour, windows & doors included', 'Flexible payment — instalments up to 6 months', 'Serving 9 provinces nationwide'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-700 text-sm">
                    <CheckCircle size={17} className="text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-gold">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="section-tag">Perfect For</span>
            <h2 className="section-heading text-center">What We Build</h2>
            <div className="gold-bar mx-auto" />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.title} delay={`delay-${((i % 3) + 1) * 100}`}>
                <Link to="/services" className="block group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="gallery-item h-44 overflow-hidden">
                    <img src={svc.img} alt={svc.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-stone-800 mb-2 text-base">{svc.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{svc.desc}</p>
                    <span className="inline-flex items-center gap-1 text-amber-600 text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Price list */}
      <PriceList />

      {/* Payment & booking */}
      <PaymentBooking />

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stone-900" />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${IMG.tile})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2 }}
        />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <span className="section-tag text-amber-400">Get Started Today</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Ready To Build Your Precast Room?</h2>
            <p className="text-stone-300 max-w-xl mx-auto mb-10 leading-relaxed">
              WhatsApp us to book your slot — we take only {SITE.bookingsPerMonth} bookings a month, so reach out early.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={TEL_LINK} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5">
                <Phone size={16} /> Call {SITE.phoneDisplay}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 font-semibold rounded-xl text-sm transition-all duration-300">
                Request a Quote <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Provinces */}
      <ProvincesServed />

      {/* Stats */}
      <section className="py-16 bg-amber-50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: 'R6 000', label: 'Rooms From' },
              { num: '9', label: 'Provinces Served' },
              { num: '1–9', label: 'Room Sizes Available' },
              { num: '6', label: 'Months Instalments' },
            ].map((stat) => (
              <Reveal key={stat.label}>
                <p className="text-4xl font-bold text-amber-700 mb-1">{stat.num}</p>
                <p className="text-stone-600 text-sm font-medium">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
