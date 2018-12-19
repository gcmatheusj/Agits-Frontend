import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Add, Store, Search as SearchIcon } from '@material-ui/icons'
import { fade } from '@material-ui/core/styles/colorManipulator'

import ExpansionSubjects from './ExpansionSubjects'

import { Paper, Button, TextField, Typography, Grid, Divider, InputBase, InputAdornment } from '@material-ui/core';

//import AddIcons from '../../assets/AddIcons';
import Header from "../Header";

const styles = theme => ({
    root: {
        width: '100%',
    },
    titleGrid: {
        marginTop: 15,
        textAlign: 'left',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        },
    },
    Subjects: {
        marginTop: "24px",
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        },
    },
    gridSubjects: {
        direction: 'row',
    },
    gridAccordion: {
        alignItem: "center",
        justifyContent: "center",
    },
    textField: {
        marginTop: 25,
        width: '100%',
    },
    textField2: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 250,
    },
    buttons: {
        margin: theme.spacing.unit,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }
});

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
        const { classes } = this.props;
        const { expanded } = this.state
        return (
            <div>
                <Header title='AGITS'>
                    <Grid container spacing={16}>
                        <Grid item xs={12} className={classes.titleGrid}>
                            <Typography className={classes.title} variant="subtitle1">
                                Define domain and subjects
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
                            <div>
                                <Button variant="contained" className={classes.buttons} color='primary'>
                                    <Add />
                                    ADD SUBJECT
                                </Button>
                                <Button variant="contained" className={classes.buttons} color='primary'>
                                    <Store />
                                    STORE
                                </Button>
                            </div>
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
                            <Paper className={classes.paper}>
                                <Typography variant='subtitle1' style={{ marginBottom: 10 }}>Subjects</Typography>
                                <Divider />
                                <ExpansionSubjects name={'geometry'} expanded={expanded} handleChange={this.handleChange} />
                            </Paper>
                        </Grid>
                    </Grid>
                </Header>
            </div>
        )
    }
}

DefineDomain.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(DefineDomain);