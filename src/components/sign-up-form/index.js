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
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '15px'
  },
  lockIconAvatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  signUpFormElement: {
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
              label={props.t('auth.first-name')}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label={props.t('auth.last-name')}
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
              label={props.t('auth.email-ddress')}
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
              label={props.t('auth.password')}
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
          <Link href="/sign-in" variant="body2">
            {props.t('auth.already-have-account')}
          </Link>
        </Grid>
      </form>
    </div>
  );
}

export default helpers(['t'])(SignUpForm);
