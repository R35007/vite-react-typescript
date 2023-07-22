// built-ins
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from '@tanstack/router';
import React from 'react';
import ReactDOM from 'react-dom/client';

// material ui
import CssBaseline from '@mui/material/CssBaseline';

// styles
import './index.scss';

// configs
import router from './configs/router';
import theme from './configs/theme';

// Register your router for maximum type safety
declare module '@tanstack/router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
