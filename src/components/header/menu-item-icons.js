import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import StorageIcon from '@material-ui/icons/Storage';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import BookIcon from '@material-ui/icons/Book';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function MenuItemIcons(props) {
  switch (props.icon) {
    case 'HomeIcon':
      return <HomeIcon />;
    case 'CategoryIcon':
      return <CategoryIcon />;
    case 'StorageIcon':
      return <StorageIcon />;
    case 'ShoppingCartIcon':
      return <ShoppingCartIcon />;
    case 'AccountBoxIcon':
      return <AccountBoxIcon />;
    case 'VerifiedUserIcon':
      return <VerifiedUserIcon />;
    case 'ContactSupportIcon':
      return <ContactSupportIcon />;
    case 'BookIcon':
      return <BookIcon />;
    case 'ExitToAppIcon':
      return <ExitToAppIcon />;
    case 'LockOutlinedIcon':
      return <LockOutlinedIcon />;
    default:
      return null;
  }
}

export default MenuItemIcons;
