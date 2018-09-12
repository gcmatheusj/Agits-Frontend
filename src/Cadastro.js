import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import PropTypes from 'prop-types'




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
    inputname: {
        width: '50%'
    },
    inputpassword: {
        width: '50%'
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
class Cadastro extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className = "flex">
                    <div className = "flexName">
                        <Typography
                            variant="subheading" 
                            className={classes.subheading}>
                                I already have an account!
                        </Typography>
                    </div>
                    <div className = "flexButton">
                        <Button
                            className = {classes.btngs} 
                            variant="contained"
                            color="primary" 
                            style={{ backgroundColor: '#ff572f'}}
                            onClick={this.handleAuth}>
                                LOGIN
                        </Button>
                    </div>
                </div>
                
                <div className="cadastroContainer">
                    <div className="cadastroContent" align="center">
                        <div className={classes.formContainer}>
                            <Divider />
                            <Typography align="left" variant="title" className={classes.title}>Create your Account</Typography>
                            <Typography align="left" variant="subheading" className={classes.subheading}>To continue to MeuTutor</Typography>
                            <Divider />
                            <div>
                                <div>
                                    <TextField
                                        className={classes.inputname}
                                        id="first-name"
                                        label="First name"
                                        margin="normal"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        className={classes.inputname}
                                        id="last-name"
                                        label="Last name"
                                        margin="normal"
                                    />
                                </div>
                            </div>
                            <div>
                                <TextField
                                    className={classes.input}
                                    id="user-name"
                                    label="Username"
                                    margin="normal"
                                />
                            </div>
                            <div>
                                <TextField
                                    className={classes.input}
                                    id="email-adress"
                                    label="E-mail adress"
                                    margin="normal"
                                />
                            </div>
                            <div>
                                <div>
                                    <TextField
                                        className={classes.inputpassword}
                                        id="cad-password"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        margin="normal"
                                    />
                                </div>
                                <div>
                                <TextField
                                    className={classes.inputpassword}
                                    id="confirm-password"
                                    label="Confirm password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                />
                            </div>
                            </div>
                            <div align="right">
                                <Button
                                    className={classes.button} 
                                    variant="contained" 
                                    size="large" 
                                    color="primary" 
                                    style={{ backgroundColor: '#ff572f' }} >
                                        CREATE
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

Cadastro.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Cadastro)