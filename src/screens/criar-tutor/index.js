import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid, Typography, Card, CardContent, CardActionArea, Divider,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import AlertDialogSlide from '../../components/Dialog';

import { styles } from './styles';

import scratch from '../../assets/scratch2.png';
import template from '../../assets/template.png';

const opcoesModelo = [
  {
    number: 1,
    adress: '/passo-a-passo',
    img: scratch,
    title: 'Criar seu tutor do zero',
    subtitle:
      'Crie um novo tutor passo a passo e explore todos os recursos que trazemos para você.',
  },
  {
    number: 2,
    adress: '/usando-modelo',
    img: template,
    title: 'Usando modelo',
    subtitle:
      'Economize tempo usando tutor já configurado para uso! Mas fique à vontade para modificar.',
  },
];

class EscolhaDoModelo extends React.Component {
  state = {
    open: false,
    adress: '#',
  };

  handleClickOpen = value => () => {
    this.setState({ open: true, adress: value });
  };

  handleClose = () => {
    this.setState({ open: false, adress: '' });
  };

  render() {
    const { open, adress } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="subtitle1">
          Criar Tutor
        </Typography>
        <Divider />
        <Typography className={classes.subtitle} variant="subtitle1">
          Você pode começar criando um tutor do zero ou usando um modelo.
        </Typography>
        <Grid container className={classes.container} justify="center" alignItems="center">
          {opcoesModelo.map((v) => {
            const templateCard = (
              <Fragment>
                <img src={v.img} alt="" className={classes.img} />
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.titleCard} gutterBottom align="center">
                    {v.title}
                  </Typography>
                  <Typography className={classes.textCard} variant="body1" gutterBottom>
                    {v.subtitle}
                  </Typography>
                </CardContent>
              </Fragment>
            );
            return (
              <Card key={v.number} className={classes.card}>
                <CardActionArea
                  className={classes.cardAction}
                  value="teste"
                  onClick={this.handleClickOpen(v.adress)}
                >
                  {templateCard}
                </CardActionArea>
                <div className={classes.cardAction}>{template}</div>
              </Card>
            );
          })}
        </Grid>
        <AlertDialogSlide adress={adress} handleClose={this.handleClose} open={open} />
      </div>
    );
  }
}
EscolhaDoModelo.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  experimento: state.experimento,
});

export default withStyles(styles)(connect(mapStateToProps)(EscolhaDoModelo));
