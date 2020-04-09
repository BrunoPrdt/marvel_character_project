// Import material UI theme
import { createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';

// Create theme const
export const theme = createMuiTheme({
  palette: {
    // primary: purple,
    primary: {
      main: '#dd33fa',
    },
    secondary: {
      main: '#ef6694',
    },
    default: {
      main: '#536dfe',
    },
  },
  status: {
    danger: 'orange',
  },
});
