import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import styles from "./Attorneys.module.css";
import GiftImage from "../../assets/Gift/Hicon/Bold/Gift.png";
function Attorneys() {
  return (
    <Box className={styles.container}>
      <Box className={styles.introContainer}>
        <Box className={styles.introBox}>
          <Typography variant="h2">Let’s Introduce Ourself</Typography>
        </Box>
        <hr></hr>
        <Box className={styles.introDescrBox}>
          <Typography variant="h3">Criminal Lawyer</Typography>{" "}
          <Typography variant="p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </Typography>
        </Box>
      </Box>

      <Box className={styles.wrapper}>
        <Box>
          {" "}
          <Typography variant="h2">Why Choose us?</Typography>
        </Box>
        <Box className={styles.cardWrapper}>
          <Box className={styles.card}>
            <Box className={styles.cardGiftIcon}>
              <img src={GiftImage} alt="Description of the image" />
            </Box>
            <Typography variant="h3">98% Success Rate</Typography>
            <Typography variant="p">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
            <Button
              sx={{
                borderRadius: "50px",
                color: "var(--color-black )",
                width: "50%",
                fontSize: "1em",
                fontWeight: "700",
              }}
              variant="contained"
              color="ochre"
            >
              Read More
            </Button>
          </Box>
          <Box className={styles.card}>
            <Box className={styles.cardGiftIcon}>
              <img src={GiftImage} alt="Description of the image" />
            </Box>
            <Typography variant="h3">100% Success Rate</Typography>
            <Typography variant="p">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
            <Button
              sx={{
                borderRadius: "50px",
                color: "var(--color-black )",
                width: "50%",
                fontSize: "1em",
                fontWeight: "700",
              }}
              variant="contained"
              color="ochre"
            >
              Read More
            </Button>
          </Box>{" "}
          <Box className={styles.card}>
            <Box className={styles.cardGiftIcon}>
              <img src={GiftImage} alt="Description of the image" />
            </Box>
            <Typography variant="h3">100% Success Rate</Typography>
            <Typography variant="p">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
            <Button
              sx={{
                borderRadius: "50px",
                color: "var(--color-black )",
                width: "50%",
                fontSize: "1em",
                fontWeight: "700",
              }}
              variant="contained"
              color="ochre"
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Attorneys;
