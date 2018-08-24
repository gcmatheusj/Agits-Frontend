import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

class Login extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Typography variant="display1">Login!</Typography>
            </div>
        )
    }
}

export default Login