import React from 'react'
import PropTypes from 'prop-types';
import {
    withStyles,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    IconButton,
    Typography,
    Grid,
    Divider
} from '@material-ui/core'

import IconSettings from '@material-ui/icons/Settings'

const styles = theme => ({
    card: {
        maxWidth: 280,
        marginTop: 20,
        [theme.breakpoints.up('sm')]: {
            marginLeft: 20,
        },
    },
    media: {
        height: 120,
        padding: 20,
        backgroundColor: theme.palette.primary.main,
    },

    content: {
        height: 120,
        padding: 20
    },

    top: {
        color: '#ffffff',
    },

    iconSettings: {
        color: '#212121'
    },
})

class CardTutor extends React.Component {

    render() {
        const { classes } = this.props
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent className={classes.media}>
                        <Typography className={classes.top} variant="h6" gutterBottom> { this.props.name } </Typography>
                        <Typography className={classes.top} variant="subtitle1" gutterBottom> { this.props.studentsNumber } students </Typography>
                    </CardContent>
                    <CardContent className={classes.content}>
                        <Typography component="p">
                            { this.props.abstract }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Divider />
                <Grid container direction="row" justify="flex-end">
                    <CardActions>
                        <IconButton>
                            <IconSettings className={classes.iconSettings} />
                        </IconButton>
                    </CardActions>
                </Grid>
            </Card>
        )
    }
}

CardTutor.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardTutor)