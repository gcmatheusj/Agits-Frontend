import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
  Divider
} from "@material-ui/core";
import { Redirect } from "react-router-dom";

// import ActionCreators from '../../../redux/actions/tutor';

import Header from "../../components/Header";

import DefineGamificationModel from "../../components/Steps/DefineGamificationModel";
import DefineEducationLevel from "../../components/Steps/DefineEducationLevel";

import styles from "./styles";

function getSteps() {
  return ["Definir Nível Educacional", "Define Modelo de Gamificação"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DefineEducationLevel />;
    case 1:
      return <DefineGamificationModel />;
    default:
      return "Unknown step";
  }
}

class StepperUsandoModelo extends Component {
  state = {
    activeStep: 0,
    finalized: false
  };

  componentDidMount() {
    window.sessionStorage.setItem("StartedModel", Date(Date.now()));
  }

  componentWillUnmount() {
    window.sessionStorage.setItem("FinishedModel", Date(Date.now()));
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  createTutorRequest = () => {
    this.setState({ finalized: true });
    // this.props.createTutor(this.props.tutor);
    // this.handleClick()
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep, finalized } = this.state;

    return (
      <div className={classes.root}>
        <Header title="AGITS">
          <Typography className={classes.pageTitle} variant="h6">
            Customizando Tutor
          </Typography>
          <Divider style={styles.divider} />
          <Stepper
            className={classes.stepper}
            activeStep={activeStep}
            orientation="vertical"
          >
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
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>
                All steps completed - you&quot;re finished
              </Typography>
              <Button className={classes.button} onClick={this.handleReset}>
                Reset
              </Button>
            </Paper>
          )}
        </Header>
        {finalized && <Redirect to="/questionario" />}
      </div>
    );
  }
}

StepperUsandoModelo.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(StepperUsandoModelo);
