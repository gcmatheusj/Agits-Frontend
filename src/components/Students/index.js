import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import styles from './styles';

class Students extends Component {
  render() {
    return <div />;
  }
}

Students.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Students);
