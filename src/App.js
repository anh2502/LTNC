import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Router from "./router";
import "./App.css";
import { Box } from "@mui/material";

import theme from "./theme";
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <BrowserRouter >
          <Box>
            <Router />
          </Box>
        </BrowserRouter >
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;