import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { Grid, Typography, TextField } from '@material-ui/core';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const styles = theme => ({
  titleGrid: {
    textAlign: 'left',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  textField: {
    marginTop: 25,
    width: '100%',
  },
});

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
            <Typography className={classes.title} variant="subtitle1">
              Nomeie seu tutor
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
            <TextField
              id="outlined-with-placeholder"
              label="Digite o nome"
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

export default withStyles(styles)(AlertDialogSlide);
