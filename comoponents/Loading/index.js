import { Box } from "@mui/material";
import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../animations/lf20_ZyCSQa.json";

export const LoadingComponent = () => {
  return (
    <>
      <Box>
        <Lottie animationData={groovyWalkAnimation} loop={true} />;
      </Box>
    </>
  );
};
