import FaqSection from '@/components/FaqSection'
import HeroSection from '@/components/Hero'
import ProductsSection from '@/components/ProductsHome'
import TestimonialsSection from '@/components/TestimonialsSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <FaqSection />
      <TestimonialsSection />

    </div>
  )
}

export default page
