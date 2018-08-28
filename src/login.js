import React, { Component } from 'react'
import './login.css'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
    title: {
        fontSize: 27,
    }
}
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleAuth = this.handleAuth.bind(this)
    }

    async handleAuth(){
        const { email, password } = this.state
        try {
            const response = await axios.post('localhost:3001/authenticate', { email, password })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { classes } = this.props
        return (
            <div className="login-container">
                <Divider />
                <Typography variant="title" className={classes.title}>Sign in to Meu Tutor</Typography>
                <Typography variant="subheading">Access your account to use the system</Typography>
                <Divider />
                <div className="formContainer">
                    <TextField
                        id="with-placeholder"
                        label="Enter your email"
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                </div>
                <div align="right">
                    <Button variant="contained" size="large" color="primary">
                        Access
                    </Button>
                </div>
                <Divider />
            </div>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)