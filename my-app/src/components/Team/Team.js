import React from "react";
import styles from "./Team.module.css";
import { Box, Grid, Typography } from "@mui/material";

import Danial from "../../assets/danialdef.png";
function Team() {
  return (
    <Box className={styles.teamWrapper}>
      <Box>
        <Typography variant="h2">Our Team</Typography>
      </Box>
      <Box sx={{ paddingTop: "4em" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
            className={styles.cardGridItem}
          >
            <Box className={styles.nameCard}>
              <Box className={styles.nameCardImage}>
                <img src={Danial} />
              </Box>
              <Box className={styles.nameCardBox}>
                <Typography variant="h5">Danial Def</Typography>
                <Typography variant="p2">301 Cases</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
            className={styles.cardGridItem}
          >
            <Box className={styles.nameCard}>
              <Box className={styles.nameCardImage}>
                <img src={Danial} />
              </Box>
              <Box className={styles.nameCardBox}>
                <Typography variant="h5">Danial Def</Typography>
                <Typography variant="p2">301 Cases</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
            className={styles.cardGridItem}
          >
            <Box className={styles.nameCard}>
              <Box className={styles.nameCardImage}>
                <img src={Danial} />
              </Box>
              <Box className={styles.nameCardBox}>
                <Typography variant="h5">Danial Def</Typography>
                <Typography variant="p2">301 Cases</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
            className={styles.cardGridItem}
          >
            <Box className={styles.nameCard}>
              <Box className={styles.nameCardImage}>
                <img src={Danial} />
              </Box>
              <Box className={styles.nameCardBox}>
                <Typography variant="h5">Danial Def</Typography>
                <Typography variant="p2">301 Cases</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
            className={styles.cardGridItem}
          >
            <Box className={styles.nameCard}>
              <Box className={styles.nameCardImage}>
                <img src={Danial} />
              </Box>
              <Box className={styles.nameCardBox}>
                <Typography variant="h5">Danial Def</Typography>
                <Typography variant="p2">301 Cases</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
            className={styles.cardGridItem}
          >
            <Box className={styles.nameCard}>
              <Box className={styles.nameCardImage}>
                <img src={Danial} />
              </Box>
              <Box className={styles.nameCardBox}>
                <Typography variant="h5">Danial Def</Typography>
                <Typography variant="p2">301 Cases</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Team;
