import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import styles from "./Carousel.module.css";
function Carousel() {
  const Controls = ({ data }) => {
    let swiper = useSwiper();
    console.log(swiper);
    useEffect(() => {
      // swiper.slideTo(0);
    }, [data]);

    return <></>;
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.headerWrapper}>
        <Box>
          <Typography variant="h3">
            What says our <br />
            happy Clients
          </Typography>
        </Box>
        <Box className={styles.buttonContainer}>
          <Box className={styles.button}></Box>
          <Box className={styles.button}></Box>
        </Box>
      </Box>
      {/* <Box className={styles.swiperContainer}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </Box> */}
    </Box>
  );
}

export default Carousel;
