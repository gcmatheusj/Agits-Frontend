import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import scratch from '../../../assets/scratch.png'
import template from '../../../assets/template.png'
import Grid from "@material-ui/core/Grid";

const styles = {
    card: {
        maxWidth: 280,
        textAlign: "center",
        margin: 20,
        padding: 10,
        background: "#757575"
    },
    root: {
        flexGrow: 1,
    },
}




const Start = props => {
    const { classes } = props

    return (
        <div>
            <Typography variant="headline">
                You can start by selecting a tutor template or creating a new tutor
                </Typography>
            <Grid container className={classes.root} container justify="center">
                <Card className={classes.card} style={{marginRight:150}}>
                    <img src={scratch} />
                    <CardContent>
                        <Typography gutterBottom variant="title" component="h2">
                            Create ITS from scratch
                            </Typography>
                        <Typography component="p">
                            Create a new tutor step by step and explore all features that we bring for you!
                            </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <img src={template} style={{ justifyContent: 'center', alignItems: 'center' }} />
                    <CardContent>
                        <Typography gutterBottom variant="title" component="h2">
                            Using a template
                            </Typography>
                        <Typography component="p">
                            Save time using a tutor already configured for use! But, feel free to modify whatever you need.
                            </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div >
    )
}


Start.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Start)