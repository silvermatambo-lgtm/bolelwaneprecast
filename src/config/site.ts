// ─────────────────────────────────────────────────────────────
// Central business data for Bolelwane Precast Construction.
// Edit values here and the whole site (pages, footer, WhatsApp
// assistant, contact form) updates automatically.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Bolelwane Precast Construction',
  shortName: 'Bolelwane Precast',
  tagline: 'Professional • Reliable • Trusted Precast Solutions',
  phoneDisplay: '082 734 8675',
  phoneTel: '+27827348675',
  whatsappNumber: '27827348675', // international format, no "+"
  bookingFee: 'R1 000',
  bookingsPerMonth: 5,
} as const;

export const waLink = (text = `Hi ${SITE.name}, I would like a quote.`) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const TEL_LINK = `tel:${SITE.phoneTel}`;

export const PRICES = [
  { rooms: 1, price: 'R6 000' },
  { rooms: 2, price: 'R9 600' },
  { rooms: 3, price: 'R13 600' },
  { rooms: 4, price: 'R16 900' },
  { rooms: 5, price: 'R20 600' },
  { rooms: 6, price: 'R22 700' },
  { rooms: 7, price: 'R24 900' },
  { rooms: 8, price: 'R26 800' },
  { rooms: 9, price: 'R28 900' },
];

export const INCLUDED = ['Transport', 'Materials', 'Labour', 'Windows & Doors'];

export const PROVINCES = [
  'Gauteng',
  'Eastern Cape',
  'Free State',
  'Northern Cape',
  'Limpopo',
  'Mpumalanga',
  'Western Cape',
  'North West',
  'KZN',
];

export const PAYMENT_STEPS = [
  { title: `${SITE.bookingFee} Booking Fee`, text: 'Secures your slot on our build schedule.' },
  { title: '50% Deposit', text: 'Paid up front for materials & petrol.' },
  { title: '50% Balance', text: 'Settled on completion of your build.' },
  { title: 'Instalments', text: 'Monthly instalments available for up to 6 months.' },
];

export const BOOKING_NOTES = [
  `${SITE.bookingFee} booking fee`,
  '50% deposit for materials & petrol',
  'Balance 50% on completion',
  'Monthly instalments up to 6 months',
  `WhatsApp bookings only – ${SITE.bookingsPerMonth} bookings per month`,
  'Cash on delivery available sometimes',
];

export const SERVICE_OPTIONS = [
  'Backyard Room',
  'Rental Units',
  'Family Extension',
  'Emergency Housing',
  'Multi-Room Home (5–9 rooms)',
  'Request a Quote',
  'Other',
];

export const IMG = {
  finished: '/images/precast-home-finished.jpg',
  progress: '/images/precast-build-in-progress.jpg',
  hip: '/images/precast-hip-roof-home.jpg',
  tile: '/images/precast-tile-roof-home.jpg',
  blue: '/images/precast-blue-roof-build.jpg',
  panel: '/images/precast-white-panel-unit.jpg',
  brick: '/images/precast-brick-finish-home.jpg',
  open: '/images/precast-open-front-room.jpg',
  design: '/images/precast-premium-design.jpg',
};

export const LOGO = '/logo.svg';
