import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Add, Search as SearchIcon } from '@material-ui/icons';

import ExpansionSubjects from './ExpansionSubjects';

import { Button, TextField, Typography, Grid, Divider, InputAdornment } from '@material-ui/core';

//import AddIcons from '../../assets/AddIcons';

import styles from './styles';

class DefineDomain extends Component {

    state = {
        expanded: ''
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes } = this.props
        const { expanded } = this.state
        return (
            <div>

                <Grid container spacing={16}>
                    <Grid item xs={12} className={classes.titleGrid}>
                        <Typography className={classes.titleIndex} variant="subtitle1">
                            Define Domain
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Divider />
                        <TextField
                            id="outlined-with-placeholder"
                            label="Define domain of your tutor..."
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid container justify="space-between" alignItems="center">
                        <Button variant="contained" className={classes.buttons} size='medium' color='primary'>
                            <Add />
                            ADD SUBJECT
                        </Button>
                        <TextField
                            id="outlined-search"
                            label="Search existing domains"
                            type="search"
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} className={classes.gridSubjects}>
                        
                            <Typography variant='subtitle1' style={{ marginBottom: 10, fontWeight: 'bold' }}>Subjects</Typography>
                            <Divider style={{ marginBottom: 20 }} />
                            <ExpansionSubjects name={'Geometry'} expanded={expanded} handleChange={this.handleChange} />
                            <ExpansionSubjects name={'Geometry2'} expanded={expanded} handleChange={this.handleChange} />
                            <ExpansionSubjects name={'Geometry3'} expanded={expanded} handleChange={this.handleChange} />
                        
                    </Grid>
                </Grid>

            </div>
        )
    }
}

DefineDomain.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(DefineDomain);