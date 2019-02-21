import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import {
  Stepper, Step, StepLabel, StepContent, Button, Snackbar,
} from '@material-ui/core';
import ActionCreators from '../../redux/actions/tutor';

import MySnackbarContentWrapper from '../../components/ToastSuccess';
import DefinePedagogicalModel from '../../components/Steps/DefinePedagogicalModel';
import DefineGamificationModel from '../../components/Steps/DefineGamificationModel';
import EvaluationMethods from '../../components/Steps/EvaluationMethods';
import DefineReports from '../../components/Steps/DefineReports';

import styles from './styles';

function getSteps() {
  return [
    'Definir Modelo Pedagógico',
    'Definir Modelo de Gamificação',
    'Definir Métodos de Avaliação',
    'Definir Relatórios',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DefinePedagogicalModel />;
    case 1:
      return <DefineGamificationModel />;
    case 2:
      return <EvaluationMethods />;
    case 3:
      return <DefineReports />;
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends Component {
  state = {
    activeStep: 0,
    open: false,
    finalized: false,
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
    const { createTutor, tutor } = this.props;
    this.setState({ finalized: true });
    createTutor(tutor);
    this.handleClick();
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep, finalized, open } = this.state;

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
                      className={classes.button}
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                    >
                      Voltar
                    </Button>
                    {activeStep === steps.length - 1 ? (
                      <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={this.createTutorRequest}
                      >
                        Finalizar
                      </Button>
                    ) : (
                      <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                      >
                        Próximo
                      </Button>
                    )}
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          autoHideDuration={3000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="success"
            message="Success in creating the tutor!"
          />
        </Snackbar>

        {finalized && <Redirect to="/questionario" />}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  createTutor: PropTypes.func.isRequired,
  tutor: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  tutor: state.tutor,
});

const mapDispatchToProps = dispatch => ({
  createTutor: tutor => dispatch(ActionCreators.createtutorRequest(tutor)),
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(VerticalLinearStepper),
);
