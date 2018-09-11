import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import Header from './Header'
import RecuperarSenhaContainer from './RecuperarSenha'

const styles = theme => ({
    root: {
        height: '90vh',
        display: 'flex'
    }
})

class RecuperarSenha extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid container>
                <Header />
                <Grid className={classes.root} container>
                    <RecuperarSenhaContainer />
                </Grid>
            </Grid>
        )
    }
}

RecuperarSenha.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecuperarSenha)