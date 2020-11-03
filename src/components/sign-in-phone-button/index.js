import React from 'react';
import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import helpers from '../../helpers';

function SignInWithPhoneButton(props) {
  return (
    <Button
      variant="contained"
      fullWidth
      className={props.classes}
      component={RouterLink}
      to="/sign-in-otp"
      startIcon={<PhoneIcon />}
    >
      {props.t('auth.sign-in-phone')}
    </Button>
  );
}

export default helpers(['t'])(SignInWithPhoneButton);
