import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { IMG, PRICES, PROVINCES, SITE, TEL_LINK } from '../config/site';

const FAQS = [
  {
    q: 'What is precast construction?',
    a: 'Precast walling is made from concrete panels that are manufactured in advance and then assembled on your site. This makes building faster and neater than traditional brick-and-mortar, and the finished structure is strong, durable, weather-resistant and low maintenance.',
  },
  {
    q: 'What can I use a precast room for?',
    a: 'Precast rooms are perfect for backyard rooms, rental units, family extensions and emergency housing. You can build anything from a single room up to a nine-room home.',
  },
  {
    q: 'How much does a precast room cost?',
    a: `Pricing starts at ${PRICES[0].price} for 1 room, ${PRICES[1].price} for 2 rooms, ${PRICES[2].price} for 3 rooms and ${PRICES[3].price} for 4 rooms, going up to ${PRICES[8].price} for 9 rooms. See the full price list on our Services page or the home page.`,
  },
  {
    q: 'What is included in the price?',
    a: 'Every price covers transport, materials, labour, and windows & doors. There is no separate charge for those items.',
  },
  {
    q: 'How do payments work?',
    a: `You pay a ${SITE.bookingFee} booking fee to secure your slot, then a 50% deposit for materials and petrol. The remaining 50% balance is paid on completion. Monthly instalments are available for up to 6 months, and cash on delivery is available sometimes.`,
  },
  {
    q: 'How do I book?',
    a: `Bookings are made on WhatsApp only (${SITE.phoneDisplay}). We take ${SITE.bookingsPerMonth} bookings per month, so contact us early to secure your slot.`,
  },
  {
    q: 'Which areas do you serve?',
    a: `We serve ${PROVINCES.length} provinces: ${PROVINCES.join(', ')}. If you are unsure whether we reach your town, send us your location on WhatsApp and we will confirm.`,
  },
  {
    q: 'How long does a build take?',
    a: 'Precast panels are made in advance and assembled on site, so installation is much quicker than conventional building. The exact timeline depends on the size of your build and your location — we will confirm it when you book.',
  },
  {
    q: 'Can I pay in instalments?',
    a: 'Yes. Monthly instalments are available for up to 6 months. Message us on WhatsApp to discuss the plan that suits your budget.',
  },
  {
    q: 'How do I get started?',
    a: `Call or WhatsApp us on ${SITE.phoneDisplay}, or use the quote form on our Contact page. Tell us how many rooms you need and where you are located, and we will take it from there.`,
  },
];

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'border-amber-300 shadow-md' : 'border-stone-200'}`}>
      <button onClick={onToggle} className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4">
        <span className={`font-semibold text-sm md:text-base leading-snug ${open ? 'text-amber-700' : 'text-stone-800'}`}>{q}</span>
        <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${open ? 'bg-amber-500 text-stone-900' : 'bg-stone-100 text-stone-500'}`}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {open && <div className="px-5 md:px-6 pb-5 text-stone-500 text-sm leading-relaxed border-t border-stone-100 pt-4">{a}</div>}
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="page-enter pt-24">
      {/* Header */}
      <section className="relative py-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${IMG.brick})`, backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-amber-400">Have Questions?</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Frequently Asked Questions</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-300 max-w-xl mx-auto mt-4">Everything you need to know about our precast rooms, pricing and booking.</p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <Reveal key={i}>
                <FAQItem q={faq.q} a={faq.a} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-stone-50 border-t border-stone-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-3">Still have questions?</h2>
          <p className="text-stone-500 mb-8">We&apos;re happy to help. Reach out to us directly and we&apos;ll answer all your questions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={TEL_LINK} className="btn-gold">Call Us Now</a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-amber-500 text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-colors text-sm">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
