import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; 

const testimonials = [
  {
    id: 1,
    name: 'Aisha K.',
    location: 'Lagos, Nigeria',
    review: 'SeaNeverDry\'s ATCO has truly transformed my energy levels. I feel revitalized and focused throughout the day. Highly recommend for anyone looking for a natural boost!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mark T.',
    location: 'London, UK',
    review: 'The CALVIT tea is my new evening ritual. It helps me unwind after a stressful day and tastes absolutely delightful. A must-have for relaxation.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Chika E.',
    location: 'Abuja, Nigeria',
    review: 'I have been using K19 for months, and I have noticed a significant improvement in my overall immunity. It is a natural way to stay healthy.',
    rating: 4,
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className='py-16 bg-gradient-to-br from-green-50 to-white' id='testimonials'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
          What Our Customers Say
        </h2>
        <p className='text-lg text-gray-700 max-w-3xl mx-auto mb-12'>
          Hear directly from those who have experienced the natural benefits of SeaNeverDry herbal products.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='bg-white rounded-lg shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
            >
              <FaQuoteLeft className='text-green-600 w-10 h-10 mb-4' />
              <p className='text-gray-700 text-lg mb-4 italic leading-relaxed'>
                {testimonial.review}
              </p>
              <div className='flex justify-center mb-3'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
              <p className='text-gray-900 font-semibold text-xl'>{testimonial.name}</p>
              <p className='text-gray-500 text-sm'>{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;