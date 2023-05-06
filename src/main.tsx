// built-ins
import React from 'react';
import ReactDOM from 'react-dom/client';

// material ui
import { deepPurple } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// components
import App from './App';

// styles
import './index.scss';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: deepPurple[500] },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
