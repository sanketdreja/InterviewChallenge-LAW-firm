import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import Home from "./pages/Home/Home";
import Attorneys from "./pages/Attorneys/Attorneys";
import PracticeAreas from "./pages/PracticeAreas/PracticeAreas";
import Carousel from "./components/Carousel/Carousel";
function App() {
  return (
    <Box className="App">
      <Box className="wrapper">
        <Home />
        <Attorneys />
        <PracticeAreas />
        <Box
          sx={{
            color: "var(--color-white)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Carousel />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
