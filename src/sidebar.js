import React, { Component } from 'react'
import './sidebar.css'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Background from './assets/imagem_fundo_filtro.png'

class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{
                padding: "10px",
                width: "30%",
                backgroundImage: "url("+Background+")",
                backgroundSize: "cover",
                height: "700px"
                }}> 
                <div style={{position:"absolute",bottom:"40px"}} >
                    <Button variant="outlined" size="large" color="primary" style={{
                        borderColor: "#ff9b00",
                        color:  "#ff9b00"
                    }}>
                        Learn More
                    </Button>
                </div>
            </div>
        )
    }
}

export default Sidebar