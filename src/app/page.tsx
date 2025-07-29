import CtaSection from '@/components/CtaSection'
import FaqSection from '@/components/FaqSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import HeroSection from '@/components/Hero'
// import ProductsPage from '@/components/ProductsHome'
// import ProductsSection from '@/components/ProductsHome'
import TestimonialsSection from '@/components/TestimonialsSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      {/* <ProductsPage /> */}
<FeaturedProducts />
      {/* <ProductsSection /> */}
      <CtaSection />
      <WhyChooseUsSection />
      <FaqSection />
      <TestimonialsSection />

    </div>
  )
}

export default page
