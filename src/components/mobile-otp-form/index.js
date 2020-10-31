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
  mobileOtpFormContainer: {
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
  mobileOtpFormElement: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  mobileOtpFormSubmit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'none',
    fontSize: '18px'
  }
}));

function MobileOtpFrom(props) {
  const classes = useStyles();

  return (
    <div className={classes.mobileOtpFormContainer}>
      <Avatar className={classes.lockIconAvatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {props.t('auth.phone-otp')}
      </Typography>
      <form
        className={classes.mobileOtpFormElement}
        noValidate
        onSubmit={props.onSubmit}
      >
        <TextField
          id="standard-basic"
          label="Phone Number"
          fullWidth
          type="Phone"
          borderColor="primary"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.mobileOtpFormSubmit}
        >
          {props.t('auth.get-otp')}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="/sign-in" variant="body2">
              {props.t('auth.already-have-account')}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default helpers(['t'])(MobileOtpFrom);
