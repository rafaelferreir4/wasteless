import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const UserHeader = () => (
  <div>
    <FlatButton label="Login" />
    <Badge badgeContent={10} secondary={true} badgeStyle={{top: 12, right: 12}}>
      <IconButton tooltip="Notifications">
        <NotificationsIcon />
      </IconButton>
    </Badge>
  </div>
);

export default UserHeader;
