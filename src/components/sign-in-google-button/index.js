import React from 'react';
import { Avatar, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import helpers from '../../helpers';

function SignInWithGoogleButton(props) {
  return (
    <Button
      variant="contained"
      fullWidth
      className={props.classes}
      component={RouterLink}
      to="/"
    >
      <Avatar
        alt="google"
        src="/assets/images/btn_google_light_pressed_ios.svg"
      />
      {props.t('auth.sign-in-google')}
    </Button>
  );
}

export default helpers(['t'])(SignInWithGoogleButton);
