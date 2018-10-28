import React, { Component } from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Divider,
         Typography, FormControl, Select, InputLabel, MenuItem, Button, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        marginTop: '30px',
        marginBottom: '10px'
    },
    expansionPanel: {
        paddingTop: '5px',
        paddingBottom: '5px',
        borderTop: '1px solid #bdbdbd',
        borderRight: '1px solid #bdbdbd',
        borderLeft: '1px solid #bdbdbd',
    },
    expansionPanelFont: {
        fontSize: '16pt'
    },
    expansionPanelDetail: {
        borderRight: '1px solid #bdbdbd',
        borderLeft: '1px solid #bdbdbd',
        margin: '0',
        padding: '0'
    },
    label: {
        paddingTop: '30px',
        fontSize: '14pt',
    },
    formControl: {
        '@media only screen and (max-width: 360px)': { // Galaxy S3 width Compatibility
            maxWidth: '177px',
        },
        width: '100%',
    },
    gridContainer: {
        '@media only screen and (max-width: 360px)': { // Galaxy S3 width Compatibility
            padding: '20px'
        },
        paddingTop: '0',
        padding: '15px',
    },
    gridButton: {
        float: 'right'
    },
    divider: {
        marginTop: '25px',
        marginBottom: '15px'
    }
});

class DefineDomainAndSubject extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        domainArray: '',
        subjectArray: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div>
                    {/*Domain selection*/}
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionPanel} expandIcon={<ExpandMoreIcon/>}>
                            <Typography variant="h5" className={classes.expansionPanelFont}>
                                Define Domain and Subjects
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.expansionPanelDetail}>
                                <Grid container direction="column" className={classes.gridContainer}>
                                    <form>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel>Domain of your tutor</InputLabel>
                                            <Select
                                                className={classes.formControl}
                                                value={this.state.domainArray}                                   
                                                onChange={this.handleChange}
                                                inputProps={{
                                                    name: 'domainArray'
                                                }}
                                            >
                                                {/*
                                                    @gustavodlima:
                                                    Aqui é só uma versão estática do que vai ser feito. Ainda é
                                                    necessário mapear tudo isso e modelar a conexão com o back-end.
                                                */}
                                                <MenuItem value={0}>Basic math for 9th graders students</MenuItem> 
                                                <MenuItem value={1}>Basic math for 8th graders students</MenuItem> 
                                                <MenuItem value={2}>Basic math for 7th graders students</MenuItem> 
                                                <MenuItem value={3}>Basic math for 6th graders students</MenuItem> 
                                            </Select>
                                        </FormControl>
                                    </form>
                                    <Divider className={classes.divider}/>
                                    <div>
                                        <Button className={classes.gridButton} variant="contained" color="primary">
                                            Save
                                        </Button>
                                    </div>
                                </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    {/*Subject selection*/}
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} className={classes.expansionPanel}>
                            <Typography variant="h5" className={classes.expansionPanelFont}>
                                Define Subjects
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.expansionPanelDetail}>
                            <Grid container direction="column" className={classes.gridContainer}>
                                <Grid>
                                    {/*REDO*/}
                                </Grid>
                                <Divider className={classes.divider}/>
                                <div>
                                    <Button className={classes.gridButton} variant="contained" color="primary">
                                        Save
                                    </Button>
                                </div>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
                <div>
                    <Typography variant='h5' className={classes.label}>
                        Do not worry about creating or modifying your tutor content at this stage.
                        After finalizing the customization of your tutor, you can manage all your 
                        content whenever you want!
                    </Typography>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(DefineDomainAndSubject);