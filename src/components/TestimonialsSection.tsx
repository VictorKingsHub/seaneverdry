import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; 

const testimonials = [
  {
    id: 1,
    name: 'Tofa.',
    location: 'Abuja, Nigeria',
    review: 'SThank you very much your product TIGO. It was recommended to me and my wife by our family friend who used and was cured of his chronic bacteria infections. It also boosted his immune system. And now we have enjoyed the same benefits too',
    rating: 5,
  },
  {
    id: 2,
    name: 'Victor.',
    location: 'PH',
    review: 'I saw your herbal product TOP9 online and I decided to give it a try. And wow it gave me exactly what I wanted in sex. Now I can last as long as I want with my partner in bed. Thank you.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Juliet',
    location: ' Abuja',
    review: 'I got your product name ASHCORD through a pharmacist who asked me to try and get it for my husband who had stroke for the past 5 years now and quiet frankly after taking it for 3 months now we have seen lots of differences in his health. He has so much improved. No more emergency. Thank you for ASHCORD',
    rating: 4,
  },  
  {
    id: 4,
    name: 'Yemi',
    location: ' Lagos',
    review: 'Thank you for your herbal product EYEKIA. I have got my vision back. God bless you.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Chioma,',
    location: ' Abia',
    review: 'HBALANCE is a good product. I got pregnant after using it for 4 months it balanced my hormones.',
    rating: 4,
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className='py-16 bg-white' id='testimonials'>
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
              className='bg-gradient-to-br from-green-50 to-white rounded-lg shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
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