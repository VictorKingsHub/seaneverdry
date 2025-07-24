import FaqSection from '@/components/FaqSection'
import HeroSection from '@/components/Hero'
import ProductsSection from '@/components/ProductsHome'
import TestimonialsSection from '@/components/TestimonialsSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <FaqSection />
      <TestimonialsSection />

    </div>
  )
}

export default page
