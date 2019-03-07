import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography, Grid, Card, Paper, CardActionArea,
} from '@material-ui/core';

import img1 from '../../../assets/middle-school.png';
import img2 from '../../../assets/high-school.png';
import img3 from '../../../assets/college.png';
import img4 from '../../../assets/test.png';
import img5 from '../../../assets/other-school.png';

import education1 from '../../../assets/education1.png';
import education2 from '../../../assets/education2.png';
import education3 from '../../../assets/education3.png';
import education4 from '../../../assets/education4.png';
import education5 from '../../../assets/education5.png';

import CollapseDescription from './CollapseDescription';

import { index as styles } from './styles';

// Todas as informações dos arrays abaixo podem ser colocadas em um único array

const education = [education1, education2, education3, education4, education5];

const names = [
  'Ensino Fundamental',
  'Ensino Médio',
  'Universidade',
  'Preparação de Teste',
  'Outro',
];

const imgs = [img1, img2, img3, img4, img5];

const requirements = {
  pedagogical: {
    programa: (
      <Fragment>
        <strong>Programa de Estudos: </strong>
O recurso de Programa de Estudos permite que você
        gerencie o cronograma e os assuntos sobre os quais os alunos aprenderão usando o sistema
        educacional adaptativo.
        <br />
      </Fragment>
    ),
    default: (
      <Fragment>
        Seu tutor personalizado faz uso de técnicas inteligentes atuais que modelam o conhecimento
        do aluno para decidir com precisão quais problemas ele deve dar aos alunos a qualquer
        momento. Nós habilitamos o recurso Syllabus para permitir que você gerencie o cronograma e
        os assuntos sobre os quais seus alunos aprenderão usando o tutor.
        <br />
      </Fragment>
    ),
  },
  evaluation: {
    testeRapido: (
      <Fragment>
        <strong>Teste rápido:</strong>
        {' '}
fornece um teste rápido para que seus alunos avaliem a
        aprendizagem ao utilizarem o sistema educacional adaptativo. Este teste pode ser gerado
        automaticamente pelo sistema sempre que um estudante quiser testar seu conhecimento atual.
        <br />
      </Fragment>
    ),
    testeCustomizado: (
      <Fragment>
        <strong>Teste customizado:</strong>
        {' '}
fornece um teste personalizado para os seus alunos
        avaliarem seus níveis de aprendizagem no sistema educacional adaptativo. Neste teste, o
        aluno será capaz de selecionar quais os assuntos ele deseja testar.
        <br />
      </Fragment>
    ),
    testeColocacao: (
      <Fragment>
        <strong>Teste de Colocação: </strong>
permite que seus alunos avaliem assuntos mais avançados
        que ainda não foram estudados. Se o aluno for aprovado no teste, ele terá seu nível de
        conhecimento atualizado para incluir o aprendizado sobre os assuntos avaliados.
        <br />
      </Fragment>
    ),
  },
  reports: {
    teacher: (
      <Fragment>
        <strong>Relatórios do Professor:</strong>
        {' '}
você será capaz de visualizar relatórios sobre a
        interação, o desempenho de aprendizagem e outros relatórios interessantes sobre os seus
        alunos no sistema educacional adaptativo.
        <br />
      </Fragment>
    ),
    student: (
      <Fragment>
        <strong>Relatórios do Aluno:</strong>
        {' '}
permite que seus alunos visualizem alguns relatórios
        sobre o próprio desempenho nos conteúdos. Estes relatórios incluem informações sobre o
        desempenho da aprendizagem no conteúdo geral ou sobre temas específicos, bem como o
        histórico de testes.
        <br />
      </Fragment>
    ),
  },
};

