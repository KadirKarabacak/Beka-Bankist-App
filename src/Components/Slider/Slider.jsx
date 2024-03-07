// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import styled from "styled-components";

import { useEffect, useState } from "react";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

Slider.propTypes = {
  data: PropTypes.array,
  isHead: PropTypes.bool,
  isAvatar: PropTypes.bool,

  selectedImage: PropTypes.string,
};
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border: none;
`;
// PROPS : 1) data // 2) isHead // 3) isAvatar
export default function Slider({ data, isHead, isAvatar, selectedImage }) {
  // const theme = useTheme();
  const [isAutoPlay, setAutoPlay] = useState(true);

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = data?.length;

  useEffect(() => {
    // Tıklanan resmin index'ini bul
    const selectedImgIndex = data.findIndex(
      (item) => item.galleryImg === selectedImage
    );
    setActiveStep(selectedImgIndex >= 0 ? selectedImgIndex : 0);
  }, [selectedImage, data]);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleMouseEnter = () => {
    setAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setAutoPlay(true);
  };

  // console.log(selectedImage);
  // console.log(selectedIndex);
  // console.log(data);

  return (
    <Box
      sx={{
        maxWidth: "100%",
        flexGrow: 1,
        cursor: "pointer",
      }}
    >
      <AutoPlaySwipeableViews
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        interval={3000}
        // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        autoplay={isAutoPlay}
      >
        {data?.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <>
                  {isHead && (
                    <Typography
                      sx={{
                        fontSize: "3.8rem",
                        color: "var(--color-secondary)",
                        fontWeight: "900",
                        letterSpacing: " 0.3rem",
                        textAlign: "center",
                        mb: "1rem",
                      }}
                    >
                      {data[activeStep].head}
                    </Typography>
                  )}
                </>
                <Typography
                  sx={{
                    width: "60%",
                    fontSize: "1.2rem",
                    color: "var(--color-text)",
                    lineHeight: "2rem",
                    textAlign: "center",
                    mb: "2rem",
                    fontStyle: isAvatar && "italic",
                  }}
                >
                  {data[activeStep].desc}
                </Typography>
                {isAvatar && (
                  <Tooltip sx={{ zIndex: 999 }} title={step?.name} arrow>
                    <Avatar
                      alt={step?.name}
                      src={step?.avatar}
                      sx={{
                        width: 96,
                        height: 96,
                        mb: "2rem",
                      }}
                    />
                  </Tooltip>
                )}
                {step.galleryImg && (
                  <StyledImg src={`../../../public/img/${step.galleryImg}`} />
                )}
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          background: "transparent",
          justifyContent: "center",
          display: "flex",
        }}
      />
    </Box>
  );
}
