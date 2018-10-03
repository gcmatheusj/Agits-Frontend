import React from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        marginTop: 10,
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
    icon: {
        maxWidth: 20,
        maxHeight: 20,
        margin: 10
    }
});

class DefineGamificationModel extends React.Component {
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
            <div style={{ justifyContent: "center" }}>
                <Typography variant="title">
                    What is the main behavior do you expect from your students when they are learning in the gamifed tutor?
                </Typography>
                <Typography variant="subheading">
                    Using gamificantion you can drive yours students to a motivating experience. We provide six target
                    behavior options that are positively supported by the literature! Each behavior enables a particular
                    set of gamification elemwnts in your customized tutor
                </Typography>
                <Paper className={classes.root}>
                    <Grid container spacing={16} style={{ alignItems: "center" }}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="" />
                            </ButtonBase>
                        </Grid>
                        <Grid container item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="title">
                                        Participation
                            </Typography>
                                    <Typography gutterBottom variant="subheading" align="justify">
                                        Select this option if you expect your students to be participative in your
                                        course by interacting with ...
                            </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid>
                        <ButtonBase className={classes.icon}>
                            <img alt="x" src="" />
                        </ButtonBase>
                        <ButtonBase className={classes.icon}>
                            <img alt="x" src="" />
                        </ButtonBase>
                    </Grid>
                </Paper>
                <Paper className={classes.root}>
                    <Grid container spacing={16} style={{ alignItems: "center" }}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="" />
                            </ButtonBase>
                        </Grid>
                        <Grid container item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="title">
                                        Performance
                            </Typography>
                                    <Typography gutterBottom variant="subheading" align="justify">
                                        Select this option if you expect your students to ...
                            </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider /> 
                        <Grid item xs container direction="row">
                            <ButtonBase className={classes.icon}>
                                <img alt="x" src="" />
                            </ButtonBase>
                            <ButtonBase className={classes.icon}>
                                <img alt="x" src="" />
                            </ButtonBase>
                        </Grid>
                        <Divider />
                        <Grid container direction="row" alignItems="center">
                            <ButtonBase className={classes.icon}>
                                <img alt="x" src="" />
                            </ButtonBase>
                            <Typography gutterBottom align="justify">
                                Leaderboard: A ranked list of ...
                        </Typography>
                        </Grid>
                    
                </Paper>
                <Paper className={classes.root}>
                    <Grid container spacing={16} style={{ alignItems: "center" }}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="" />
                            </ButtonBase>
                        </Grid>
                        <Grid container item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="title">
                                        Competition
                            </Typography>
                                    <Typography gutterBottom variant="subheading" align="justify">
                                        Select this option if you expect to provide competition ...
                            </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid>
                        <ButtonBase className={classes.icon}>
                            <img alt="x" src="" />
                        </ButtonBase>
                        <ButtonBase className={classes.icon}>
                            <img alt="x" src="" />
                        </ButtonBase>
                    </Grid>
                </Paper>
                <Paper className={classes.root}>
                    <Grid container spacing={16} style={{ alignItems: "center" }}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="" />
                            </ButtonBase>
                        </Grid>
                        <Grid container item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="title">
                                        Enjoyment
                            </Typography>
                                    <Typography gutterBottom variant="subheading" align="justify">
                                        Select this option if you expect your students to be ...
                            </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid>
                        <ButtonBase className={classes.icon}>
                            <img alt="x" src="" />
                        </ButtonBase>
                        <ButtonBase className={classes.icon}>
                            <img alt="x" src="" />
                        </ButtonBase>
                    </Grid>
                </Paper>
                <Paper className={classes.root}>
                    <Grid container spacing={16} style={{ alignItems: "center" }}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="" />
                            </ButtonBase>
                        </Grid>
                        <Grid container item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="title">
                                        Exploration
                            </Typography>
                                    <Typography gutterBottom variant="subheading" align="justify">
                                        Select this option if you expect to incentive the exploration of the tutor ...
                            </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid>
                        <ButtonBase className={classes.icon}>
                            <img alt="x" src="" />
                        </ButtonBase>
                        <ButtonBase className={classes.icon}>
                            <img alt="x" src="" />
                        </ButtonBase>
                    </Grid>
                </Paper>
                <Paper className={classes.root}>
                    <Grid container spacing={16} style={{ alignItems: "center" }}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="" />
                            </ButtonBase>
                        </Grid>
                        <Grid container item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="title">
                                        Effectiveness
                            </Typography>
                                    <Typography gutterBottom variant="subheading" align="justify">
                                        Select this options if you mainly expect your students to be effective ...
                            </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid>
                        <ButtonBase className={classes.icon}>
                            <img alt="x" src="" />
                        </ButtonBase>
                        <ButtonBase className={classes.icon}>
                            <img alt="x" src="" />
                        </ButtonBase>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

DefineGamificationModel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefineGamificationModel)