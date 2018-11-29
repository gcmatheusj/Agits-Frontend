import React, { Fragment } from 'react'
import { withStyles, Grid, Divider, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import CardTutor from './CardTutor'
import Header from '../Header'

const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    pageTitle: {
        margin: 20,
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
    }
});

function VisualizarTutores(props) {
    const { classes } = props
    return (
        <Fragment>
            <Header title='AGITS'>
                <Typography className={classes.pageTitle} variant="h6">
                    These Are Your Intelligent Tutor
                </Typography>
                <Divider style={styles.divider} />
                <Grid container direction="row" justify="flex-start">
                    <CardTutor />
                    <CardTutor />
                    <CardTutor />
                    <CardTutor />
                    <CardTutor />
                    <CardTutor />
                </Grid>
            </Header>
        </Fragment>
    )
}

VisualizarTutores.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VisualizarTutores)