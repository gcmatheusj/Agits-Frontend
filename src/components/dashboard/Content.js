import React from 'react'
import PropTypes from 'prop-types';
import {withStyles, Card, CardActions, CardContent, Button, Typography, Grid, Divider} from '@material-ui/core';


const styles = {
    card: {
        width: '100%',
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
};

const Content = props => {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
                <CardContent>
                    New Content
                </CardContent>
            </Card>
    )
}


Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content)