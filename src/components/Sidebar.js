import React, { Component } from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import Background from '../assets/imagem_fundo_filtro.png'
import logo from '../assets/meu-tutor.png'

const styles = theme => ({
    root: {
        backgroundImage: "url(" + Background + ")",
        backgroundSize: "cover",
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    grid: {
        alignItems: "center"
    },
    button: {
        borderColor: "#ff572f",
        color: "#ff572f",
        verticalAlign: 'middle',
        border: '2px solid'
    },
    content: {
        margin: 70,
        color: 'white'
    }
})

class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props
        return (
            <Grid className={classes.root} container>
                <Grid className={classes.grid} container justify="center" direction="row">
                    <div className="container">
                        <div className="content">
                            <div align="center" >
                                <img src={logo} alt=""></img>
                            </div>
                            <Typography className={classes.content} variant="display1" align="center">LOREM IPSUM PORTTITOR AENEAN TACITI SCELERISQUE TEMPUS DONEC.</Typography>
                            <div align="center">
                                <Button id="btn-ln" className={classes.button} variant="outlined" size="large" color="primary" >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Sidebar)