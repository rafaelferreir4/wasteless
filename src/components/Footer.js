import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const nearbyIcon = <IconLocationOn />;

class Footer extends Component {
  state = {
    selectedIndex: 0,
  };

  select = index => this.setState({ selectedIndex: index });

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={nearbyIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={nearbyIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Footer;
