import React from 'react';
import { CssBaseline, Container, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import helpers from '../../helpers';
import SignInForm from '../sign-in-form';
import SignInWithPhoneButton from '../sign-in-phone-button';
import SignInWithGoogleButton from '../sign-in-google-button';

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

const LoginView = ({ onSubmit, t: translate }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <SignInForm onSubmit={onSubmit} />
      <Divider />
      <div className={classes.additionalSignInOptions}>
        <SignInWithPhoneButton classes={classes.additionalButtonStyles} />
        <SignInWithGoogleButton classes={classes.additionalButtonStyles} />
      </div>
    </Container>
  );
};

export default helpers(['t'])(LoginView);
