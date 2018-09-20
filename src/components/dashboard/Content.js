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

const styles = {
    card: {
        width: '100%',
        //marginLeft: 5
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
    <Card className={classes.card} style={{ /*marginLeft: 20*/ }}>
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