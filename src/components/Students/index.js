import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  CardHeader,
} from '@material-ui/core';

import styles from './styles';

class Students extends Component {
  render() {
    const { classes, students } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader title={<Typography variant="body1">Students</Typography>}/>
        <Divider />
        <CardContent className={classes.content}>
          <List className={classes.list}>
            {students.map(student => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{student.name[0].toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant="subtitle1">{student.name}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }
}

Students.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Students);
