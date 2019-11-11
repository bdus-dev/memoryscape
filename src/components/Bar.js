import React, { Component } from "react";

import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import MenuIcon from '@material-ui/icons/Menu';
import theming from "../services/theming";

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: {
        anchorEl: null
      }
    };
  }

  openMenu = event => {
    const anchorEl = event.currentTarget;

    this.setState({
      menu: {
        anchorEl
      }
    });
  };

  closeMenu = () => {
    this.setState({
      menu: {
        anchorEl: null
      }
    });
  };

  handleSettingsClick = () => {
    this.closeMenu();
    this.props.onSettingsClick();
  };

  render() {
    // Properties
    const { performingAction } = this.props;

    const { menu } = this.state;

    return (
      <AppBar color="primary" position="static">
        <Toolbar variant="regular">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
          >
              <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={menu.anchorEl}
            open={Boolean(menu.anchorEl)}
            onClose={this.closeMenu}
          >
            <MenuItem
              disabled={performingAction}
              onClick={this.handleSettingsClick}
            >
              Settings
            </MenuItem>
            <MenuItem
              disabled={performingAction}
              onClick={this.handleSignOutClick}
            >
              Sign out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

Bar.defaultProps = {
  performingAction: false
};

Bar.propTypes = {
  // Properties
  performingAction: PropTypes.bool.isRequired,
  // Events
  onSettingsClick: PropTypes.func.isRequired,
  onSignOutClick: PropTypes.func.isRequired
};

export default Bar;
