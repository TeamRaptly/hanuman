import React from 'react';
import { CssBaseline, Container, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import helpers from '../../helpers';
import SignInOtpForm from '../sign-in-otp-form';
import SignInWithEmailButton from '../sign-in-email-button';
import SignInWithGoogleButton from '../sign-in-google-button';

const useStyles = makeStyles((theme) => ({
  additionalButtonStyles: {
    backgroundColor: '#ffffff',
    marginTop: theme.spacing(2),
    textTransform: 'none'
  },
  additionalOtpOptions: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'none',
    fontSize: '18px'
  }
}));

const SignInOTP = ({ onSubmit }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <SignInOtpForm onSubmit={onSubmit} />
      <Divider />
      <div className={classes.additionalOtpOptions}>
        <SignInWithEmailButton classes={classes.additionalButtonStyles} />
        <SignInWithGoogleButton classes={classes.additionalButtonStyles} />
      </div>
    </Container>
  );
};

export default helpers(['t'])(SignInOTP);
