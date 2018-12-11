import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  Snackbar
} from '@material-ui/core';
import ActionCreators from '../../redux/actions/tutor';

import MySnackbarContentWrapper from '../ToastSuccess'

import DefinePedagogicalModel from './Steps/DefinePedagogicalModel';
import DefineGamificationModel from './Steps/DefineGamificationModel';
import EvalutaionMethods from './Steps/EvalutaionMethods';
import DefineReports from './Steps/DefineReports';

const styles = theme => ({
  root: {
    width: '100%',
  },
  stepper: {
    background: 'none',
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

class VerticalLinearStepper extends Component {
  state = {
    activeStep: 0,
    open: false
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

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  createTutorRequest = () => {
    this.props.createTutor(this.props.tutor);
    this.handleClick()
  };

  render() {
    const { classes, } = this.props;
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
                    {activeStep === steps.length - 1 ? (
                      <Button className={classes.button} variant="contained" color="primary" onClick={this.createTutorRequest}>Finish</Button>
                    ) : (
                        <Button className={classes.button} variant="contained" color="primary" onClick={this.handleNext}>Next</Button>
                      )}
                  </div>
                </div>
                <Snackbar
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={this.state.open}
                  autoHideDuration={3000}
                  onClose={this.handleClose}
                >
                  <MySnackbarContentWrapper
                    onClose={this.handleClose}
                    variant="success"
                    message="Success in creating the tutor!"
                  />
                </Snackbar>
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

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({
  tutor: state.tutor,
});

const mapDispatchToProps = dispatch => ({
  createTutor: tutor => dispatch(ActionCreators.createtutorRequest(tutor)),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(VerticalLinearStepper),
);
