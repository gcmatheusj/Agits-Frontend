import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../../assets/meu-tutor.png'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
    root: {
        backgroundColor: '#003175'
    },
    logo: {
        marginTop: 5,
        width: 130
    }, 
    button: {
        backgroundColor: '#ff572f',
        color: 'white'
    },
    label: {
        marginTop: 8,
        marginRight: 20,
        fontSize: 18,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
})

class Header extends Component {
    render() {
        const { classes } = this.props
        return (
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <IconButton style={{ marginLeft: -12, marginRight: 20, }} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" >
                        <img className={classes.logo} src={logo} alt=""></img>
                    </Typography>
                    <Grid container justify="flex-end">
                        <Typography className={classes.label} variant="subheading" color="inherit">
                            Don't have an account?
                        </Typography>
                        <Button className={classes.button} size="small" variant="contained">Get Started</Button>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(Header)