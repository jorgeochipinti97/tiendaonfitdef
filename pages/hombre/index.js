import { ProductFilterPage } from "@/comoponents/Products/ProductFilterPage/ProductFilterPage";
import { ShopLayout } from "@/comoponents/layout/shopLayout";
import React from "react";


const HombresPage = () => {
  return (
    <ShopLayout title="Onfit - Hombre" pageDescription="">
      <ProductFilterPage />
    </ShopLayout>
  );
};

export default HombresPage;
