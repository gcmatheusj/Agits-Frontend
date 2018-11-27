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
  CssBaseline,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    paddingTop: 0,
    padding: theme.spacing.unit * 3,
  },
});

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
          <MenuItem component={Link} to='/novo-tutor' selected={'/novo-tutor' === pathname}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            Create Tutor
          </MenuItem>
          <MenuItem component={Link} to='/'>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            Home
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            Dashboard
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
