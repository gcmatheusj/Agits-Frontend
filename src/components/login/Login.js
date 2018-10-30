import React, { Component } from 'react'
import { Typography, Divider, TextField, Input, Button, InputLabel, FormControl, Grid, Card, CardContent, CardActions, IconButton, InputAdornment } from '@material-ui/core'
import { Visibility, VisibilityOff, } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import axios from 'axios'

const styles = theme => ({
    grid: {
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            alignItems: "flex-start",
            marginTop: 30,
            marginLeft: 16,
            marginRight: 16
        },
    },
    root: {
        height: "90vh"
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
    buttonGS: {
        backgroundColor: '#ff572f',
        color: 'white'
    },
    button: {
        marginTop: 8,
        marginBottom: 16
    },
    cardContainer: {
        maxWidth: 550,
    },
    newAccountPadding: {
        paddingLeft: 24,
        paddingRight: 24,
        [theme.breakpoints.down('sm')]: {
            alignItems: "flex-start",
            paddingLeft: 16,
            paddingRight: 16
        },
    },
    newAccount: {
        minHeight: 64,
        [theme.breakpoints.down('sm')]: {
            minHeight: 56,
        },
    },
    label: {
        marginRight: 20,
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    cardActions: {
        marginBottom: 10,
    }
})

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            showPassword: false
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

    handleClickShowPassword = () => {
        this.setState(state => ({
                showPassword: !state.showPassword
            })
        )
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
            <Grid container >
                <Grid className={classes.newAccountPadding} container>
                    <Grid className={classes.newAccount} container justify="flex-end" alignItems="center">
                        <Typography className={classes.label} variant="subtitle1" color="inherit">
                            Don't have an account?
                            </Typography>
                        <Button className={classes.buttonGS} size="medium" variant="contained">Get Started</Button>
                    </Grid>
                </Grid>
                <Grid className={classes.root} container>
                    <Grid className={classes.grid} container justify="center" direction="row">
                        <Card className={classes.cardContainer}>
                            <CardContent className="loginContent">
                                <div className={classes.formContainer}>
                                    <Typography align="left" variant="h6" className={classes.title}>Sign in to Meu Tutor</Typography>
                                    <Typography align="left" variant="subtitle1" className={classes.subheading}>Access your account to use the system</Typography>
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
                                    
                                    <FormControl className={classes.input}>
                                        <InputLabel htmlFor="adornment-password">Password</InputLabel>
                                        <Input
                                            id="adornment-password"
                                            type={this.state.showPassword ? 'text' : 'password'}
                                            value={this.state.password}
                                            autoComplete="current-password"
                                            margin="normal"
                                            onChange={this.handleChange('password')}
                                            endAdornment = {
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="Toggle password visibility"
                                                        onClick={this.handleClickShowPassword}
                                                    >
                                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }     
                                        />
                                    </FormControl>
                                </div>
                            </CardContent>
                        <CardActions className={classes.cardActions}>
                            <Grid container justify="flex-end">
                                <Button
                                    size="medium"
                                    onClick={this.handleAuth}>
                                    Forgot your password?
                                    </Button>
                                <Button
                                    variant="contained"
                                    size="medium"
                                    color="primary"
                                    style={{ backgroundColor: '#ff572f' }}
                                    onClick={this.handleAuth}>
                                    Access
                                    </Button>
                            </Grid>
                        </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)