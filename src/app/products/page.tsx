import ProductsPage from '@/components/ProductCard'
import ProductPageCtaSection from '@/components/ProductPageCtaSection'
import React from 'react'

const page = () => {
  return (
    <div className='p-5 md: 15'>
        <h1> Welcome to Products Page </h1>
        <ProductsPage />
        <ProductPageCtaSection />
    </div>
  )
}

export default page
