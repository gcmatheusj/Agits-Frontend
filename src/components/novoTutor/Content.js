import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import VerticalLinearStepper from './Stepper';

const styles = {
    pageTitle: {
        margin: '20px',
    },
    divider: {
        color: '#bdbdbd',
        padding: '1px',
    }
};

class novoTutor extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Typography variant='title' style={styles.pageTitle}>
                    My First Gamified Intelligent Tutor
                </Typography>
                <Divider style={styles.divider}/>
                <VerticalLinearStepper/>
            </div>
       )
    }
}

novoTutor.PropTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(novoTutor);