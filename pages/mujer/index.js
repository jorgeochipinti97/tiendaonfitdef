import React from 'react'
import { ProductFilterPage } from '@/comoponents/Products/ProductFilterPage/ProductFilterPage'
import { ShopLayout } from '@/comoponents/layout/shopLayout'


const MujeresPage = () => {
    return (
        
     <ShopLayout title="Onfit - Mujer" pageDescription="">
        <ProductFilterPage />
      </ShopLayout>  
  )
}

export default MujeresPage