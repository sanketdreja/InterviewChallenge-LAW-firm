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
            margin: "0.5em",
            marginLeft: "0.5em",
            marginRight: "0.5em",
            borderTopLeftRadius: "0.5em",
            borderBottomLeftRadius: "0.5em",
          }}
        />
        <TextField
          variant="outlined"
          placeholder="Enter your Email"
          sx={{
            backgroundColor: "#FFFFFF",
            marginLeft: "0.5em",
            marginRight: "0.5em",
          }}
        />
        {/* <Box className={styles.formButtom}>send</Box> */}
        <Button
          variant="contained"
          color="ochre"
          sx={{
            marginLeft: "0.5em",
            marginRight: "0.5em",
            color: "dark",
            fontWeight: "700",
            padding: "1.2em",
            borderTopRightRadius: "0.5em",
            borderBottomRightRadius: "0.5em",
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
