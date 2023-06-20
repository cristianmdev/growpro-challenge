/**
 * @desc Dependencies
 */
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ThemeProvider } from '@mui/material/styles';

/**
 * @desc Style's
 */
import "@Slick-carousel/slick/slick.css"; 
import "@Slick-carousel/slick/slick-theme.css";

/**
 * @desc Traducciones
 */
import "./Infrastructure/I18n"

/**
 * @desc Theme
 */
import Theme from "./Infrastructure/Theme";

/**
 * @desc Routes
 */
import Routes from "./Infrastructure/Routes";

/**
 * @desc Root of application
 */
const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={ Theme }>
        <Routes />
      </ThemeProvider>
    </LocalizationProvider>
  )
};

export default App;