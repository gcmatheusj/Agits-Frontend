import React, { Component } from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './styles';

class TableTests extends Component {
  render() {
    const { classes, tutor } = this.props;
    return (
      <Paper className={classes.paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Test</TableCell>
              <TableCell>Average Hits</TableCell>
              <TableCell>Average Error</TableCell>
              <TableCell>Average Grade</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tutor.tests.map(test => (
              <TableRow key={test.id}>
                <TableCell component="th" scope="row">
                  {test.name}
                </TableCell>
                <TableCell>{test.hits}</TableCell>
                <TableCell>{test.error}</TableCell>
                <TableCell>{test.grade}</TableCell>
                <TableCell>{test.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TableTests.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableTests);
