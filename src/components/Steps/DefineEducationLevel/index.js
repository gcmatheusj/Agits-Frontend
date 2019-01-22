import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, Paper, CardActionArea } from '@material-ui/core';

import img1 from "../../../assets/middle-school.png"
import img2 from "../../../assets/high-school.png";
import img3 from "../../../assets/college.png";
import img4 from "../../../assets/test.png";
import img5 from "../../../assets/other-school.png";

import education from "../../../assets/education1.png";

import CollapseDescription from './CollapseDescription';

import styles from './styles';

const names = [
  'Ensino Fundamental',
  'Ensino Médio',
  'Universidade',
  'Preparação de Teste',
  'Outro']

const imgs = [img1, img2, img3, img4, img5]

const details = [
  {
    description: "Este modelo fornece recursos que dão controle aos professores no tutor gamificado (por exemplo, definindo o plano de estudos do curso), bem como aprendizado personalizado para os alunos.",
    subtitle: 'Confira abaixo os recursos habilitados para este modelo:',
    pedagogical: <Fragment>Seu tutor personalizado faz uso de técnicas inteligentes atuais que modelam o conhecimento do aluno para decidir com precisão quais problemas ele deve dar aos alunos a qualquer momento. Nós habilitamos o recurso Syllabus para permitir que você gerencie o cronograma e os assuntos sobre os quais seus alunos aprenderão usando o tutor.<br/><br/></Fragment>,
    evaluation: <Fragment><strong>Teste rápido:</strong> fornece um teste rápido para que seus alunos avaliem a aprendizagem ao utilizarem o sistema educacional adaptativo. Este teste pode ser gerado automaticamente pelo sistema sempre que um estudante quiser testar seu conhecimento atual.<br/><br /></Fragment>,
    reports: <Fragment><strong>Relatórios do Professor:</strong> você será capaz de visualizar relatórios sobre a interação, o desempenho de aprendizagem e outros relatórios interessantes sobre os seus alunos no sistema educacional adaptativo.<br/><br /></Fragment>
  },
  {
    description: "Este modelo fornece recursos que dão controle aos professores no tutor gamificado (por exemplo, definindo o plano de estudos do curso), bem como aprendizado personalizado para os alunos.",
    subtitle: 'Confira abaixo os recursos habilitados para este modelo:',
    pedagogical: <Fragment>Seu Sistema Educacional Adaptativo personalizado faz uso de técnicas inteligentes robustas que modelam o conhecimento do aluno para decidir com precisão quais conteúdos e problemas devem ser fornecidos aos alunos no processo de aprendizagem.<br/><strong>Programa de Estudos: </strong>O recurso de Programa de Estudos permite que você gerencie o cronograma e os assuntos sobre os quais os alunos aprenderão usando o sistema educacional adaptativo.<br /><br /></Fragment>,
    evaluation: <Fragment><strong>Teste rápido:</strong> fornece um teste rápido para que seus alunos avaliem a aprendizagem ao utilizarem o sistema educacional adaptativo. Este teste pode ser gerado automaticamente pelo sistema sempre que um estudante quiser testar seu conhecimento atual.
    <br/><strong>Teste customizado:</strong> fornece um teste personalizado para os seus alunos avaliarem seus níveis de aprendizagem no sistema educacional adaptativo. Neste teste, o aluno será capaz de selecionar quais os assuntos ele deseja testar.<br/><br /></Fragment>,
    reports: <Fragment><strong>Relatórios do Aluno:</strong> permite que seus alunos visualizem alguns relatórios sobre o próprio desempenho nos conteúdos. Estes relatórios incluem informações sobre o desempenho da aprendizagem no conteúdo geral ou sobre temas específicos, bem como o histórico de testes.
    <br/><strong>Relatórios do Professor:</strong> você será capaz de visualizar relatórios sobre a interação, o desempenho de aprendizagem e outros relatórios interessantes sobre os seus alunos no sistema educacional adaptativo.<br/><br /></Fragment>
  },
  {
    description: "Este modelo fornece recursos que dão controle aos professores no tutor gamificado (por exemplo, definindo o plano de estudos do curso), bem como aprendizado personalizado para os alunos.",
    subtitle: 'Confira abaixo os recursos habilitados para este modelo:',
    pedagogical: <Fragment>Seu tutor personalizado faz uso de técnicas inteligentes atuais que modelam o conhecimento do aluno para decidir com precisão quais problemas ele deve dar aos alunos a qualquer momento. Nós habilitamos o recurso Syllabus para permitir que você gerencie o cronograma e os assuntos sobre os quais seus alunos aprenderão usando o tutor.<br/><br/></Fragment>,
    evaluation: <Fragment><strong>Teste rápido:</strong> fornece um teste rápido para que seus alunos avaliem a aprendizagem ao utilizarem o sistema educacional adaptativo. Este teste pode ser gerado automaticamente pelo sistema sempre que um estudante quiser testar seu conhecimento atual.
    <br/><strong>Teste customizado:</strong> fornece um teste personalizado para os seus alunos avaliarem seus níveis de aprendizagem no sistema educacional adaptativo. Neste teste, o aluno será capaz de selecionar quais os assuntos ele deseja testar.<br/><br /></Fragment>,
    reports: <Fragment><strong>Relatórios do Aluno:</strong> permite que seus alunos visualizem alguns relatórios sobre o próprio desempenho nos conteúdos. Estes relatórios incluem informações sobre o desempenho da aprendizagem no conteúdo geral ou sobre temas específicos, bem como o histórico de testes.
    <br/><strong>Relatórios do Professor:</strong> você será capaz de visualizar relatórios sobre a interação, o desempenho de aprendizagem e outros relatórios interessantes sobre os seus alunos no sistema educacional adaptativo.<br/><br /></Fragment>
  },
  {
    description: "Este modelo fornece recursos que dão controle aos professores no tutor gamificado (por exemplo, definindo o plano de estudos do curso), bem como aprendizado personalizado para os alunos.",
    subtitle: 'Confira abaixo os recursos habilitados para este modelo:',
    pedagogical: <Fragment>Seu tutor personalizado faz uso de técnicas inteligentes atuais que modelam o conhecimento do aluno para decidir com precisão quais problemas ele deve dar aos alunos a qualquer momento. Nós habilitamos o recurso Syllabus para permitir que você gerencie o cronograma e os assuntos sobre os quais seus alunos aprenderão usando o tutor.<br/><br/></Fragment>,
    evaluation: <Fragment><strong>Teste rápido:</strong> fornece um teste rápido para que seus alunos avaliem a aprendizagem ao utilizarem o sistema educacional adaptativo. Este teste pode ser gerado automaticamente pelo sistema sempre que um estudante quiser testar seu conhecimento atual.
    <br/><strong>Teste customizado:</strong> fornece um teste personalizado para os seus alunos avaliarem seus níveis de aprendizagem no sistema educacional adaptativo. Neste teste, o aluno será capaz de selecionar quais os assuntos ele deseja testar.
    <br/><strong>Teste de Colocação: </strong>permite que seus alunos avaliem assuntos mais avançados que ainda não foram estudados. Se o aluno for aprovado no teste, ele terá seu nível de conhecimento atualizado para incluir o aprendizado sobre os assuntos avaliados.<br/><br /></Fragment>,
    reports: <Fragment><strong>Relatórios do Aluno:</strong> permite que seus alunos visualizem alguns relatórios sobre o próprio desempenho nos conteúdos. Estes relatórios incluem informações sobre o desempenho da aprendizagem no conteúdo geral ou sobre temas específicos, bem como o histórico de testes.
    <br/><strong>Relatórios do Professor:</strong> você será capaz de visualizar relatórios sobre a interação, o desempenho de aprendizagem e outros relatórios interessantes sobre os seus alunos no sistema educacional adaptativo.<br/><br /></Fragment>
  },
  {
    description: "Este modelo fornece recursos que dão controle aos professores no tutor gamificado (por exemplo, definindo o plano de estudos do curso), bem como aprendizado personalizado para os alunos.",
    subtitle: 'Confira abaixo os recursos habilitados para este modelo:',
    pedagogical: <Fragment>Seu Sistema Educacional Adaptativo personalizado faz uso de técnicas inteligentes robustas que modelam o conhecimento do aluno para decidir com precisão quais conteúdos e problemas devem ser fornecidos aos alunos no processo de aprendizagem.<br/><strong>Programa de Estudos: </strong>O recurso de Programa de Estudos permite que você gerencie o cronograma e os assuntos sobre os quais os alunos aprenderão usando o sistema educacional adaptativo.<br /><br /></Fragment>,
    evaluation: <Fragment><strong>Teste rápido:</strong> fornece um teste rápido para que seus alunos avaliem a aprendizagem ao utilizarem o sistema educacional adaptativo. Este teste pode ser gerado automaticamente pelo sistema sempre que um estudante quiser testar seu conhecimento atual.
    <br/><strong>Teste customizado:</strong> fornece um teste personalizado para os seus alunos avaliarem seus níveis de aprendizagem no sistema educacional adaptativo. Neste teste, o aluno será capaz de selecionar quais os assuntos ele deseja testar.
    <br/><strong>Teste de Colocação: </strong>permite que seus alunos avaliem assuntos mais avançados que ainda não foram estudados. Se o aluno for aprovado no teste, ele terá seu nível de conhecimento atualizado para incluir o aprendizado sobre os assuntos avaliados.<br/><br /></Fragment>,
    reports: <Fragment><strong>Relatórios do Aluno:</strong> permite que seus alunos visualizem alguns relatórios sobre o próprio desempenho nos conteúdos. Estes relatórios incluem informações sobre o desempenho da aprendizagem no conteúdo geral ou sobre temas específicos, bem como o histórico de testes.
    <br/><strong>Relatórios do Professor:</strong> você será capaz de visualizar relatórios sobre a interação, o desempenho de aprendizagem e outros relatórios interessantes sobre os seus alunos no sistema educacional adaptativo.<br/><br /></Fragment>
  },
]

