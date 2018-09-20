import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { Divider } from '@material-ui/core';

const styles = theme => ({
    card: {
        width: '100%',
        marginRight: 20,
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
            marginBottom: 20
        },
    },
    divider: {
        width: '100%'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const NewsActivities = props => {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="title" style={{ fontWeight: "bold" }}>Last News</Typography>
                <div>
                    <Typography variant="subheading">Student 01 performed the ACTIVITYNAME</Typography>
                    <Divider />
                    <Typography variant="subheading">Student 02 performed the ACTIVITYNAME</Typography>
                    <Divider />
                    <Typography variant="subheading">Student 03 performed the ACTIVITYNAME</Typography>
                    <Divider />
                    <Typography variant="subheading">Student 04 performed the ACTIVITYNAME</Typography>
                    <Divider />
                    <Typography variant="subheading">Student 05 performed the ACTIVITYNAME</Typography>
                    <Divider />
                    <CardActions>
                        <Grid container justify='flex-end'>
                            <Button size="medium" style={{ color: '#ff572f' }}>Show All News</Button>
                        </Grid>
                    </CardActions>
                </div>
                <Divider />
                <Typography variant="title" style={{ fontWeight: "bold" }}>Next Activities</Typography>
                <div>
                    <Typography variant="subheading">Student 01 performed the ACTIVITYNAME</Typography>
                    <Divider />
                    <Typography variant="subheading">Student 02 performed the ACTIVITYNAME</Typography>
                    <Divider />
                    <Typography variant="subheading">Student 03 performed the ACTIVITYNAME</Typography>
                    <Divider />
                    <Typography variant="subheading">Student 04 performed the ACTIVITYNAME</Typography>
                    <Divider />
                    <Typography variant="subheading">Student 05 performed the ACTIVITYNAME</Typography>
                    <Divider />
                    <CardActions>
                        <Grid container justify='flex-end'>
                            <Button size="medium" style={{ color: '#ff572f' }}>Show All News</Button>
                        </Grid>
                    </CardActions>
                </div>
            </CardContent>
        </Card>
    )
}


NewsActivities.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsActivities)