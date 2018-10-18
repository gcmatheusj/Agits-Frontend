import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Login from './components/login'
import RecuperarSenha from './components/recuperarSenha'
import Cadastro from './components/cadastro/'
import Dashboard from './components/dashboard'
import NovoTutor from './components/novoTutor'
import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#445aa4",
      main: "#003175",
      dark: "#000a49"
    }
  }
})

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Login} />
          <Route path='/recuperar-senha' component={RecuperarSenha} />
          <Route path='/cadastro' component={Cadastro} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/novo-tutor' component={NovoTutor} />
        </div>
      </Router>
    )
  }
}

export default App
