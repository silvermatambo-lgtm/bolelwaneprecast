import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import Reveal from '../components/Reveal';
import { IMG, SITE } from '../config/site';

export default function About() {
  return (
    <div className="page-enter pt-24">
      {/* Hero */}
      <section className="relative py-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${IMG.hip})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-amber-400">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">About Bolelwane Precast</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Professional, reliable and trusted precast solutions — strong rooms and homes delivered and built across South Africa.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <span className="section-tag">Who We Are</span>
              <h2 className="section-heading mb-4">Quality You Can See &amp; Trust</h2>
              <div className="gold-bar" />
              <p className="text-stone-500 leading-relaxed mt-4 mb-4">
                {SITE.name} specialises in precast construction — a faster, more affordable way to add rooms and build homes. Our precast panels are strong, durable and weather-resistant, with very little maintenance needed once they are up.
              </p>
              <p className="text-stone-500 leading-relaxed mb-4">
                We serve homeowners, landlords and families who need extra space: backyard rooms, rental units, family extensions and emergency housing, from a single room up to nine.
              </p>
              <p className="text-stone-500 leading-relaxed mb-6">
                Our pricing is straightforward. Each package includes transport, materials, labour, windows and doors — and we offer flexible payment, including monthly instalments for up to 6 months.
              </p>
              <ul className="space-y-3">
                {['Transport, materials, labour, windows & doors included', 'Clear price list from 1 to 9 rooms', 'Flexible payment with instalments up to 6 months', 'Serving 9 provinces across South Africa'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-700 text-sm">
                    <CheckCircle size={16} className="text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <img src={IMG.finished} alt="Finished precast home" className="w-full h-52 object-cover rounded-2xl shadow-lg" loading="lazy" />
                <img src={IMG.brick} alt="Precast home with brick-pattern finish" className="w-full h-52 object-cover rounded-2xl shadow-lg mt-6" loading="lazy" />
                <img src={IMG.open} alt="Precast room with timber roof" className="w-full h-52 object-cover rounded-2xl shadow-lg -mt-6" loading="lazy" />
                <img src={IMG.blue} alt="Precast build with blue roof sheeting" className="w-full h-52 object-cover rounded-2xl shadow-lg" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="section-tag">Our Pillars</span>
            <h2 className="section-heading text-center">Mission, Vision &amp; Values</h2>
            <div className="gold-bar mx-auto" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Target size={28} />, title: 'Our Mission', text: 'To make strong, quality housing and extra rooms affordable and quick to build, with clear pricing and honest service from booking to completion.' },
              { icon: <Eye size={28} />, title: 'Our Vision', text: 'To be one of South Africa’s most trusted precast construction teams — known for reliable delivery and homes that stand the test of time.' },
              { icon: <Heart size={28} />, title: 'Our Values', text: 'Professionalism, reliability and trust. We treat every room as if it were our own, and every customer as someone we want to see again.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={`delay-${(i + 1) * 100}`}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 h-full hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">{item.icon}</div>
                  <h3 className="font-bold text-stone-800 text-xl mb-3">{item.title}</h3>
                  <p className="text-stone-500 leading-relaxed text-sm">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${IMG.tile})`, backgroundSize: 'cover' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="section-tag text-amber-400">Why Precast?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Why Choose Bolelwane Precast</h2>
            <div className="gold-bar mx-auto" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Strong & Durable', desc: 'Solid precast panels built to handle years of daily use.' },
              { title: 'Fast Installation', desc: 'Precast panels go up far quicker than traditional brick-and-mortar.' },
              { title: 'Cost-Effective', desc: 'One clear price covering transport, materials, labour, windows & doors.' },
              { title: 'Weather-Resistant', desc: 'Low-maintenance walls that cope with sun, wind and rain.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={`delay-${(i + 1) * 100}`}>
                <div className="glass rounded-2xl p-6 text-center h-full">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 text-lg font-bold">{i + 1}</div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-stone-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
