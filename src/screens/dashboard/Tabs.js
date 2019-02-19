import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import {
  withStyles,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Grid
} from "@material-ui/core";
import Content from "./Content";
import Ranking from "./Ranking";
import NewsActivities from "./News&Activities";

import { tabs as styles } from "./styles";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer}>
          <AppBar position="static" color="default">
            <Tabs
              className={classes.background}
              value={value}
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
            style={{ backgroundColor: "#f1f1f1" }}
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer dir={theme.direction}>
              <Grid container>
                <Grid container direction="row" item xs={12} sm={8}>
                  <NewsActivities />
                </Grid>
                <Grid container item xs={12} sm={4}>
                  <Grid container direction="column">
                    <Ranking />
                  </Grid>
                  <Grid container direction="column">
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
  classes: PropTypes.shape.isRequired,
  theme: PropTypes.shape.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
