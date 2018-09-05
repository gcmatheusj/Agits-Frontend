import React, { Component } from 'react'
import './login.css'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import axios from 'axios'

const styles = {
    root: {
        width: "50%",
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
        float: 'right',
    }
}

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.handleAuth = this.handleAuth.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    //Criação de novos estados
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    //Requisição post para api rest
    async handleAuth() {
        const { email, password } = this.state
        try {
            await axios.post('http://localhost:3001/auth/authenticate', { email, password })
                .then(res => {
                    console.log("Response Received: ", res)

                })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className = "flex">
                    <div className = "flexName">
                        <Typography
                            variant="subheading" 
                            className={classes.subheading}>
                                Don't have an account?
                        </Typography>
                    </div>
                    <div className = "flexButton">
                        <Button
                            className = {classes.btngs} 
                            variant="contained"
                            color="primary" 
                            style={{ backgroundColor: '#ff572f'}}
                            onClick={this.handleAuth}>
                                GET STARTED
                        </Button>
                    </div>
                </div>
                
                <div className="loginContainer">
                    <div className="loginContent" align="center">
                        <div className={classes.formContainer}>
                            <Divider />
                            <Typography align="left" variant="title" className={classes.title}>Sign in to Meu Tutor</Typography>
                            <Typography align="left" variant="subheading" className={classes.subheading}>Access your account to use the system</Typography>
                            <Divider />
                            <div >
                                <TextField
                                    className={classes.input}
                                    id="with-placeholder"
                                    label="Enter your email"
                                    margin="normal"
                                    onChange={this.handleChange('email')}
                                />
                            </div>
                            <div>
                                <TextField
                                    className={classes.input}
                                    id="password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    onChange={this.handleChange('password')}
                                />
                            </div>
                            <div align="right">
                                <Button 
                                    id = "forgot-password"
                                    className={classes.button} 
                                    onClick={this.handleAuth}>
                                        Forgot your password?
                                </Button>
                                <Button
                                    className={classes.button} 
                                     variant="contained" 
                                     size="large" 
                                     color="primary" 
                                     style={{ backgroundColor: '#ff572f' }} 
                                     onClick={this.handleAuth}>
                                        Access
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

Login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)