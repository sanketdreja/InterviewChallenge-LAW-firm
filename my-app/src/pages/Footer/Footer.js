import { Box, Link, Typography } from "@mui/material";
import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

import Insta from "../../assets/insta.png";
import FB from "../../assets/fb.png";
import Tweet from "../../assets/twitter.png";
import Pin from "../../assets/pin.png";

function Footer() {
  return (
    <Box className={styles.container}>
      <Box className={styles.navigation}>
        <Box className={styles.iconWrapper}>
          <Logo />
          <Typography variant="h4">Igstudio</Typography>
        </Box>

        <Box className={styles.tab}>
          <Link
            className={styles.tabLink}
            href="#"
            color="white"
            underline="none"
            variant="body1"
          >
            Home
          </Link>
          <Link
            className={styles.tabLink}
            color="white"
            href="#"
            underline="none"
            variant="body1"
          >
            Attorneys
          </Link>{" "}
          <Link
            className={styles.tabLink}
            href="#"
            color="white"
            underline="none"
            variant="body1"
          >
            Practice Areas
          </Link>{" "}
          <Link
            className={styles.tabLink}
            href="#"
            color="white"
            underline="none"
            variant="body1"
          >
            About Us
          </Link>
        </Box>
        <Box className={styles.contact}>
          <Box className={styles.social}>
            <img src={Insta} alt="" />
          </Box>
          <Box className={styles.social}>
            <img src={FB} alt="" />
          </Box>{" "}
          <Box className={styles.social}>
            <img src={Tweet} alt="" />
          </Box>{" "}
          <Box className={styles.social}>
            <img src={Pin} alt="" />
          </Box>
        </Box>
      </Box>
      <Box className={styles.copyright}>
        <Typography variant="p2" sx={{ padding: "0.5em" }}>
          © 2020 Acme. All right reserved.
        </Typography>
        <Typography variant="p2" sx={{ padding: "0.5em" }}>
          Privacy Policy
        </Typography>
        <Typography variant="p2" sx={{ padding: "0.5em" }}>
          Terms of Service
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
