import React from 'react';
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import helpers from '../../helpers';

const useStyles = makeStyles((theme) => ({
  signUpFormContainer: {
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
  signupFormElement: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  signUpFormSubmit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'none',
    fontSize: '18px'
  }
}));

function SignUpForm(props) {
  const classes = useStyles();

  return (
    <div className={classes.signUpFormContainer}>
      <Avatar className={classes.lockIconAvatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {props.t('auth.sign-up')}
      </Typography>
      <form
        className={classes.signUpFormElement}
        noValidate
        onSubmit={props.onSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.signUpFormSubmit}
        >
          {props.t('auth.sign-up')}
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/sign-in" variant="body2">
              {props.t('auth.already-have-account')}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default helpers(['t'])(SignUpForm);
