import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import John from "../../assets/JohnDoperProfile.png";
import Devon from "../../assets/DevonLane.png";
import Robert from "../../assets/RobertFox.png";
import left from "../../assets/leftArrow/Hicon/Linear/left.png";
import right from "../../assets/rightArrow/Hicon/Linear/right.png";

function Carousel() {
  const swiper = useSwiper();
  const Controls = () => {
    let swiper = useSwiper();
    console.log(swiper);
    useEffect(() => {
      // swiper.slideTo(0);
    }, []);

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
          <Box
            className={styles.button}
            onClick={() => {
              swiper.slidePrev();
            }}
          >
            <img src={left} alt="" />
          </Box>
          <Box
            className={styles.button}
            onClick={() => {
              swiper.slideNext();
            }}
          >
            <img src={right} alt="" />
          </Box>
        </Box>
      </Box>
      <Box className={styles.swiperContainer}>
        <Swiper
          initialSlide={0}
          modules={{ Navigation }}
          slidesPerView={3}
          spaceBetween={0}
          allowTouchMove
        >
          <Controls />
          <SwiperSlide>
            <Box className={styles.card}>
              <Box className={styles.cardGiftIcon}>
                <img src={John} alt="Description of the image" />
              </Box>
              <Typography variant="h4">Jane Cooper</Typography>
              <Typography variant="h6">Ceo of Hunt</Typography>

              <Typography variant="p2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className={styles.card}>
              <Box className={styles.cardGiftIcon}>
                <img src={Devon} alt="Description of the image" />
              </Box>
              <Typography variant="h4">Devon Lane</Typography>
              <Typography variant="h6">Ceo of Hunt</Typography>

              <Typography variant="p2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </Box>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Box className={styles.card}>
              <Box className={styles.cardGiftIcon}>
                <img src={Robert} alt="Description of the image" />
              </Box>
              <Typography variant="h4">Robert Fox</Typography>
              <Typography variant="h6">Ceo of Hunt</Typography>

              <Typography variant="p2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className={styles.card}>
              <Box className={styles.cardGiftIcon}>
                <img src={John} alt="Description of the image" />
              </Box>
              <Typography variant="h4">Jane Cooper</Typography>
              <Typography variant="h6">Ceo of Hunt</Typography>

              <Typography variant="p2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className={styles.card}>
              <Box className={styles.cardGiftIcon}>
                <img src={Devon} alt="Description of the image" />
              </Box>
              <Typography variant="h4">Devon Lane</Typography>
              <Typography variant="h6">Ceo of Hunt</Typography>

              <Typography variant="p2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </Box>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Box className={styles.card}>
              <Box className={styles.cardGiftIcon}>
                <img src={Robert} alt="Description of the image" />
              </Box>
              <Typography variant="h4">Robert Fox</Typography>
              <Typography variant="h6">Ceo of Hunt</Typography>

              <Typography variant="p2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}

export default Carousel;
