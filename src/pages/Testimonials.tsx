import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageCircle, ShieldCheck, Zap, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import WaIcon from '../components/WaIcon';
import { IMG, SITE, waLink } from '../config/site';
import { REVIEWS } from '../data/reviews';

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className={i < n ? 'fill-amber-400 text-amber-400' : 'text-stone-200'} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const hasReviews = REVIEWS.length > 0;
  const featured = hasReviews ? REVIEWS[current] : null;

  const prev = () => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setCurrent((c) => (c + 1) % REVIEWS.length);

  return (
    <div className="page-enter pt-24">
      {/* Header */}
      <section className="relative py-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${IMG.finished})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-amber-400">What Clients Say</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Client Testimonials</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-300 max-w-xl mx-auto mt-4">Feedback from the families and landlords we build for.</p>
        </div>
      </section>

      {hasReviews && featured ? (
        <>
          {/* Featured testimonial slider */}
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="relative bg-stone-50 rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100">
                <div className="absolute top-6 left-8 text-amber-200 text-[80px] leading-none font-serif select-none">&ldquo;</div>
                <div className="relative text-center">
                  <div className="flex justify-center"><Stars n={featured.rating} /></div>
                  <p className="text-stone-600 text-base md:text-lg leading-relaxed mt-6 mb-8 italic">&ldquo;{featured.text}&rdquo;</p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500 text-stone-900 font-bold text-lg flex items-center justify-center">{featured.avatar}</div>
                    <div className="text-left">
                      <p className="font-bold text-stone-800">{featured.name}</p>
                      <p className="text-stone-500 text-xs">{featured.location} · {featured.project}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button onClick={prev} aria-label="Previous review" className="w-10 h-10 rounded-full border border-stone-200 hover:border-amber-400 text-stone-400 hover:text-amber-600 flex items-center justify-center transition-colors">
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex gap-2">
                    {REVIEWS.map((_, i) => (
                      <button key={i} onClick={() => setCurrent(i)} aria-label={`Review ${i + 1}`} className={`rounded-full transition-all duration-200 ${i === current ? 'w-6 h-2 bg-amber-500' : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'}`} />
                    ))}
                  </div>
                  <button onClick={next} aria-label="Next review" className="w-10 h-10 rounded-full border border-stone-200 hover:border-amber-400 text-stone-400 hover:text-amber-600 flex items-center justify-center transition-colors">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Grid reviews */}
          <section className="py-16 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4">
              <Reveal className="text-center mb-12">
                <span className="section-tag">All Reviews</span>
                <h2 className="section-heading text-center">What Our Clients Are Saying</h2>
                <div className="gold-bar mx-auto" />
              </Reveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {REVIEWS.map((r, i) => (
                  <Reveal key={i}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow h-full flex flex-col">
                      <Stars n={r.rating} />
                      <p className="text-stone-600 text-sm leading-relaxed mt-4 flex-1 italic">&ldquo;{r.text}&rdquo;</p>
                      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-stone-50">
                        <div className="w-10 h-10 rounded-full bg-amber-500 text-stone-900 font-bold text-sm flex items-center justify-center shrink-0">{r.avatar}</div>
                        <div>
                          <p className="font-semibold text-stone-800 text-sm">{r.name}</p>
                          <p className="text-stone-400 text-xs">{r.location} · {r.project}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* No reviews yet — honest placeholder, no invented feedback */}
          <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <Reveal>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                  <MessageCircle size={30} />
                </div>
                <h2 className="section-heading mb-3">Built a Room With Us?</h2>
                <div className="gold-bar mx-auto" />
                <p className="text-stone-500 leading-relaxed mb-8">
                  We&apos;re collecting customer reviews and photos to share here. If we have built for you, we&apos;d love to hear how it went — send us a message on WhatsApp.
                </p>
                <a href={waLink(`Hi ${SITE.name}, I would like to share my feedback.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl text-sm transition-colors">
                  <WaIcon size={16} /> Share Your Feedback
                </a>
              </Reveal>
            </div>
          </section>

          <section className="py-16 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4">
              <Reveal className="text-center mb-12">
                <span className="section-tag">Our Promise</span>
                <h2 className="section-heading text-center">What You Can Expect</h2>
                <div className="gold-bar mx-auto" />
              </Reveal>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: <ShieldCheck size={24} />, t: 'Strong & Durable', d: 'Solid precast panels built for years of daily use.' },
                  { icon: <Zap size={24} />, t: 'Fast Installation', d: 'Panels assembled on site much quicker than traditional building.' },
                  { icon: <Wallet size={24} />, t: 'Clear, Flexible Pricing', d: 'Transport, materials, labour, windows & doors included, with instalments up to 6 months.' },
                ].map((x, i) => (
                  <Reveal key={x.t} delay={`delay-${(i + 1) * 100}`}>
                    <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm h-full text-center">
                      <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">{x.icon}</div>
                      <h3 className="font-bold text-stone-800 mb-2">{x.t}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{x.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Stats */}
      <section className="py-14 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: 'R6 000', label: 'Rooms From' },
              { num: '9', label: 'Provinces Served' },
              { num: '1–9', label: 'Room Sizes' },
              { num: '6', label: 'Months Instalments' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-stone-900 mb-1">{stat.num}</p>
                <p className="text-stone-800 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-3">Ready To Build?</h2>
          <p className="text-stone-500 mb-8">Get a quote for your precast room today.</p>
          <Link to="/contact" className="btn-gold">Request a Free Quote</Link>
        </div>
      </section>
    </div>
  );
}
