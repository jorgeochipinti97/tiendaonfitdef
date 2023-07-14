import { ProductFilterPage } from '@/comoponents/Products/ProductFilterPage/ProductFilterPage'
import { ShopLayout } from '@/comoponents/layout/shopLayout'
import React from 'react'

const AccesoriosPage = () => {
  return (
    <ShopLayout title="Onfit - Accesorios" pageDescription="">
    <ProductFilterPage />
  </ShopLayout>  )
}

export default AccesoriosPage