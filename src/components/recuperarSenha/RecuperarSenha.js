import React, { Component } from 'react'
import { Typography, Divider, TextField, Button, Card, CardActions, CardContent, Grid} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
    grid: {
        flexGrow: 1,
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            alignItems: "flex-start"
        }
    },
    card: {
        width: 550,
        minWidth: 275,
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
})

class Rsenha extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid className={classes.grid} container direction="row" justify="center"  >
                <Grid >
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
                                            label="Enter address"
                                            margin="normal"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid container justify="flex-end">
                                <Button className={classes.button} size="large">
                                    Back to login
                                </Button>
                                <Button className={classes.button} variant="contained" size="large" color="primary" style={{ backgroundColor: '#ff572f' }}>
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

Rsenha.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Rsenha)