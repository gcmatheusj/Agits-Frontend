import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

import styles from './styles';

const Ranking = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.cardRanking}>
      <CardContent>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          Ranking
        </Typography>
        <div>
          <List>
            <ListItem button>
              <p style={{ marginTop: 0, marginBottom: 0, marginRight: 32 }}>1º</p>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Student 13" />
            </ListItem>
            <ListItem button>
              <p style={{ marginTop: 0, marginBottom: 0, marginRight: 32 }}>2º</p>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Student 04" />
            </ListItem>
            <ListItem button>
              <p style={{ marginTop: 0, marginBottom: 0, marginRight: 32 }}>3º</p>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Student 28" />
            </ListItem>
            <ListItem button>
              <p style={{ marginTop: 0, marginBottom: 0, marginRight: 32 }}>4º</p>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Student 09" />
            </ListItem>
            <ListItem button>
              <p style={{ marginTop: 0, marginBottom: 0, marginRight: 32 }}>5º</p>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Student 05" />
            </ListItem>
          </List>
          <Divider />
          <CardActions>
            <Grid container justify="flex-end">
              <Button size="medium" style={{ color: '#ff572f' }}>
                Show full ranking
              </Button>
            </Grid>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
};

Ranking.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(Ranking);
