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
  signInFormContainer: {
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
  signInFormElement: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  signInFormSubmit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'none',
    fontSize: '18px'
  }
}));

function SignInForm(props) {
  const classes = useStyles();

  return (
    <div className={classes.signInFormContainer}>
      <Avatar className={classes.lockIconAvatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {props.t('auth.sign-in')}
      </Typography>
      <form
        className={classes.signInFormElement}
        noValidate
        onSubmit={props.onSubmit}
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label={props.t('auth.email-address')}
          name="email"
          type="email"
          placeholder="Email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label={props.t('auth.password')}
          type="password"
          placeholder="Password"
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
          className={classes.signInFormSubmit}
        >
          {props.t('auth.sign-in')}
        </Button>
        <Link href="/sign-up" variant="body2">
          {props.t('auth.dont-have-account')}
        </Link>
      </form>
    </div>
  );
}

export default helpers(['t'])(SignInForm);
