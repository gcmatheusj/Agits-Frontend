import React, { Fragment } from "react";
import { connect } from "react-redux";
import ActionCreators from "../../../redux/actions/experimento";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Divider,
  Dialog,
  DialogContent,
  DialogActions,
  Button
} from "@material-ui/core";
import PropTypes from "prop-types";

import Header from "../../Header";

import AlertDialogSlide from "./Dialog";

import { styles } from "./styles";
import "./style.css";

import scratch from "../../../assets/scratch2.png";
import template from "../../../assets/template.png";

const opcoesModelo = [
  {
    number: 1,
    adress: "/passo-a-passo",
    img: scratch,
    title: "Criar seu tutor do zero",
    subtitle:
      "Crie um novo tutor passo a passo e explore todos os recursos que trazemos para você."
  },
  {
    number: 2,
    adress: "/usando-modelo",
    img: template,
    title: "Usando modelo",
    subtitle:
      "Economize tempo usando tutor já configurado para uso! Mas fique à vontade para modificar."
  }
];

class EscolhaDoModelo extends React.Component {
  state = {
    open: false,
    redirect: false,
    selectedModel: "",
    adress: "#",
    complete: false,
    respostas: {}
  };

  componentDidMount = () => {
    this.handleTermos();
    !window.sessionStorage.getItem("configPosition") &&
      window.sessionStorage.setItem("configPosition", 1);
  };

  handleTermos = async () => {
    const termosChecked = await window.sessionStorage.getItem("checked");
    if (termosChecked) {
      this.setState({
        complete: true
      });
    }
  };

  handleChange = () => {
    this.setState({
      checked: !this.state.checked
    });
    window.sessionStorage.setItem("checked", this.state.checked);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  handleClickOpen = value => async event => {
    await this.setState({ open: true, adress: value });
    this.props.handleRespostasRequest(this.state.adress);
  };

  handleClose = () => {
    this.setState({ open: false, adress: "" });
  };

  handleChangeDemografico = event => {
    if (event.target.name === "sexualidade") {
      this.setState({
        respostas: {
          ...this.state.respostas,
          sexo: event.target.value
        }
      });
      window.sessionStorage.setItem("resposta1", event.target.value);
    } else if (event.target.name === "idade") {
      this.setState({
        respostas: {
          ...this.state.respostas,
          idade: event.target.value
        }
      });
      window.sessionStorage.setItem("resposta2", event.target.value);
    } else if (event.target.name === "ocupação") {
      this.setState({
        respostas: {
          ...this.state.respostas,
          ocupacao: event.target.value
        }
      });
      window.sessionStorage.setItem("resposta3", event.target.value);
    } else if (event.target.name === "escolaridade") {
      this.setState({
        respostas: {
          ...this.state.respostas,
          escolaridade: event.target.value
        }
      });
      window.sessionStorage.setItem("resposta4", event.target.value);
    } else if (event.target.name === "habilidades") {
      this.setState({
        respostas: {
          ...this.state.respostas,
          habilidades: event.target.value
        }
      });
      window.sessionStorage.setItem("resposta5", event.target.value);
    } else if (event.target.name === "treinamento") {
      this.setState({
        respostas: {
          ...this.state.respostas,
          treinamento: event.target.value
        }
      });
      window.sessionStorage.setItem("resposta6", event.target.value);
    } else if (event.target.name === "usoTecnologiasEducacionais") {
      this.setState({
        respostas: {
          ...this.state.respostas,
          usoTecnologiasEducacionais: event.target.value
        }
      });
      window.sessionStorage.setItem("resposta7", event.target.value);
    }
  };

  next = () => {
    if (this.state.position < 1) {
      this.setState({
        position: this.state.position + 1
      });
    } else {
      this.props.handleDemograficoRequest(this.state.respostas);
      this.setState({
        complete: true
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header title="AGITS">
          <Typography className={classes.title} variant="subtitle1">
            Criar Tutor
          </Typography>
          <Divider />
          <Typography className={classes.subtitle} variant="subtitle1">
            Você pode começar criando um tutor do zero ou usando um modelo.
          </Typography>
          <Grid
            container
            className={classes.container}
            justify="center"
            alignItems="center"
          >
            {opcoesModelo.map((v, k) => {
              const template = (
                <Fragment>
                  <img src={v.img} alt="" className={classes.img} />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      className={classes.titleCard}
                      gutterBottom
                      align="center"
                    >
                      {v.title}
                    </Typography>
                    <Typography
                      className={classes.textCard}
                      variant="body1"
                      gutterBottom
                    >
                      {v.subtitle}
                    </Typography>
                  </CardContent>
                </Fragment>
              );
              return (
                <Card key={k} className={classes.card}>
                  <CardActionArea
                    className={classes.cardAction}
                    value="teste"
                    onClick={this.handleClickOpen(v.adress)}
                  >
                    {template}
                  </CardActionArea>
                  <div className={classes.cardAction}>{template}</div>}
                </Card>
              );
            })}
          </Grid>
          <AlertDialogSlide
            adress={this.state.adress}
            handleClose={this.handleClose}
            open={this.state.open}
          />

          {/* <Dialog id="dialogTermo" open={!this.state.complete} maxWidth='lg'>
            <DialogContent>
              {position === 0 ?
                <Termo checked={checked} handleChange={this.handleChange} next={this.next} /> :
                <Demografico respostas={this.state.respostas} onChangeValue={this.handleChangeDemografico} />
              }
            </DialogContent>
            {
              position === 1 ? (
                <DialogActions>
                  <Button variant='contained' color='primary' disabled={Object.keys(this.state.respostas).length < 7} onClick={this.next}>
                    Pronto
                  </Button>
                </DialogActions>
              ) : (
                  ''
                )
            }
          </Dialog> */}
        </Header>
      </div>
    );
  }
}
EscolhaDoModelo.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  experimento: state.experimento
});

const mapDispatchToProps = dispatch => ({
  handleDemograficoRequest: respostasDemografico =>
    dispatch(ActionCreators.demograficoRequest(respostasDemografico)),
  handleRespostasRequest: questionario =>
    dispatch(ActionCreators.handleRespostasRequest(questionario))
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EscolhaDoModelo)
);
