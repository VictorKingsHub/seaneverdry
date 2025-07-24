import FaqSection from '@/components/FaqSection'
import HeroSection from '@/components/Hero'
import ProductsSection from '@/components/ProductsHome'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <FaqSection />
    </div>
  )
}

export default page
