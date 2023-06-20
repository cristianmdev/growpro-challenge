/**
 * @desc Dependencias
 */
import { ThemeOptions, createTheme } from '@mui/material/styles';

/**
 * @desc Opciones
 */
const options: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#48ba86',
      contrastText: '#eee',
    },
    secondary: {
      main: '#fff',
    },
  },
});

export default options;