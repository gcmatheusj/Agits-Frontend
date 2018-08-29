import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './assets/meu-tutor.png'
import Rsenha from './Rsenha'

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    logo:{
        marginTop: 10,
        width: 130
    }
};

class RecuperarSenha extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: '#003175' }}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            <img className={classes.logo} src={logo} alt=""></img>
                        </Typography>
                        <Button variant="contained" size="large" color="primary" style={{ backgroundColor: '#ff572f' }}>GET STARTED</Button>
                    </Toolbar>
                </AppBar>
                <Rsenha />
            </div>
        )
    }
}

RecuperarSenha.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecuperarSenha);