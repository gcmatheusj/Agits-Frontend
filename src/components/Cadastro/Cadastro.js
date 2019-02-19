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

import styles from './styles';


class Cadastro extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid className={classes.loginPadding} container>
          <Grid className={classes.login} container justify="flex-end" alignItems="center">
            <Typography variant="subtitle1" className={classes.label}>I already have an account!</Typography>
            <Button className={classes.btngs} variant="contained" color="primary" style={{ backgroundColor: '#ff572f' }} onClick={this.handleAuth}>LOGIN</Button>
          </Grid>
        </Grid>
        <Grid className={classes.root} container>
          <Grid className={classes.grid} container justify="center" direction="row">
            <Card className={classes.cardContainer}>
              <CardContent>
                <Typography align="left" variant="h6" className={classes.title}>Create your Account</Typography>
                <Typography align="left" variant="subtitle1" className={classes.subheading}>To continue to MeuTutor</Typography>
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
                  <Button variant="contained" size="medium" color="primary" style={{ backgroundColor: '#ff572f' }}>CREATE</Button>
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
