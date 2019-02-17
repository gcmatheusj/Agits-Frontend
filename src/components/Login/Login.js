import React, { Component } from 'react';
import {
  Typography,
  Divider,
  TextField,
  Input,
  Button,
  InputLabel,
  FormControl,
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import axios from 'axios';

import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Criação de novos estados
  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({
      showPassword: !state.showPassword,
    }));
  };

  // Requisição post para api rest
  async handleAuth() {
    const { email, password } = this.state;
    try {
      await axios.post('http://localhost:3001/auth/authenticate', { email, password }).then((res) => {
        console.log('Response Received: ', res);
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { classes } = this.props;
    const { showPassword, password } = this.state;

    return (
      <Grid container>
        <Grid className={classes.newAccountPadding} container>
          <Grid className={classes.newAccount} container justify="flex-end" alignItems="center">
            <Typography className={classes.label} variant="subtitle1" color="inherit">
              Don&apos;t have an account?
            </Typography>
            <Button className={classes.buttonGS} size="medium" variant="contained">
              Get Started
            </Button>
          </Grid>
        </Grid>
        <Grid className={classes.root} container>
          <Grid className={classes.grid} container justify="center" direction="row">
            <Card className={classes.cardContainer}>
              <CardContent className="loginContent">
                <div className={classes.formContainer}>
                  <Typography align="left" variant="h6" className={classes.title}>
                    Sign in to Meu Tutor
                  </Typography>
                  <Typography align="left" variant="subtitle1" className={classes.subheading}>
                    Access your account to use the system
                  </Typography>
                  <Divider />
                  <div>
                    <TextField
                      className={classes.input}
                      id="with-placeholder"
                      label="Enter your email"
                      margin="normal"
                      onChange={this.handleChange('email')}
                    />
                  </div>

                  <FormControl className={classes.input}>
                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
                      id="adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      autoComplete="current-password"
                      margin="normal"
                      onChange={this.handleChange('password')}
                      endAdornment={(
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )}
                    />
                  </FormControl>
                </div>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Grid container justify="flex-end">
                  <Button
                    size="medium"
                  // onClick={this.handleAuth}
                    component={Link}
                    to='/recuperar-senha'
                  >
                    Forgot your password?
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    style={{ backgroundColor: '#ff572f' }}
                    // onClick={this.handleAuth}
                    component={Link}
                    to='/visualizar-tutores'
                  >
                    Access
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(Login);
