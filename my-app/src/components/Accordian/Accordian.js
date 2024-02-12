import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styles from "./Accordian.module.css";
import Plus from "../../assets/+.png";

function Accordian({ title, description }) {
  const [toggle, setToggle] = useState(false);
  return (
    <Box className={styles.accordianContainer}>
      <Box className={styles.titleBox}>
        <Typography variant="h5">{title}</Typography>

        <Box
          className={styles.buttonBox}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <img src={Plus} alt="" />
        </Box>
      </Box>
      {toggle && (
        <Box className={styles.descriptionBox}>
          <Typography variant="p2">{description}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default Accordian;
