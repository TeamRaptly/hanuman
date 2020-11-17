import React from 'react';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import helpers from '../../helpers';

const useStyles = makeStyles((theme) => ({
  otpFormContainer: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '15px'
  },
  lockIconAvatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  otpFormElement: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  otpFormSubmit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'none',
    fontSize: '18px'
  }
}));

function SignInOTPForm(props) {
  const classes = useStyles();

  return (
    <div className={classes.otpFormContainer}>
      <Avatar className={classes.lockIconAvatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {props.t('auth.phone-otp')}
      </Typography>
      <form
        className={classes.otpFormElement}
        noValidate
        onSubmit={props.onSubmit}
      >
        <TextField
          id="standard-basic"
          label={props.t('auth.phone-number')}
          fullWidth
          type="Phone"
          borderColor="primary"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label={props.t('auth.remember-me')}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.otpFormSubmit}
        >
          {props.t('auth.get-otp')}
        </Button>
        <Grid item xs>
          <Link href="/sign-up" variant="body2">
            {props.t('auth.dont-have-account')}
          </Link>
        </Grid>
      </form>
    </div>
  );
}

export default helpers(['t'])(SignInOTPForm);
