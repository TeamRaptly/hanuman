import red from '@material-ui/core/colors/red';

// Create a MUI theme instance.
// default theme set by MUI - https://material-ui.com/customization/default-theme/
const theme = {
  palette: {
    type: 'light',
    primary: {
      main: '#1b5e20'
    },
    secondary: {
      main: '#bf360c'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fafafa'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'ul li': {
          borderBottom: '1px dashed rgba(0, 0, 0, 0.42)'
        }
      }
    }
  }
};

export default theme;
