import logo from "./logo.svg";
import "./App.css";
import { Box, Grid, Typography } from "@mui/material";
import Home from "./pages/Home/Home";
import Attorneys from "./pages/Attorneys/Attorneys";
import PracticeAreas from "./pages/PracticeAreas/PracticeAreas";
import Carousel from "./components/Carousel/Carousel";
import Team from "./components/Team/Team";
import About from "./pages/About/About";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./pages/Footer/Footer";
function App() {
  return (
    <Box className="App">
      <Box className="wrapper">
        <Home />
        <Attorneys />
        <PracticeAreas />
        <Carousel />
        <Team />
        <About />
        <Subscribe />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
