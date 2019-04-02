import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import TableTests from '../TableTests';
import StrongWeak from '../StrongWeak';
import Students from '../Students';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, tutor } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <Grid container spacing={16} className={classes.grid}>
              <Grid item xs={9}>
                <Grid container direction="column" spacing={16}>
                  <Grid item>
                    <TableTests tutor={tutor} />
                  </Grid>
                  <Grid item>
                    <Grid container spacing={16}>
                      <Grid item xs>
                        <StrongWeak type="STRONG" skills={tutor.strongSkills} />
                      </Grid>
                      <Grid item xs>
                        <StrongWeak type="WEAK" skills={tutor.weakSkills} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Students students={tutor.students} />
              </Grid>
            </Grid>
          </TabContainer>
        )}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  tutor: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
