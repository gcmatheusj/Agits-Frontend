import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card, CardContent } from '@material-ui/core';

import { content as styles } from './styles';

const Content = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.cardContent}>
      <CardContent>New Content</CardContent>
    </Card>
  );
};

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
