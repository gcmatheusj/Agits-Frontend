import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import  MenuIcon from '@material-ui/icons/Menu'
import logo from '../../assets/meu-tutor.png'

const styles = {
    marginTop: 10,
    width: 100
}

const Header = props => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#003175'}}>
            <Toolbar>
                <IconButton style={{marginLeft: -12, marginRight: 20,}} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" >
                <img style={styles} src={logo} alt=""></img>
                </Typography>
            </Toolbar>
        </AppBar>
    ) 
}

export default Header