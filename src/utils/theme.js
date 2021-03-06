import { createTheme } from '@mui/material';

const font = "'Nunito', sans-serif";

const theme = createTheme({
  palette: {
    primary: {
      light: '#33ab9f',
      main: '#44d5bc',
      dark: '#00695f',
      gradient: 'linear-gradient(90deg, #21C2CF, #49D7BB)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#44d5bc',
      light: '#fff',
    },

    background: {
      default: '#f3f7f6',
    },
  },

  typography: {
    fontFamily: font,

    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },

    h3: {
      fontSize: '1.2rem',
      fontWeight: 700,
    },

    body1: {
      fontSize: '1rem',
      fontWeight: 500,
    },

    button: {
      fontSize: '0.8rem',
      fontWeight: '700',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      md: 750,
      xl: 1280,
    },
  },
});

export default theme;
