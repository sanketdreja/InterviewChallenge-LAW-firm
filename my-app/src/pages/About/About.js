import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./About.module.css";
import Accordian from "../../components/Accordian/Accordian";
function About() {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.containerText}>
        <Typography variant="h2">FAQ</Typography>
        <Typography variant="p">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Typography>
      </Box>
      <Box className={styles.accordianContainer}>
        <Accordian
          title="Do I need a personal injury report?"
          description="Amet minim mollit non deserunt ullamco est sit
                      aliqua dolor do amet sint. Velit officia consequatduis
                      enim velit mollit Exer. Amet minim mollit non deserunt
                      ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        />

        <Accordian
          title="How much is my case worth?"
          description="Amet minim mollit non deserunt ullamco est sit
                      aliqua dolor do amet sint. Velit officia consequatduis
                      enim velit mollit Exer. Amet minim mollit non deserunt
                      ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        />
        <Accordian
          title="What should I do right after car accidect"
          description="Amet minim mollit non deserunt ullamco est sit
                      aliqua dolor do amet sint. Velit officia consequatduis
                      enim velit mollit Exer. Amet minim mollit non deserunt
                      ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        />

        <Accordian
          title="How much is my case worth?"
          description="Amet minim mollit non deserunt ullamco est sit
                      aliqua dolor do amet sint. Velit officia consequatduis
                      enim velit mollit Exer. Amet minim mollit non deserunt
                      ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        />
      </Box>
    </Box>
  );
}

export default About;
