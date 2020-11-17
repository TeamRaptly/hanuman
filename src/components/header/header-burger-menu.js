import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  ListItemAvatar,
  ListItem,
  Divider,
  ListItemText,
  SwipeableDrawer
} from '@material-ui/core';
import helpers from '../../helpers';
import MenuItem from './menu-item';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250
  }
}));

function HeaderBurgerMenu(props) {
  const classes = useStyles();
  const navigationMenu = props.c('navigationMenu');

  return (
    <SwipeableDrawer
      BackdropProps={{ invisible: true }}
      open={props.open}
      onClose={props.toggleDrawer(false)}
      onOpen={props.toggleDrawer(true)}
    >
      <div
        className={classes.list}
        role="presentation"
        onClick={props.toggleDrawer(false)}
        onKeyDown={props.toggleDrawer(false)}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>R</Avatar>
          </ListItemAvatar>
          <ListItemText variant="h6">Raptly</ListItemText>
        </ListItem>
        <Divider />
        {navigationMenu.length &&
          navigationMenu.map(({ icon, link, title }, index) => (
            <MenuItem
              key={`${index}-${title}`}
              icon={icon}
              link={link}
              title={title}
            />
          ))}
      </div>
    </SwipeableDrawer>
  );
}

export default helpers(['c', 't'])(HeaderBurgerMenu);
