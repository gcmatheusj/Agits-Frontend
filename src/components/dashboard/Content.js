import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card, CardContent } from '@material-ui/core';

const styles = {
  card: {
    width: '100%',
  },
  divider: {
    width: '100%',
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

const Content = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>New Content</CardContent>
    </Card>
  );
};

Content.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(Content);
