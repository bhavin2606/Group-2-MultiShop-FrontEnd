import React from 'react'
import Carosel from './Carosel'
import FeaturedHome from './FeaturedHome'
import CategoryHome from './CategoryHome'
import ProductFeatured from './ProductFeatured'

export default function Home() {
  return (
    <div>
      <Carosel />
      <FeaturedHome />
      <CategoryHome />
      <ProductFeatured/>
    </div>
  )
}
