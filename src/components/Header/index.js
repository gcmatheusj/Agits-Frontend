import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Fab,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  Menu,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Add as AddIcon,
} from '@material-ui/icons';

import styles from './styles';

class Header extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const {
      classes, container, location: { pathname }, children, title,
    } = this.props;
    const { mobileOpen } = this.state;

    const drawer = (
      <div>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        <MenuList>

          <Fab
            variant='extended'
            component={Link}
            to='/criar-tutor'
            className={classes.fab}
          >
            <AddIcon />
            Criar Tutor
          </Fab>

          <MenuItem
            component={Link} to='/'
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText inset primary="Home" />
          </MenuItem>
          <MenuItem
            component={Link}
            to='/visualizar-tutores'
            selected={'/visualizar-tutores' === pathname}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText inset primary="Dashboard" />
          </MenuItem>
        </MenuList>
      </div>
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
                <Menu />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
            {/* The implementation can be swap with js to avoid SEO duplication of links. */}
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
                  keepMounted: true, // Better open performance on mobile.
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
  container: PropTypes.object,
};

export default compose(
  withRouter,
  withStyles(styles)
)(Header);
