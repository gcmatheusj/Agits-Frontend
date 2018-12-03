import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, TextField, Typography, Grid, Divider, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';

//import AddIcons from '../../assets/AddIcons';
import Header from "../Header";

const styles = theme => ({
    root: {
      width: '100%',
    },
    titleContainer: {
        marginTop: 15,
        marginBottom: 20, 
        textAlign: 'left',
    },
    title: {
        fontWeight:'bold',
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
        marginTop: 15,
        direction: 'row',
    },
    gridAccordion: {
        //backgroundColor: "green",
        alignItem: "center",
        justifyContent: "center",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 550,
    },
    textField2: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 250,
      },
    buttonSubject: {
        marginLeft: "30px",
        height: "4px",
        marginTop: "24px",
        width: "120px",
        margin: theme.spacing.unit,
        backgroundColor: '#ff572f',
    },
    buttonStore: {
        height: "4px",
        marginTop: "24px",
        width: "100px",
        margin: theme.spacing.unit,
        backgroundColor: '#ff572f',
    },
    actionsContainer: {
      marginBottom: theme.spacing.unit * 2,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
  });

class DefineDomain extends Component {
    
    state = {
        expanded: null,
      };
    
      handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return (
            <div>
                <Header>
                    <Grid className={classes.titleContainer}>
                        <Typography className={classes.title}  variant="subtitle1">
                            Define domain and subjects
                        </Typography>
                    </Grid>
                    <Divider />
                    <TextField
                        id="outlined-with-placeholder"
                        label="Domain"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <Divider />
                    <Grid container className={classes.gridSubjects}>
                        <Typography className={classes.Subjects} variant="h5">
                            Subjects
                        </Typography>
                        <Button variant="contained" size="small" className={classes.buttonSubject}>
                        {/*<AddIcons  className={classes.iconSmall}/>*/}
                            ADD SUBJECT
                        </Button>
                        <Button variant="contained" size="small" className={classes.buttonStore}>
                        {/*<AddIcons  className={classes.iconSmall}/>*/}
                            STORE
                        </Button>
                        <TextField
                            id="outlined-with-placeholder"
                            label="Search subject"
                            className={classes.textField2}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid container className={classes.gridAccordion}>
                        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>Personal data</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                    eros, vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
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