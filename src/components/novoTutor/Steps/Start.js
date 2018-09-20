import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import scratch from '../../../assets/scratch.png'

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 340,
        objectFit: "cover"
    },
}

const Start = props => {
    const {classes} = props
        return (
            <div>
                <Typography variant="headline">
                    You can start by selecting a tutor template or creating a new tutor
                </Typography>
                <Card className={classes.card}>
                    <img src={scratch} />
                    <CardMedia
                        className={classes.media}
                        image="/"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Lizard
                            </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                    </CardContent>

                </Card>
            </div >
        )
    }

Start.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Start)