import React from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Switch from '@material-ui/core/Switch';

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
});

class DefinePedagogicalModel extends React.Component {
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
            <div style={{justifyContent:"center"}}>
                <Typography variant="subheading">
                    We use the most advanced techniques for providing an adaptive and intelligent tutor for your students!
            </Typography>
                <Paper className={classes.root}>
                    <Grid container spacing={16} style={{alignItems: "center"}}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="" />
                            </ButtonBase>
                        </Grid>
                        <Grid container item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="title">
                                        Knowledge tracing and curriculum sequence
                            </Typography>
                                    <Typography gutterBottom variant="subheading" align="justify">
                                        By default your customized tutor maskes use of current intelligent techniques that model
                                        student's knowledge to accurately decide which problems it should give to students at any
                                        given time.
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
                <Paper className={classes.root}>
                    <Grid container spacing={16} style={{alignItems: "center"}}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="" />
                            </ButtonBase>
                        </Grid>
                        <Grid container item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="title">
                                       Syllabus
                            </Typography>
                                    <Typography gutterBottom variant="subheading" align="justify">
                                        Enable this feature if you want to manage the schedule and subjects on which
                                        your students will learn using the tutor
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

DefinePedagogicalModel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefinePedagogicalModel)