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

import DefinePedagogicalModel from '../../novoTutor/Steps/DefinePedagogicalModel';
import DefineGamificationModel from '../../novoTutor/Steps/DefineGamificationModel';
import EvalutaionMethods from '../../novoTutor/Steps/EvalutaionMethods';
import DefineReports from '../../novoTutor/Steps/DefineReports';

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
    'Define Pedagogical Model',
    'Define Gamified Model',
    'Define Evaluation Methods',
    'Define Reports',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DefinePedagogicalModel />;
    case 1:
      return <DefineGamificationModel />;
    case 2:
      return <EvalutaionMethods />;
    case 3:
      return <DefineReports />;
    default:
      return 'Unknown step';
  }
}

class StepperPassoaPasso extends Component {
  state = {
    activeStep: 0,
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
                    <Button className={classes.button} disabled={activeStep === 0} onClick={this.handleBack}>Back</Button>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
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
            <Button className={classes.button} onClick={this.handleReset}>Reset</Button>
          </Paper>
        )}
      </div>
    );
  }
}

StepperPassoaPasso.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(StepperPassoaPasso);
