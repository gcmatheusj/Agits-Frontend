import React from 'react'
import Header from './Header'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Content from './Content';

const Index = () => {
    return (
        <div>
            <Header />
            <Content/>
        </div>
    )
}

export default Index;