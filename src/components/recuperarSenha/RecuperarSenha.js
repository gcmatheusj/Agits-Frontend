import React, { Component } from 'react'
import { Typography, Divider, TextField, Button, Card, CardActions, CardContent, Grid} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
    grid: {
        flexGrow: 1,
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            alignItems: "flex-start",
            marginTop: 30,
            marginLeft: 16,
            marginRight: 16
        },
    },
    card: {
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
    cardActions: {
        marginBottom: 10
    },
    formContainer: {
        width: '100%',
    },
})

class RecuperarSenha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNovaSenha: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({cardNovaSenha:true});
    }

    render() {
        const { classes } = this.props
        return (
            <Grid className={classes.grid} container direction="row" justify="center">
                <Grid>
                    <Card className={classes.card}>
                        <CardContent >
                            <Grid>
                                <Grid className={classes.formContainer}>
                                    <Typography align="center" variant="title" className={classes.title}>
                                        {(this.state.cardNovaSenha) ? "Enter the new password" : "Forgot your password?"}
                                    </Typography>
                                    <Typography align="center" variant="subheading" className={classes.subheading}>
                                        {
                                            (this.state.cardNovaSenha) ? 
                                            "To recover your account, create a new password"
                                            :
                                            "To recover your password, enter your email below"
                                        }
                                    </Typography>
                                    <Divider/>
                                    <Grid>
                                        {
                                            (this.state.cardNovaSenha) ? 
                                            [
                                                <TextField
                                                    className={classes.input}
                                                    id="with-placeholder"
                                                    label="Enter your new password" 
                                                    margin="normal"
                                                    key='0'
                                                />,
                                                <TextField
                                                    className={classes.input}
                                                    id="with-placeholder"
                                                    label="Confirm your new password"
                                                    margin="normal"
                                                    key='1'
                                                />
                                            ]
                                            :
                                            <TextField
                                                className={classes.input}
                                                id="with-placeholder"
                                                label="Email address"
                                                margin="normal"
                                            />
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                            <Grid container justify="flex-end">
                                <Button size="medium">
                                    Back to login
                                </Button>
                                <Button size="medium" variant="contained" color="primary" style={{backgroundColor: '#ff572f'}}
                                        onClick={this.onClick}>
                                    {
                                        (this.state.cardNovaSenha) ?
                                        "Change password"
                                        :
                                        "Send"
                                    }
                                </Button>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

RecuperarSenha.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RecuperarSenha)