class DefineEducationLevel extends Component {
  state = {
    select: '',
  }

  handleSelect = event => {
    this.setState({ select: event.currentTarget.value })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography style={{ marginBottom: 10 }} variant="subtitle1">
          Selecione o contexto de nível educacional no qual você usará o tutor gamificado:
        </Typography>
        <Paper>
          <Grid className={classes.grid} container direction="row">
            {
              names.map((value, key) => {
                return (
                  <Card key={key} className={this.state.select === value ? classes.select : classes.button}>
                    <CardActionArea value={value} onClick={this.handleSelect} className={classes.cardAction}>
                      <Grid container justify="center" alignItems="center" direction="row">
                        <div>
                          <img src={imgs[key]} style={{ height: 120 }} alt="" />
                        </div>
                        <Typography variant="body1">
                          {value}
                        </Typography>
                      </Grid>
                    </CardActionArea>
                  </Card>
                )
              })
            }
          </Grid>
          <div>
            {
              names.map((value, key) => {
                return (
                  <div key={key}>
                    <CollapseDescription
                      checked={this.state.select}
                      name={names[key]}
                      img={education}
                      details={details[key]}
                    />
                  </div>
                )
              })
            }

          </div>
        </Paper>
      </div>
    )
  }
}

DefineEducationLevel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefineEducationLevel);