import React from 'react';
import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import helpers from '../../helpers';

function MobileOtpWithEmailButton(props) {
  return (
    <Button
      variant="contained"
      fullWidth
      className={props.classes}
      component={RouterLink}
      to="/sign-in"
      startIcon={<PhoneIcon />}
    >
      {props.t('auth.Sign-in-email')}
    </Button>
  );
}

export default helpers(['t'])(MobileOtpWithEmailButton);
