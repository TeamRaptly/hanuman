import red from '@material-ui/core/colors/red';

// Create a MUI theme instance.
// default theme set by MUI - https://material-ui.com/customization/default-theme/
const theme = {
  palette: {
    type: 'light',
    primary: {
      main: '#6200EE'
    },
    secondary: {
      main: '#03DAC5'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'ul li': {
          borderBottom: '2px dashed #3700B3'
        }
      }
    }
  }
};

export default theme;
