import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Typography, Divider, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import VerticalLinearStepper from './Stepper';

const styles = theme => ({
    pageTitle: {
        margin: '20px',
        fontWeight: 'bold'
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        //paddingTop: 64,
        //padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
});

class novoTutor extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { classes } = this.props
        return (
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                    <Typography className={classes.pageTitle} variant='h6' >
                        Meu Primeiro Tutor Inteligente Gamificado
                    </Typography>
                    <Divider style={styles.divider}/>
                    <Grid container>
                        <Grid container justify='center'>
                            <VerticalLinearStepper/>
                        </Grid>
                    </Grid>
            </main>
       )
    }
}

novoTutor.PropTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(novoTutor);