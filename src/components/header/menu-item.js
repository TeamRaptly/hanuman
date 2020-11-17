import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuItemIcons from './menu-item-icons';
import helpers from '../../helpers';

function MenuItem(props) {
  return (
    <ListItem button component={RouterLink} to={props.link}>
      <ListItemIcon>
        <MenuItemIcons icon={props.icon} />
      </ListItemIcon>
      <ListItemText primary={props.t(`navigationMenu.${props.title}`)} />
    </ListItem>
  );
}

export default helpers(['t'])(MenuItem);
