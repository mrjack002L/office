// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A rich blue color
    },
    secondary: {
      main: '#ff4081', // Vibrant pink for accents
    },
    background: {
      default: '#f4f6f8', // Light background
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  spacing: 8, // Default spacing
});

export default theme;
