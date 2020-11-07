import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import helpers from '../../helpers';
import HeaderBurgerMenu from './header-burger-menu';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  logo: {
    textDecoration: 'none',
    color: 'inherit'
  }
}));

const Header = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false
  });

  const toggleDrawer = (open) => (event) => {
    {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, open });
    }
  };

  return (
    <div className={classes.headerContainer}>
      <AppBar>
        <Toolbar disableGutters>
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
          </IconButton>
          <HeaderBurgerMenu open={state.open} toggleDrawer={toggleDrawer} />
          <Typography className={classes.title} variant="h6">
            <RouterLink className={classes.logo} to="/">
              GroceriesPlus
            </RouterLink>
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default helpers(['t'])(Header);
