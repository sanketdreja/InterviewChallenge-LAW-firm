import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BussinessLaw from "../../assets/BussinessLawCover.png";
import PartnershipLawCover from "../../assets/PartnershipLawCover.png";
import RealEstate from "../../assets/RealEstateCover.png";
import Bussiness from "../../assets/BusinessLawCover1.png";
import Landlord from "../../assets/LandlordDisputesCover.png";
import ElderLaw from "../../assets/ElderAbuseCover.png";

import styles from "./PracticeAreas.module.css";
function PracticeAreas() {
  return (
    <Box className={styles.container}>
      <Box>
        <Typography variant="h3">Area of Practices</Typography>
      </Box>
      <Box className={styles.imageContainer}>
        <Grid container rowSpacing={3}>
          <Grid item xs={6} md={8}>
            <img src={BussinessLaw} />
            {/* <Typography variant="h3">Bussiness Law</Typography> */}
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={PartnershipLawCover} />
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={RealEstate} />
          </Grid>
          <Grid item xs={6} md={8}>
            <img src={Bussiness} />
          </Grid>
          <Grid item xs={6} md={8}>
            <img src={Landlord} />
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={ElderLaw} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default PracticeAreas;

// {/* <Grid
// container
// spacing={2}
// // sx={{
// //   border: "1px solid black",
// //   width: "60%",
// //   justifyContent: "center",
// // }}
// >
// <Grid item xs={8}>
//   <img src={BussinessLaw} alt="BUSINESS LAW" />
// </Grid>
// <Grid item xs={4}>
//   <img src={PartnershipLawCover} alt="Partnership LAW" />
// </Grid>
// <Grid item xs={4}>
//   {/* <img src={} alt="REAL ESTATE LAW"/> */}
// </Grid>
// <Grid item xs={8}>
//   {/* <img src={}  alt="BUSINESS LAW"/></Grid> */}
//   <Grid item xs={8}>
//     {/* <img src={} alt="LANDLORD DISPUTES"/> */}
//   </Grid>
//   <Grid item xs={4}>
//     {/* <img src={ } alt="ELDER ABUSE" /> */}
//   </Grid>
// </Grid>
// </Grid> */}
