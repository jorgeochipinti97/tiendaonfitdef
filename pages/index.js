import { useRouter } from "next/router";
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

// import { CartContext } from "@/context";

// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import { Elastic, gsap, Power4, Power1, Back } from "gsap";
// import { FromCheckout } from "@/components/ui/FormCheckout";
import { ShopLayout } from "@/comoponents/layout/shopLayout";
import { VideoComponent } from "@/comoponents/VideoComponent";
import { TextComponentHome } from "@/comoponents/TextComponentHome";
import { SectionOneHome } from "@/comoponents/SectionOneHome";
import { SectionTwoHome } from "@/comoponents/SectionTwoHome";
import { SectionThreeHome } from "@/comoponents/SectionThreeHome";
import { SectionFourHome } from "@/comoponents/SectionFourHome";
import { ProductList } from "@/comoponents/Products/ProductList";
import { LoadingComponent } from "@/comoponents/Loading";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Elastic, gsap, Power4, Power1, Back } from "gsap";
import { SectionOneResponsive } from "@/comoponents/sectionOneResponsive";
import { SectionTwoResponsive } from "@/comoponents/sectionTwoResponsive";
import { SectionThreeResponsive } from "@/comoponents/sectionThreeResponsive";
import { SectionFourResponmsive } from "@/comoponents/sectionFourResponsive";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    gsap.to(".loader", { transform: "scale(0)", delay: 2 });
    gsap.to(".loader", { display: "none", delay: 2.5 });
    gsap.to(".mainContent", { transform: "scale(1)", delay: 3 });
  }, []);
  let populares = [
    {
      description: "",
      images: [
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678770982/stainless-steel-water-bottle-black-17oz-front-640d672f77c6b_gxmaz7.jpg",
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678770983/stainless-steel-water-bottle-black-17oz-front-640d670f8245a_lj8ojc.jpg",
      ],
      price: 100,
      slug: "botella_onfit",
      title: "Botella Onfit",
      type: "accesorios",
    },
    {
      description: "",
      images: [
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678771025/AnyConv.com__D_NQ_NP_960149-MLA53279087293_012023-O_ezgqcy.jpg",
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678771025/AnyConv.com__D_NQ_NP_960149-MLA53279087293_012023-O_ezgqcy.jpg",
      ],
      price: 100,
      slug: "caminadora",
      title: "Caminadora",
      type: "accesorios",
    },
    {
      description: "",
      images: [
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678770960/all-over-print-longline-sports-bra-white-right-front-640d69387424b_fv2stz.jpg",
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678770960/all-over-print-longline-sports-bra-white-left-front-640d6938741ee_tpl9t0.jpg",
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678770960/all-over-print-longline-sports-bra-white-back-640d693874322_mqann7.jpg",
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678770960/all-over-print-longline-sports-bra-white-front-640d693874177_rrrvw9.jpg",
      ],
      price: 100,
      slug: "corpinio_onfit",
      title: "corpiño onfit",
      type: "mujer",
    },
    {
      description: "",
      images: [
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678770735/classic-dad-hat-white-front-640d61cc7646a_c94xtv.png",
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678770732/classic-dad-hat-white-front-640d61cc7637e_bpo49l.png",
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678770733/classic-dad-hat-black-front-640d61cc7617d_kxghde.png",
      ],
      price: 100,
      slug: "gorra_onfit",
      title: "gorra onfit",
      type: "accesorios",
    },
    {
      description: "",
      images: [
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678770971/all-over-print-minimalist-backpack-white-right-640d60e9dfb83_1_wiw9vg.jpg",
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678770971/all-over-print-minimalist-backpack-white-left-640d60e9dfae1_i9xmyt.jpg",
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678770971/all-over-print-minimalist-backpack-white-right-640d60e9dfb83_ooyce4.jpg",
      ],
      price: 100,
      slug: "mochila_onfit",
      title: "mochila onfit",
      type: "accesorios",
    },
    {
      description: "",
      images: [
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678770993/shaker_gqwwuu.jpg",
        "https://res.cloudinary.com/dcvieavco/image/upload/v1678770993/shaker_gqwwuu.jpg",
      ],
      price: 100,
      slug: "shaker",
      title: "shaker",
      type: "accesorios",
    },
  ];

  return (
    <>
      <ShopLayout>
        <Box className="loader">
          <LoadingComponent />
        </Box>
        <Box className="mainContent" sx={{ transform: "scale(0)" }}>
          <VideoComponent isMobile={isMobile} />
          <TextComponentHome />

          <ProductList products={populares} isMobile={isMobile} />
          <Grid container sx={{ display: isMobile ? "none" : "auto" }}>
            <SectionOneHome />
            <SectionTwoHome />
            <SectionThreeHome />
            <SectionFourHome />
          </Grid>
          <Box sx={{ my: 3, display: isMobile ? "auto" : "none" }}>
            <SectionOneResponsive />{" "}
          </Box>
          <Box sx={{ my: 3, display: isMobile ? "auto" : "none" }}>
            <SectionTwoResponsive />{" "}
          </Box>
          <Box sx={{ my: 3, display: isMobile ? "auto" : "none" }}>
            <SectionThreeResponsive />{" "}
          </Box>
          <Box sx={{ my: 3, display: isMobile ? "auto" : "none" }}>
            <SectionFourResponmsive />{" "}
          </Box>
        </Box>
      </ShopLayout>
    </>
  );
}
