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
  additionalMobileOtpOptions: {
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
      <div className={classes.additionalMobileOtpOptions}>
        <MobileOtpWithEmailButton classes={classes.additionalButtonStyles} />
        <MobileOtpWithGoogleButton classes={classes.additionalButtonStyles} />
      </div>
    </Container>
  );
};

export default helpers(['t'])(LoginView);
