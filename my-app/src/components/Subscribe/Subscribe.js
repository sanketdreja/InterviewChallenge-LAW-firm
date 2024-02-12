import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import styles from "./Subscribe.module.css";

function Subscribe() {
  return (
    <Box className={styles.formContainer}>
      <Box className={styles.formTitle}>
        <Typography variant="h2">Subscribe Our Newsletter</Typography>
      </Box>
      <Box className={styles.form}>
        <TextField
          variant="outlined"
          placeholder="Name"
          sx={{
            backgroundColor: "#FFFFFF",
            margin: "1em",
            borderTopLeftRadius: "1em",
            borderBottomLeftRadius: "1em",
          }}
        />
        <TextField
          variant="outlined"
          placeholder="Enter your Email"
          sx={{ backgroundColor: "#FFFFFF", margin: "1em" }}
        />
        {/* <Box className={styles.formButtom}>send</Box> */}
        <Button
          variant="contained"
          color="ochre"
          sx={{
            color: "dark",
            fontWeight: "700",
            padding: "1.2em",
            borderTopRightRadius: "1em",
            borderBottomRightRadius: "1em",
          }}
        >
          {" "}
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default Subscribe;
