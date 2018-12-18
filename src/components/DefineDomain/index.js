import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Add, Store } from '@material-ui/icons'

import ExpansionSubjects from './ExpansionSubjects'

import { Paper, Button, TextField, Typography, Grid, Divider, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';

//import AddIcons from '../../assets/AddIcons';
import Header from "../Header";

const styles = theme => ({
    root: {
        width: '100%',
    },
    titleGrid: {
        marginTop: 15,
        // marginBottom: 15,
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
        //backgroundColor: "green",
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
        // height: "4px",
        // marginTop: "24px",
        // width: "140px",
        margin: theme.spacing.unit,
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

                        <Grid item xs={12} >
                            <Button variant="contained" className={classes.buttons} color='primary'>
                                <Add />
                                ADD SUBJECT
                            </Button>
                            <Button variant="contained" className={classes.buttons} color='primary'>
                                <Store />
                                STORE
                            </Button>
                        </Grid>

                        <Grid item xs={12} className={classes.gridSubjects}>
                            <Paper className={classes.paper}>
                                <Typography variant='subtitle1' style={{ marginBottom: 10 }}>Subjects</Typography>
                                <Divider />
                                <ExpansionSubjects expanded={expanded} handleChange={this.handleChange}/>
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