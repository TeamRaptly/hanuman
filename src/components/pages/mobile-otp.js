// import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { Divider } from '@material-ui/core';
// import EmailIcon from '@material-ui/icons/Email';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginBottom: '15px'
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(2)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     textTransform: 'none',
//     fontSize: '18px'
//   },
//   heroButton: {
//     backgroundColor: '#ffffff',
//     marginTop: theme.spacing(2),
//     textTransform: 'none'
//   },
//   listButton: {
//     justifyContent: 'center'
//   },
//   listButton1: {
//     justifyContent: 'center'
//   },
//   icon: {
//     marginRight: '8px'
//   }
// }));

// const LoginView = ({ onSubmit }) => {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Phone OTP
//         </Typography>
//         <form className={classes.form} noValidate onSubmit={onSubmit}>
//           <TextField
//             id="standard-basic"
//             label="Phone Number"
//             fullWidth
//             type="Phone"
//             borderColor="primary"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             GET OTP
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="/sign-up" variant="body2">
//                 Already have an account? Sign up
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Divider />
//       <div>
//         <form className={classes.form}>
//           <Button
//             variant="contained"
//             fullWidth
//             className={classes.heroButton}
//             component={RouterLink}
//             to="/sign-in"
//             startIcon={<EmailIcon />}
//           >
//             Sign in with email
//           </Button>
//           <Button
//             variant="contained"
//             fullWidth
//             className={classes.heroButton}
//             component={RouterLink}
//           >
//             <div className={classes.icon}>
//               <Avatar
//                 alt="google"
//                 src="/assets/images/btn_google_light_pressed_ios.svg"
//               />
//             </div>
//             Sign in with Google
//           </Button>
//         </form>
//       </div>
//     </Container>
//   );
// };

// export default LoginView;

import React from 'react';
import { CssBaseline, Container, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import helpers from '../../helpers';
import MobileOtpForm from '../mobile-otp-form';
import MobileOtpWithEmailButton from '../mobile-otp-email-button';
import MobileOtpWithGoogleButton from '../mobile-otp-google-button';

const useStyles = makeStyles((theme) => ({
  additionalButtonStyles: {
    backgroundColor: '#ffffff',
    marginTop: theme.spacing(2),
    textTransform: 'none'
  },
  additionalSignInOptions: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'none',
    fontSize: '18px'
  }
}));

const LoginView = ({ onSubmit }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <MobileOtpForm onSubmit={onSubmit} />
      <Divider />
      <div className={classes.additionalSignInOptions}>
        <MobileOtpWithEmailButton classes={classes.additionalButtonStyles} />
        <MobileOtpWithGoogleButton classes={classes.additionalButtonStyles} />
      </div>
    </Container>
  );
};

export default helpers(['t'])(LoginView);
