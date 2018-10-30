import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
} from '@material-ui/core';

import DefineDomainAndSubject from './Steps/DefineDomainAndSubject';
import Start from './Steps/Start';
import DefinePedagogicalModel from './Steps/DefinePedagogicalModel';
import DefineGamificationModel from './Steps/DefineGamificationModel';
import EvalutaionMethods from './Steps/EvalutaionMethods';
import DefineReports from './Steps/DefineReports';

const styles = theme => ({
  root: {
    width: '100%',
  },
  stepper: {
    [theme.breakpoints.down('sm')]: {
      padding: 15,
      marginTop: 10,
    },
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return [
    'Start',
    'Define Domain',
    'Define Pedagogical Model',
    'Define Gamified Model',
    'Define Evaluation Methods',
    'Define Reports',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Start />;
    case 1:
      return <DefineDomainAndSubject />;
    case 2:
      return <DefinePedagogicalModel />;
    case 3:
      return <DefineGamificationModel />;
    case 4:
      return <EvalutaionMethods />;
    case 5:
      return <DefineReports />;
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends Component {
  state = {
    activeStep: 3,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper className={classes.stepper} activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <div>{getStepContent(index)}</div>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(VerticalLinearStepper);
