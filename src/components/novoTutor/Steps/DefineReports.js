import React from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Switch from '@material-ui/core/Switch';
import CardActionArea from '@material-ui/core/CardActionArea';

import student from "../../../assets/student.png"
import teacher from "../../../assets/teacher.png"

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 700,
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

class DefineReports extends React.Component {
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
                <Typography variant="subheading">
                    This is the least step to customize your tutor!
                </Typography>
                <Typography variant="subheading">
                    You can also select which kind of reports the tutor will provide
                </Typography>
                <CardActionArea>
                <Paper className={classes.root}>
                    <Grid container spacing={16} style={{ alignItems: "center" }}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={student} />
                            </ButtonBase>
                        </Grid>
                        <Grid container item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="title">
                                        Students Reports 
                            </Typography>
                                    <Typography gutterBottom variant="subheading" align="justify">
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
                </CardActionArea>
                <div style={{marginTop: 10}}/>

                <CardActionArea>
                <Paper className={classes.root}>
                    <Grid container spacing={16} style={{ alignItems: "center" }}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={teacher} />
                            </ButtonBase>
                        </Grid>
                        <Grid container item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="title">
                                    Teacher Reports
                            </Typography>
                                    <Typography gutterBottom variant="subheading" align="justify">
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
                </CardActionArea>
            </div>
        )
    }
}

DefineReports.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefineReports)