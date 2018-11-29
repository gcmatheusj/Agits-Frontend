import React from 'react'
import PropTypes from 'prop-types';
import {
    withStyles,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid,
    Divider
} from '@material-ui/core'

import IconSettings from '@material-ui/icons/Settings'

const styles = theme => ({
    card: {
        maxWidth: 280,
        marginTop: 20,
        marginLeft: 20,
    },
    media: {
        height: 140,
        padding: 20,
        backgroundColor: theme.palette.primary.main,
    },

    top: {
        color: '#ffffff',
    },

    iconSettings: {
        color: '#212121'
    },
})

class CardTutor extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile">
                        <Typography className={classes.top} variant="h6" gutterBottom> Basic math for 9th graders students </Typography>
                        <Typography className={classes.top} variant="subtitle1" gutterBottom> 12 students </Typography>
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            Functions, geometry, equations, trigonometry, and others 10 subjects
                            with performance gamification method and teacher reports.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Divider />
                <Grid container direction="row" justify="flex-end">
                    <CardActions>
                        <Button size="small" color="primary" style={{ alignItems: 'flex-end' }}>
                            <IconSettings className={classes.iconSettings} />
                        </Button>
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