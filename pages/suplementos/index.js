
import { ProductFilterPage } from '@/comoponents/Products/ProductFilterPage/ProductFilterPage'
import { ShopLayout } from '@/comoponents/layout/shopLayout'
import React from 'react'


const SuplementosPage = () => {
  return (
     <ShopLayout title="Onfit - Mujer" pageDescription="">
        <ProductFilterPage />
      </ShopLayout>  
  )
}

export default SuplementosPage