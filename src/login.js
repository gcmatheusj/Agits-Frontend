import React, { Component } from 'react'
import './login.css'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Divider className="size" />
                <Typography variant="title" className="title">Sign in to Meu Tutor</Typography>
                <Typography variant="subheading">Access your account to use the system</Typography>
                <Divider className="size" />
                <div className="formContainer">
                    <TextField
                        id="with-placeholder"
                        label="Enter your email"
                        placeholder="Placeholder"
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
                <div>
                    <Button variant="contained" size="large" color="primary">
                        Access
                    </Button>
                </div>
                <Divider className="size" />
            </div>
        )
    }
}

export default Login