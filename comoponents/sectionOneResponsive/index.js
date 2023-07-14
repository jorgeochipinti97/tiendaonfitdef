import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useInView } from "react-intersection-observer";

import { Elastic, gsap, Power4, Power1, Back } from "gsap";
import { useRouter } from "next/router";

export const SectionOneResponsive = () => {
  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);
  const { ref, inView, entry } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  useEffect(() => {
    inView &&
      gsap.fromTo(
        ".responsiveOne",
        { xPercent: -100 },
        { xPercent: 0, opacity: 1 }
      );
  }, [inView]);
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        className="responsiveOne"
        ref={ref}
        sx={{ opacity: 0 }}
      >
        <Box
          sx={{ textAlign: "center" }}
          display="flex"
          justifyContent="center"
        >
          <Image
            src="https://res.cloudinary.com/dcvieavco/image/upload/v1678770903/all-over-print-recycled-unisex-sports-jersey-white-front-640d682e0e707_fxbjod.png"
            width={250}
            height={250}
            alt="asd"
          />
        </Box>

        <div
          ref={ref}
          className="sectionOne"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
          }}
        >
          <Typography sx={{ mt: 1, width: "80%" }} variant="subtitle1">
            Calidad Garantizada por OnFit
          </Typography>
          <Typography sx={{ mt: 1, width: "80%" }} variant="body1">
            Nos comprometemos a ofrecerte la más alta calidad. Trabajamos con
            proveedores confiables y seleccionamos cada artículo de nuestra
            tienda con atención para garantizar tu satisfacción y mejorar tu
            experiencia de entrenamiento.
          </Typography>
          <Box sx={{ mt: 5 }}>
            <Button
              color="secondary"
              size="large"
              onClick={() => router.push("/hombre")}
            >
              ¡Explorar ya!
            </Button>
          </Box>
        </div>
      </Box>
    </>
  );
};