const details = [
  {
    description:
      'Este modelo fornece recursos que dão controle aos professores no tutor gamificado (por exemplo, definindo o plano de estudos do curso), bem como aprendizado personalizado para os alunos.',
    subtitle: 'Confira abaixo os recursos habilitados para este modelo:',
    pedagogical: (
      <Fragment>
        {' '}
        {requirements.pedagogical.default}
        {' '}
        <br />
      </Fragment>
    ),
    evaluation: (
      <Fragment>
        {' '}
        {requirements.evaluation.testeRapido}
        {' '}
        <br />
      </Fragment>
    ),
    reports: (
      <Fragment>
        {' '}
        {requirements.reports.teacher}
        {' '}
        <br />
      </Fragment>
    ),
  },
  {
    description:
      'Este modelo fornece recursos que dão controle aos professores no tutor gamificado (por exemplo, definindo o plano de estudos do curso), bem como aprendizado personalizado para os alunos.',
    subtitle: 'Confira abaixo os recursos habilitados para este modelo:',
    pedagogical: (
      <Fragment>
        {requirements.pedagogical.default}
        {requirements.pedagogical.programa}
        <br />
      </Fragment>
    ),
    evaluation: (
      <Fragment>
        {requirements.evaluation.testeRapido}
        {requirements.evaluation.testeCustomizado}
        <br />
      </Fragment>
    ),
    reports: (
      <Fragment>
        {requirements.reports.student}
        {requirements.reports.teacher}
        <br />
      </Fragment>
    ),
  },
  {
    description:
      'Este modelo fornece recursos que dão controle aos professores no tutor gamificado (por exemplo, definindo o plano de estudos do curso), bem como aprendizado personalizado para os alunos.',
    subtitle: 'Confira abaixo os recursos habilitados para este modelo:',
    pedagogical: (
      <Fragment>
        {' '}
        {requirements.pedagogical.default}
        {' '}
        <br />
      </Fragment>
    ),
    evaluation: (
      <Fragment>
        {requirements.evaluation.testeRapido}
        {requirements.evaluation.testeCustomizado}
        <br />
      </Fragment>
    ),
    reports: (
      <Fragment>
        {requirements.reports.student}
        {requirements.reports.teacher}
        <br />
      </Fragment>
    ),
  },
  {
    description:
      'Este modelo fornece recursos que dão controle aos professores no tutor gamificado (por exemplo, definindo o plano de estudos do curso), bem como aprendizado personalizado para os alunos.',
    subtitle: 'Confira abaixo os recursos habilitados para este modelo:',
    pedagogical: (
      <Fragment>
        {' '}
        {requirements.pedagogical.default}
        {' '}
        <br />
      </Fragment>
    ),
    evaluation: (
      <Fragment>
        {requirements.evaluation.testeRapido}
        {requirements.evaluation.testeCustomizado}
        {requirements.evaluation.testeColocacao}
        <br />
      </Fragment>
    ),
    reports: (
      <Fragment>
        {requirements.reports.student}
        {requirements.reports.teacher}
        <br />
      </Fragment>
    ),
  },
  {
    description:
      'Este modelo fornece recursos que dão controle aos professores no tutor gamificado (por exemplo, definindo o plano de estudos do curso), bem como aprendizado personalizado para os alunos.',
    subtitle: 'Confira abaixo os recursos habilitados para este modelo:',
    pedagogical: (
      <Fragment>
        {requirements.pedagogical.default}
        {requirements.pedagogical.programa}
        <br />
      </Fragment>
    ),
    evaluation: (
      <Fragment>
        {requirements.evaluation.testeRapido}
        {requirements.evaluation.testeCustomizado}
        {requirements.evaluation.testeColocacao}
        <br />
      </Fragment>
    ),
    reports: (
      <Fragment>
        {requirements.reports.student}
        {requirements.reports.teacher}
        <br />
      </Fragment>
    ),
  },
];

class DefineEducationLevel extends Component {
  state = {
    select: '',
  };

  handleSelect = (event) => {
    this.setState({ select: event.currentTarget.value });
  };

  render() {
    const { classes } = this.props;
    const { select } = this.state;
    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="subtitle1">
          Selecione o contexto de nível educacional no qual você usará o tutor gamificado:
        </Typography>
        <Paper>
          <Grid className={classes.grid} container direction="row">
            {names.map((value, key) => (
              <Card
                key={value}
                className={select === value ? classes.select : classes.button}
              >
                <CardActionArea
                  value={value}
                  onClick={this.handleSelect}
                  className={classes.cardAction}
                >
                  <Grid container justify="center" alignItems="center" direction="row">
                    <div>
                      <img src={imgs[key]} style={{ height: 120 }} alt="" />
                    </div>
                    <Typography variant="body1">{value}</Typography>
                  </Grid>
                </CardActionArea>
              </Card>
            ))}
          </Grid>
          <div>
            {names.map((value, key) => (
              <div key={value}>
                <CollapseDescription
                  checked={select}
                  name={value}
                  img={education[key]}
                  details={details[key]}
                />
              </div>
            ))}
          </div>
        </Paper>
      </div>
    );
  }
}

DefineEducationLevel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefineEducationLevel);
