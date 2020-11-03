import React from 'react';
import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import helpers from '../../helpers';

function SignInWithEmailButton(props) {
  return (
    <Button
      variant="contained"
      fullWidth
      className={props.classes}
      component={RouterLink}
      to="/sign-in"
      startIcon={<EmailIcon color="primary" />}
    >
      {props.t('auth.sign-in-email')}
    </Button>
  );
}

export default helpers(['t'])(SignInWithEmailButton);
