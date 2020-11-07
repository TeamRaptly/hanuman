import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuItemIcons from './menu-item-icons';

function MenuItem(props) {
  return (
    <ListItem button component={RouterLink} to={props.link}>
      <ListItemIcon>
        <MenuItemIcons icon={props.icon} />
      </ListItemIcon>
      <ListItemText primary={props.title} />
    </ListItem>
  );
}

export default MenuItem;
