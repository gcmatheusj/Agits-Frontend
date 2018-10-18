import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Card, Switch, Paper } from "@material-ui/core";

import curriculum from "../../../assets/curriculum.png";
import syllabus from ".././../../assets/syllabus.png";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
    padding: theme.spacing.unit * 2
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 20
  }
});

class DefinePedagogicalModel extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    checkedA: true,
    checkedB: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
        <div style={{ justifyContent: "center" }}>
        <Typography variant="subtitle1">
          We use the most advanced techniques for providing an adaptive and
          intelligent tutor for your students!
        </Typography>
        <div className={classes.root}>
          <Card>
            <Grid container style={{ padding: 20 }}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  spacing={16}
                  style={{ alignItems: "center" }}
                >
                  <img className={classes.img} alt="complex" src={curriculum} />
                  <Grid container item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h6">
                          Knowledge tracing and curriculum sequence
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          align="justify"
                        >
                          By default your customized tutor maskes use of current
                          intelligent techniques that model student's knowledge
                          to accurately decide which problems it should give to
                          students at any given time.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Switch
                    checked={this.state.checkedA}
                    onChange={this.handleChange("checkedA")}
                    value="checkedA"
                    color="primary"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </div>
        <div className={classes.root}>
          <Card>
            <Grid container style={{ padding: 20 }}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  spacing={16}
                  style={{ alignItems: "center" }}
                >
                  <img className={classes.img} alt="complex" src={syllabus} />
                  <Grid container item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h6">
                          Syllabus
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          align="justify"
                        >
                        Enable this feature if you want to manage the schedule and subjects on which
                        your students will learn using the tutor
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Switch
                    checked={this.state.checkedB}
                    onChange={this.handleChange("checkedB")}
                    value="checkedB"
                    color="primary"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
    );
  }
}

DefinePedagogicalModel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DefinePedagogicalModel);
