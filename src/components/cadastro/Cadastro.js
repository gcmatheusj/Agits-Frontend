import React, { Component } from 'react'
import { Typography, TextField, Button, Divider, Grid, Card } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
    root: {
        height: "90vh"
    },
    grid: {
        alignItems: 'center'
    },
    cardContainer: {
        maxWidth: 550,
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
            <Grid container>
                { /*<div className="flex">
            <div className="flexName">
            <Typography
            variant="subheading"
            className={classes.subheading}>
            I already have an account!
            </Typography>
            </div>
            <div className="flexButton">
            <Button
            className={classes.btngs}
            variant="contained"
            color="primary"
            style={{ backgroundColor: '#ff572f' }}
            onClick={this.handleAuth}>
            LOGIN
            </Button>
            </div>
        </div> */}

                <Grid className={classes.root} container>
                    <Grid className={classes.grid} container justify="center" direction="row">
                        <Card className={classes.cardContainer}>
                            <div className={classes.formContainer}>
                                <Typography align="left" variant="title" className={classes.title}>Create your Account</Typography>
                                <Typography align="left" variant="subheading" className={classes.subheading}>To continue to MeuTutor</Typography>
                                <Divider />
                                <div>
                                    <TextField
                                        className={classes.inputname}
                                        id="first-name"
                                        label="First name"
                                        margin="normal"
                                    />
                                    <TextField
                                        //className={classes.inputname}
                                        id="last-name"
                                        label="Last name"
                                        margin="normal"
                                    />
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
                                    <TextField
                                        className={classes.inputpassword}
                                        id="cad-password"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        margin="normal"
                                    />
                                    <TextField
                                        className={classes.inputpassword}
                                        id="confirm-password"
                                        label="Confirm password"
                                        type="password"
                                        autoComplete="current-password"
                                        margin="normal"
                                    />
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
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

Cadastro.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Cadastro)