import React, { Component } from 'react'
import './sidebar.css'
import Button from '@material-ui/core/Button'
import Background from './assets/imagem_fundo_filtro.png'
import logo from './assets/meu-tutor.png'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core';

const styles = {
    root: {
        width: "50%",
        backgroundImage: "url(" + Background + ")",
        backgroundSize: "cover",
        height: "100vh"
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
}

class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
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
            </div>
        )
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Sidebar)