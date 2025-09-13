import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    background: {
      default: '#f4f6f8',
      paper: '#fff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#555',
    },
  },
})