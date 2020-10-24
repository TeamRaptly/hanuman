import React from 'react';
import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import helpers from '../../helpers';
import PhoneIcon from '@material-ui/icons/Phone';

function SignInWithPhoneButton(props) {
  return (
    <Button
      variant="contained"
      fullWidth
      className={props.classes}
      component={RouterLink}
      to="/mobile-otp"
      startIcon={<PhoneIcon />}
    >
      {props.t('auth.sign-in-phone')}
    </Button>
  );
}

export default helpers(['t'])(SignInWithPhoneButton);
