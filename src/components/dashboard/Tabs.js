import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import NewsActivities from './News&Activities'
import Grid from '@material-ui/core/Grid'
import Ranking from './Ranking';
import Content from './Content'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    paddingTop: 64,
    //padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer}>
        <AppBar position="static" color="default">
          <Tabs
          style={{ backgroundColor: '#fff'}}
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Turma  1" />
            <Tab label="Turma 2" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          style={{ backgroundColor: '#f1f1f1'}}
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction} >
          <Grid container >
            <Grid container direction='row' item xs={12} sm={8}>
              <NewsActivities />
            </Grid>
            <Grid container item xs={12} sm={4}>
              <Grid container direction='column'> 
                <Ranking />
              </Grid>
              <Grid container direction='column'> 
                <Content />
              </Grid>
            </Grid>
          </Grid>
          </TabContainer>
          <TabContainer dir={theme.direction}>Turma 2</TabContainer>
        </SwipeableViews>
        </div>
      </main>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);