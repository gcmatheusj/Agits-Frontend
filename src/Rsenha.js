import React, { Component } from 'react'
import './login.css'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import axios from 'axios'
import './Rsenha.css'

const styles = {
    root: {
        width: "100%",
        height: "100vh"
    },
    title: {
        fontSize: 27,
        marginTop: 8,
        fontWeight: 'bold'
    },
    subheading: {
        marginBottom: 8
    },
    input: {
        width: '100%'
    },
    button: {
        marginTop: 8,
        marginBottom: 16
    },
    formContainer: {
        width: 500,
    },
    btngs: {
        float: 'right'
    }
}

class Rsenha extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className="rsenhaContainer">
                    <div className="rsenhaContent" align="center">
                        <div className={classes.formContainer}>
                            <Divider />
                            <Typography align="left" variant="title" className={classes.title}>You're forget your password?</Typography>
                            <Typography align="left" variant="subheading" className={classes.subheading}>To recover you password, enter your email below</Typography>
                            <Divider />
                            <div >
                                <TextField
                                    className={classes.input}
                                    id="with-placeholder"
                                    label="Enter your email"
                                    margin="normal"
                                />
                            </div>
                            <div align="right">
                                <Button className={classes.button} size="large">
                                    Back to login
                                </Button>
                                <Button className={classes.button} variant="contained" size="large" color="primary" style={{ backgroundColor: '#ff572f' }}>
                                    Send
                                </Button>
                            </div>
                            <Divider />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Rsenha.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Rsenha)