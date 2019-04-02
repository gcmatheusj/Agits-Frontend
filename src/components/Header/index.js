import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Hidden,
  Drawer,
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  // Fab,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  // Add as AddIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  MoreVert as MoreIcon,
  AccountCircle,
} from '@material-ui/icons';

import styles from './styles';

class Header extends Component {
  state = {
    mobileOpen: false,
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
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

  render() {
    const {
      classes,
      container,
      location: { pathname },
      children,
      title,
    } = this.props;
    const { mobileOpen, anchorEl, mobileMoreAnchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const drawer = (
      <div>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        <MenuList className={classes.menuList}>
          {/* <Fab variant="extended" component={Link} to="/criar-tutor" className={classes.fab}>
            <AddIcon />
            Criar Tutor
          </Fab> */}

          <MenuItem
            className={classes.selected}
            component={Link}
            to="/"
            selected={pathname === '/'}
          >
            <ListItemIcon className={classes.icon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Meus tutores" />
          </MenuItem>
          {/* <MenuItem
            className={classes.selected}
            component={Link}
            to="/dashboard"
            selected={pathname === '/dashboard'}
          >
            <ListItemIcon className={classes.icon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Dashboard" />
          </MenuItem> */}
        </MenuList>
      </div>
    );

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Perfil</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Minha Conta</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Menssagens</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notificações</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Perfil</p>
        </MenuItem>
      </Menu>
    );

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                {title}
              </Typography>

              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton color="inherit">
                  <MailIcon />
                </IconButton>
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
                <IconButton
                  aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMenu}
          {renderMobileMenu}
          <nav className={classes.drawer}>
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default compose(
  withRouter,
  withStyles(styles),
)(Header);
