import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import DefineDomainAndSubject from './Steps/DefineDomainAndSubject'
import Start from "./Steps/Start"
import DefinePedagogicalModel from "./Steps/DefinePedagogicalModel"
import DefineGamificationModel from "./Steps/DefineGamificationModel"
import EvalutaionMethods from "./Steps/EvalutaionMethods"
import DefineReports from "./Steps/DefineReports"

/*  (@gustavodlima)
    Ainda é necessário testar a responsividade dos steps, visto que o step Start.js tem elementos que não
    funcionam muito bem em telas pequenas, ou seja, menos que 780px já temos um bug no step.
*/

const styles = theme => ({
    root: {
        width: '100%',
        ['@media (min-width:780px)']: {
            width: '100%'
        }
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
        'Início', 
        'Definir Domínio', 
        'Definir Modelo Pedagógico',
        'Definir Modelo de Gamificação',
        'Definir Métodos de Avaliação',
        'Define Relatórios'
    ];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Start/>;
        case 1:
            return <DefineDomainAndSubject/>;
        case 2:
            return <DefinePedagogicalModel/>;
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

class VerticalLinearStepper extends React.Component {
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
            <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => {
                return (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                        <div>
                        <Button
                            disabled={activeStep === 1}
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
                );
            })}
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
    classes: PropTypes.object,
  };
  
export default withStyles(styles)(VerticalLinearStepper);