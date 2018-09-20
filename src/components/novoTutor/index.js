import React from 'react'
import Header from './Header'
import Typography from '@material-ui/core/Typography';
import VerticalLinearStepper from './Stepper'

const Index = () => {
    return (
        <div>
            <Header />
            <Typography variant='title'>
                My First Gamified Intelligent Tutor
            </Typography>
            <VerticalLinearStepper/>
        </div>
    )
}

export default Index