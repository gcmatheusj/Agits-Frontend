import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';

import Dashboard from './screens/dashboard';
import CriarTutor from './screens/criar-tutor';
import StepperPassoaPasso from './screens/passo-a-passo';
import StepperUsandoModelo from './screens/usando-modelo';
import VisualizarTutores from './screens/visualizar-tutores';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#63a4ff',
      dark: '#004ba0',
    },
    secondary: {
      main: '#ff5722',
      light: '#ff8a50',
      dark: '#c41c00',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const App = () => (
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
        </MuiThemeProvider>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
