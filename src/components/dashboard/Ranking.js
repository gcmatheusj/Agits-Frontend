import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'
import { Divider } from '@material-ui/core';

const styles = theme => ({
    card: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: 20
        }
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

const Ranking = props => {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card} >
            <CardContent>
                <Typography variant="title" style={{ fontWeight: "bold" }}>Ranking</Typography>
                <div>
                    <List>
                        <ListItem button>
                            <p style={{ marginTop: 0, marginBottom: 0, marginRight: 32}}>1º</p>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary="Student 13" />
                        </ListItem>
                        <ListItem button>
                            <p style={{ marginTop: 0, marginBottom: 0, marginRight: 32}}>2º</p>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary="Student 04" />
                        </ListItem>
                        <ListItem button>
                            <p style={{ marginTop: 0, marginBottom: 0, marginRight: 32}}>3º</p>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary="Student 28" />
                        </ListItem>
                        <ListItem button>
                            <p style={{ marginTop: 0, marginBottom: 0, marginRight: 32}}>4º</p>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary="Student 09" />
                        </ListItem>
                        <ListItem button>
                            <p style={{ marginTop: 0, marginBottom: 0, marginRight: 32}}>5º</p>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary="Student 05" />
                        </ListItem>
                    </List>
                    <Divider />
                    <CardActions>
                        <Grid container justify='flex-end'>
                            <Button size="medium" style={{ color: '#ff572f' }}>Show full ranking</Button>
                        </Grid>
                    </CardActions>
                </div>
            </CardContent>
        </Card>
    )
}


Ranking.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ranking)