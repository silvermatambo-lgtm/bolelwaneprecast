// Add REAL customer reviews here. While this list is empty the Testimonials
// page shows a "be our first review" panel instead of fake feedback.
// Example entry:
// { name: 'Thabo M.', location: 'Polokwane, Limpopo', rating: 5,
//   text: 'Great service…', project: '3 Room Rental Units', avatar: 'TM' },

export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  project: string;
  avatar: string;
}

export const REVIEWS: Review[] = [];
