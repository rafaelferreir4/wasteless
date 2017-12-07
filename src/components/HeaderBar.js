import React from 'react';
import AppBar from 'material-ui/AppBar';
import UserHeader from './UserHeader'

const HeaderBar = () => (
  <div>
    <AppBar title="Rafael Nogueira" iconElementRight={<UserHeader />} />
  </div>
);

export default HeaderBar;
