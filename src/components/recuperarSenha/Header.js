import React, { Component } from 'react'
//import { AppBar, Toolbar, IconButton, Typography, Button, Grid } from '@material-ui/core' (unused)
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core'
//import MenuIcon from '@material-ui/icons/Menu' (unused)
import logo from '../../assets/meu-tutor.png'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
    root: {
        backgroundColor: '#003175'
    },
    logo: {
        marginTop: 5,
        width: 130,
        [theme.breakpoints.down('sm')]: {
            width: 110
        },
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
                    <Typography variant="h6" color="inherit" >
                        <img className={classes.logo} src={logo} alt=""></img>
                    </Typography>
                    <Grid container justify="flex-end">
                        <Typography className={classes.label} variant="subtitle1" color="inherit">
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