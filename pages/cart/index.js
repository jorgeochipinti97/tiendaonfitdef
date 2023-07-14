import { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useRouter } from "next/router";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Elastic, gsap, Power4, Power1, Back } from "gsap";
import { CartList, OrderSummary } from "@/comoponents/cart";
import { ShopLayout } from "@/comoponents/layout/shopLayout";
import { CartContext } from "@/context/cart/CartContext";
import { FromCheckout } from "@/comoponents/FormCheckout";
const CartPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const isMobile = useMediaQuery("(max-width:600px)");
  const [isCheckauto, setIsCheckaut] = useState(false);

  const { isLoaded, cart } = useContext(CartContext);
  const router = useRouter();

  useEffect(() => {
    isLoaded && cart.length === 0 && router.replace("/cart/empty");
  }, [isLoaded]);

  useEffect(() => {
    isCheckauto &&
      gsap.to(".containerCart", {
        transform: "scale(0)",
      });
    isCheckauto &&
      gsap.to(".containerCart", {
        display: "none",
        delay: 1,
      });
    isCheckauto &&
      gsap.to(".formContainerCart", {
        transform: "scale(1)",
        delay: 1.5,
      });
  }, [isCheckauto]);

  return (
    <ShopLayout
      title="Cart"
      pageDescription={"Carrito de compras de la tienda"}
    >
      <Grid container sx={{ my: 15 }} className="containerCart">
        <Grid item xs={12} sm={7}>
          <CartList editable isMobile={isMobile} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Order</Typography>
              <Divider sx={{ my: 1 }} />

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button
                  color="secondary"
                  className="circular-btn"
                  fullWidth
                  onClick={() => setIsCheckaut(true)}
                >
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box
        className="formContainerCart"
        sx={{ transform: "scale(0)", mt: 10, mx: 2 }}
      >
        <CartList />
        <OrderSummary />
        <FromCheckout />
      </Box>
    </ShopLayout>
  );
};

export default CartPage;
