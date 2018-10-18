import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, Switch } from '@material-ui/core'

import student from "../../../assets/student.png"
import teacher from "../../../assets/teacher.png"

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
        padding: theme.spacing.unit * 2,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});

class DefineReports extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        checkedA: true,
        checkedB: false,
    }


    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="subtitle1">
                    This is the least step to customize your tutor!
                </Typography>
                <Typography variant="subtitle1">
                    You can also select which kind of reports the tutor will provide
                </Typography>
                <Paper className={classes.root}>
                    <Grid container spacing={16} style={{ alignItems: "center" }}>
                        <Grid item>
                            <div>
                                <img className={classes.img} alt="complex" src={student} />
                            </div>
                        </Grid>
                        <Grid container item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h6">
                                        Students Reports 
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1" align="justify">
                                        Enable this feature if you want to provide for your students different types of 
                                        reports regarding her learning performance in the domain. It includes reports on 
                                        learning performance in the overall domain or on particular subjects as well as 
                                        tests history
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid justify="center" alignItems="center" >
                            <Switch
                                checked={this.state.checkedA}
                                onChange={this.handleChange('checkedA')}
                                value="checkedA"
                                color="primary"
                            />
                        </Grid>
                    </Grid>
                </Paper>
                <div style={{marginTop: 10}}/>

                <Paper className={classes.root}>
                    <Grid container spacing={16} style={{ alignItems: "center" }}>
                        <Grid item>
                            <div>
                                <img className={classes.img} alt="complex" src={teacher} />
                            </div>
                        </Grid>
                        <Grid container item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h6">
                                        Teacher Reports
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1" align="justify">
                                        Enable this feature if you want to visualize reports about the interaction, 
                                        learning performance and other interesting reports about your students.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid justify="center" alignItems="center" >
                            <Switch
                                checked={this.state.checkedB}
                                onChange={this.handleChange('checkedB')}
                                value="checkedB"
                                color="primary"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

DefineReports.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefineReports)