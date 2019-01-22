import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Input,
  MenuItem,
  Menu,
  List,
  Divider,
  Drawer,
} from '@material-ui/core';
//
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import classNames from 'classnames';
import { mainListItems } from '../listItems';
import Tabs from './Tabs';

import styles from './styles';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

class Header extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    open: true,
    value: 0,
  };

  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl, open } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">{/* <SettingsIcon /> */}</IconButton>
          <p>Settings</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar
          className={classNames(classes.appBar, open && classes.appBarShift)}
          position="absolute"
        >
          <Toolbar disableGutters={!open} className={classes.toolbar}>
            <IconButton
              className={classNames(
                classes.menuButton,
                open && classes.menuButtonHidden,
              )}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.titleHeader} variant="h6" color="inherit" noWrap>
              Dashboard
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input
                placeholder="Search"
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">{/* <SettingsIcon /> */}</IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
        </Drawer>
        <Tabs />
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(Header);
