import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Slide,
} from '@material-ui/core';

import styles from './styles';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const AlertDialogSlide = (props) => {
  const {
    classes, adress, handleClose, open,
  } = props;

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <Grid container spacing={16}>
          <Grid item xs={12} className={classes.titleGrid}>
            <Typography variant="h6">Dê um nome para seu tutor</Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
            <TextField
              id="outlined-with-placeholder"
              label="Nome"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <Grid style={{ padding: 24 }} container justify="flex-end">
        <Button onClick={handleClose} style={{ marginRight: 10 }}>
          Cancelar
        </Button>
        <Button
          component={Link}
          to={adress}
          variant="contained"
          onClick={handleClose}
          color="primary"
        >
          Próximo
        </Button>
      </Grid>
    </Dialog>
  );
};

AlertDialogSlide.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  adress: PropTypes.string.isRequired,
};

export default withStyles(styles)(AlertDialogSlide);
