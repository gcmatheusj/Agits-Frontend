import React, { Component } from 'react';
import {
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    height: '90vh',
  },
  grid: {
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
      marginTop: 30,
      marginLeft: 16,
      marginRight: 16,
    },
  },
  loginPadding: {
    paddingLeft: 24,
    paddingRight: 24,
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
  login: {
    minHeight: 64,
    [theme.breakpoints.down('sm')]: {
      minHeight: 56,
    },
  },
  label: {
    marginRight: 20,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  cardContainer: {
    marginLeft: 24,
    marginRight: 24,
    maxWidth: 550,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  title: {
    fontSize: 27,
    marginTop: 8,
    fontWeight: 'bold',
  },
  subheading: {
    marginBottom: 8,
  },
  input: {
    width: '100%',
  },
  textFieldLeft: {
    marginRight: theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      width: '100%',
    },
  },
  textFieldRight: {
    marginLeft: theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      width: '100%',
    },
  },
  inputname: {
    width: '50%',
  },
  inputpassword: {
    width: '50%',
  },
  button: {
    marginTop: 8,
    marginBottom: 16,
  },
  cardActions: {
    marginBottom: 10,
  },
});

class Cadastro extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid className={classes.loginPadding} container>
          <Grid className={classes.login} container justify="flex-end" alignItems="center">
            <Typography variant="subtitle1" className={classes.label}>
              I already have an account!
            </Typography>
            <Button
              className={classes.btngs}
              variant="contained"
              color="primary"
              style={{ backgroundColor: '#ff572f' }}
              onClick={this.handleAuth}
            >
              LOGIN
            </Button>
          </Grid>
        </Grid>
        <Grid className={classes.root} container>
          <Grid className={classes.grid} container justify="center" direction="row">
            <Card className={classes.cardContainer}>
              <CardContent>
                <Typography align="left" variant="h6" className={classes.title}>
                  Create your Account
                </Typography>
                <Typography align="left" variant="subtitle1" className={classes.subheading}>
                  To continue to MeuTutor
                </Typography>
                <Divider />
                <form className={classes.formContainer}>
                  <Grid container>
                    <Grid container item xs={12} sm={6}>
                      <TextField
                        className={classes.textFieldLeft}
                        id="first-name"
                        label="First name"
                        margin="normal"
                      />
                    </Grid>
                    <Grid container item xs={12} sm={6}>
                      <TextField
                        className={classes.textFieldRight}
                        id="last-name"
                        label="Last name"
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    className={classes.input}
                    id="user-name"
                    label="Username"
                    margin="normal"
                  />
                  <TextField
                    className={classes.input}
                    id="email-adress"
                    label="E-mail adress"
                    margin="normal"
                  />
                  <Grid container>
                    <Grid container item xs={12} sm={6}>
                      <TextField
                        className={classes.textFieldLeft}
                        id="cad-password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                      />
                    </Grid>
                    <Grid container item xs={12} sm={6}>
                      <TextField
                        className={classes.textFieldRight}
                        id="confirm-password"
                        label="Confirm password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Grid container justify="flex-end">
                  <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    style={{ backgroundColor: '#ff572f' }}
                  >
                    CREATE
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

Cadastro.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(Cadastro);
