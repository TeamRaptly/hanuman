import React from 'react';
import { CssBaseline, Container, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import helpers from '../../helpers';
import SignupForm from '../sign-up-form';
import SignInWithGoogleButton from '../sign-in-google-button';

const useStyles = makeStyles((theme) => ({
  additionalButtonStyles: {
    backgroundColor: '#ffffff',
    marginTop: theme.spacing(1),
    textTransform: 'none'
  },
  additionalSignUpOptions: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'none',
    fontSize: '18px'
  }
}));

const SignUp = ({ onSubmit }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <SignupForm onSubmit={onSubmit} />
      <Divider />
      <div className={classes.additionalSignUpOptions}>
        <SignInWithGoogleButton classes={classes.additionalButtonStyles} />
      </div>
    </Container>
  );
};

export default helpers(['t'])(SignUp);
