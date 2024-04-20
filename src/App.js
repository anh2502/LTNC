import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Router from './router';
import './App.css';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import Redux store

function App() {
  return (
    <Provider store={store}> {/* Wrap your entire app in Provider and pass store */}
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <BrowserRouter>
            <Box>
              <Router />
            </Box>
          </BrowserRouter>
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
