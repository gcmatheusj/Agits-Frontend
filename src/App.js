import React from "react"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./components/login"
import RecuperarSenha from "./components/recuperarSenha"
import Cadastro from "./components/cadastro/"
import Dashboard from "./components/dashboard"
import NovoTutor from "./components/novoTutor"
import NewHeader from './components/NewHeader'
import "./App.css"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#445aa4",
      main: "#003175",
      dark: "#000a49"
    }
  }
})

const App = () => 
  <Router>
    <MuiThemeProvider theme={theme}>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/recuperar-senha" component={RecuperarSenha} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/novo-tutor" component={NovoTutor} />
        <Route path="/new-header" component={NewHeader} />
      </div>
    </MuiThemeProvider>
  </Router>


export default App
