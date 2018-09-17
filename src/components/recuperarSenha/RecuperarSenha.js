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
    render() {
        const { classes } = this.props
        return (
            <Grid className={classes.grid} container direction="row" justify="center">
                <Grid>
                    <Card className={classes.card}>
                        <CardContent >
                            <Grid>
                                <Grid className={classes.formContainer}>
                                    <Typography align="left" variant="title" className={classes.title}>Forget your password?</Typography>
                                    <Typography align="left" variant="subheading" className={classes.subheading}>To recover you password, enter your email below</Typography>
                                    <Divider />
                                    <Grid >
                                        <TextField
                                            className={classes.input}
                                            id="with-placeholder"
                                            label="Email address"
                                            margin="normal"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                            <Grid container justify="flex-end">
                                <Button size="medium">
                                    Back to login
                                </Button>
                                <Button size="medium" variant="contained" color="primary" style={{ backgroundColor: '#ff572f' }}>
                                    Send
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