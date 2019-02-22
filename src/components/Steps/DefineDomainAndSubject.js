import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Divider,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
  Grid,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';

import { defineDomain as styles } from './styles';

class DefineDomainAndSubject extends Component {
  state = {
    domainArray: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { domainArray } = this.state;

    return (
      <div className={classes.rootDefineDomain}>
        <div>
          {/* Domain selection */}
          <ExpansionPanel>
            <ExpansionPanelSummary
              className={classes.expansionPanel}
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant="h5" className={classes.expansionPanelFont}>
                Define Domain and Subjects
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetail}>
              <Grid container direction="column" className={classes.gridContainer}>
                <form>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Domain of your tutor</InputLabel>
                    <Select
                      className={classes.formControl}
                      value={domainArray}
                      onChange={this.handleChange}
                      inputProps={{
                        name: 'domainArray',
                      }}
                    >
                      <MenuItem value={0}>Basic math for 9th graders students</MenuItem>
                      <MenuItem value={1}>Basic math for 8th graders students</MenuItem>
                      <MenuItem value={2}>Basic math for 7th graders students</MenuItem>
                      <MenuItem value={3}>Basic math for 6th graders students</MenuItem>
                    </Select>
                  </FormControl>
                </form>
                <Divider className={classes.divider} />
                <div>
                  <Button className={classes.gridButton} variant="contained" color="primary">
                    Save
                  </Button>
                </div>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          {/* Subject selection */}
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.expansionPanel}
            >
              <Typography variant="h5" className={classes.expansionPanelFont}>
                Define Subjects
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetail}>
              <Grid container direction="column" className={classes.gridContainer}>
                <Grid>{/* REDO */}</Grid>
                <Divider className={classes.divider} />
                <div>
                  <Button className={classes.gridButton} variant="contained" color="primary">
                    Save
                  </Button>
                </div>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <div>
          <Typography variant="h5" className={classes.label}>
            Do not worry about creating or modifying your tutor content at this stage. After
            finalizing the customization of your tutor, you can manage all your content whenever you
            want!
          </Typography>
        </div>
      </div>
    );
  }
}

DefineDomainAndSubject.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DefineDomainAndSubject);
