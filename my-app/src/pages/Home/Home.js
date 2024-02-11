import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import Image from "../../assets/CoverImage.png";

function Home() {
  return (
    <Box className={styles.homeContainer}>
      <Navbar />
      <Box className={styles.coverContainer}>
        <Box className={styles.coverTextContainer}>
          <Typography variant="h3">
            You don’t have to Fight them Alone.
          </Typography>{" "}
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </Typography>
          <Box className={styles.contactForm}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {/* <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} /> */}
              <TextField
                id="input-with-sx"
                placeholder="Enter your email address"
                variant="standard"
                InputProps={{
                  style: { color: "white" }, // for input text color
                }}
                InputLabelProps={{
                  style: { color: "white" }, // for placeholder color
                }}
              />
            </Box>
            <Button
              sx={{
                borderRadius: "50px",
                color: "var(--color-black )",
                fontSize: "0.75em",
                fontWeight: "700",
                right: "0.1em",
                paddingLeft: "1em",
                paddingRight: "1em",

                // margin: "1em",
              }}
              variant="contained"
              color="ochre"
            >
              Contact
            </Button>
          </Box>
        </Box>
        <Box className={styles.coverImageContainer}>
          <img src={Image} />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
