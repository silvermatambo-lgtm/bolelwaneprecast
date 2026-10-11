import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import WaIcon from './WaIcon';
import { IMG, TEL_LINK, waLink } from '../config/site';

const SLIDES = [
  {
    image: IMG.finished,
    tag: 'Precast Construction',
    heading: 'Build Fast. Build Strong With',
    highlight: 'Precast Rooms',
    sub: 'Strong, durable precast rooms with transport, materials, labour, windows and doors all included. From R6 000.',
  },
  {
    image: IMG.hip,
    tag: 'Backyard Rooms & Rental Units',
    heading: 'Affordable Space For',
    highlight: 'Your Family',
    sub: 'From a single backyard room to a 9-room home — professional precast solutions that go up fast and last.',
  },
  {
    image: IMG.tile,
    tag: 'Nationwide Service',
    heading: 'Delivered Across',
    highlight: '9 Provinces',
    sub: 'Book on WhatsApp and pay your balance on completion, with monthly instalments available for up to 6 months.',
  },
];

const TYPING_INTERVAL = 70;
const SLIDE_DURATION = 6000;

function useTypingEffect(text: string, active: boolean) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) { setDisplayed(''); setDone(false); return; }
    setDisplayed('');
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); setDone(true); }
    }, TYPING_INTERVAL);
    return () => clearInterval(id);
  }, [text, active]);

  return { displayed, done };
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);

  const goTo = useCallback((idx: number) => {
    setAnimating(false);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(true);
    }, 50);
  }, []);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const id = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [next]);

  const slide = SLIDES[current];
  const { displayed, done } = useTypingEffect(slide.highlight, animating);

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background images */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: 0 }}
        >
          <img
            src={s.image}
            alt={`Slide ${i + 1}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-stone-900/15 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Tag */}
            <div
              key={`tag-${current}`}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 mb-5 ${animating ? 'animate-fade-in' : 'opacity-0'}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-300 text-xs font-semibold tracking-widest uppercase">{slide.tag}</span>
            </div>

            {/* Heading */}
            <h1
              key={`h-${current}`}
              className={`text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-2 ${animating ? 'animate-slide-left' : 'opacity-0'}`}
            >
              {slide.heading}
            </h1>

            {/* Typing highlight */}
            <h2 className="text-amber-400 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span>{displayed}</span>
              {!done && <span className="typing-cursor" />}
            </h2>

            {/* Sub */}
            <p
              key={`sub-${current}`}
              className={`text-stone-200 text-base md:text-lg leading-relaxed mb-8 max-w-lg ${animating ? 'animate-fade-up delay-300' : 'opacity-0'}`}
            >
              {slide.sub}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${current}`}
              className={`flex flex-wrap gap-3 ${animating ? 'animate-fade-up delay-500' : 'opacity-0'}`}
            >
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold rounded-lg text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href={waLink("Hi Bolelwane Precast, I would like a quote for a precast room.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <WaIcon size={16} /> WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 border-2 border-white/40 hover:border-amber-400 text-white hover:text-amber-400 font-semibold rounded-lg text-sm transition-all duration-300 backdrop-blur-sm"
              >
                <FileText size={16} /> Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full glass text-white hover:bg-amber-500/30 flex items-center justify-center transition-all duration-200"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full glass text-white hover:bg-amber-500/30 flex items-center justify-center transition-all duration-200"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-8 h-2 bg-amber-400'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Floating badge */}
      <div className="absolute bottom-12 right-6 z-30 hidden md:block animate-float">
        <div className="glass rounded-2xl px-4 py-3 text-center">
          <p className="text-amber-400 font-bold text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>R6 000</p>
          <p className="text-white text-xs">Rooms From</p>
        </div>
      </div>
    </section>
  );
}
