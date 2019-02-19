import React, { Component, Fragment } from "react";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";

import Dashboard from "./screens/dashboard";

import CriarTutor from "./screens/criar-tutor";
import StepperPassoaPasso from "./screens/passo-a-passo";
import StepperUsandoModelo from "./screens/usando-modelo";
import VisualizarTutores from "./screens/visualizar-tutores";

// import Questionario from './components/Questionario'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0"
    },
    secondary: {
      main: "#ff5722",
      light: "#ff8a50",
      dark: "#c41c00"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default class App extends Component {
  // state = {
  //   creation: null
  // }

  // componentDidMount = () => {
  //   !window.sessionStorage.getItem('modelConfig') &&
  //     window.sessionStorage.setItem('modelConfig', Math.floor((Math.random() * 2) + 1))
  // }

  // handleChangeModelConfig = () => {
  //   const modelConfig = Number(window.sessionStorage.getItem('modelConfig'))
  //   window.sessionStorage.setItem('modelConfig', modelConfig === 1 ? 2 : 1)
  // }

  // handleChangeConfigPosition() {
  //   const configPosition = Number(window.sessionStorage.getItem('configPosition'))
  //   window.sessionStorage.setItem('configPosition', configPosition+1)
  // }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
              <Route exact path="/" component={CriarTutor} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/passo-a-passo" component={StepperPassoaPasso} />
              <Route path="/usando-modelo" component={StepperUsandoModelo} />
              <Route path="/visualizar-tutores" component={VisualizarTutores} />
              {/* <Route exact path="/questionario" render={props => (
                  <Questionario
                    {...props}
                    configPosition = {Number(window.sessionStorage.getItem('configPosition'))}
                    modelConfig = {Number(window.sessionStorage.getItem('modelConfig'))}
                    changePosition={this.handleChangeConfigPosition}
                    changeModel={this.handleChangeModelConfig}
                  />
                )} /> */}
            </MuiThemeProvider>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}
