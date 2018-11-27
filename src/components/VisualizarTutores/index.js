import React, { Fragment } from 'react'
import { withStyles, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import CardTutor from './CardTutor'
import Header from '../Header'

const styles = () => ({
    root: {
        display: 'flex',
    },
});

function VisualizarTutores(props) {
    return (
        <Fragment>
            <Header />
            <Grid 
                style={{maxWidth: '75%'}} 
                container 
                direction="row" 
                justify="center" 
            >
                <CardTutor />
                <CardTutor />
                <CardTutor />
                <CardTutor />
                <CardTutor />
                <CardTutor />
            </Grid>
        </Fragment>
    )
}

VisualizarTutores.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VisualizarTutores)