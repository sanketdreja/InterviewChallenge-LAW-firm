import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import styles from "./Navbar.module.css";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

function Navbar() {
  return (
    <Box className={styles.navbarContainer}>
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
        <Button variant="text ">Contact Now</Button>
      </Box>
    </Box>
  );
}

export default Navbar;
