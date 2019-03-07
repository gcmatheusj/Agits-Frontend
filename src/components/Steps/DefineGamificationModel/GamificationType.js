import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardActionArea,
  Typography,
  Divider,
  Button,
  Tooltip,
} from '@material-ui/core';

import { styles } from './styles';

import participation from '../../../assets/participation.png';
import performance from '../../../assets/performance.png';
import competition from '../../../assets/competition.png';
import enjoyment from '../../../assets/enjoyment.png';
import exploration from '../../../assets/exploration.png';
import effectiveness from '../../../assets/effectiveness.png';

import story from '../../../assets/story.png';
import rewards from '../../../assets/rewards.png';
import badge from '../../../assets/badge.png';
import levels from '../../../assets/levels.png';
import challenges from '../../../assets/challenges.png';
import leaderboard from '../../../assets/leaderboard.png';
import points from '../../../assets/points.png';
import feedback from '../../../assets/feedback.png';
import avatar from '../../../assets/avatar.png';
import quests from '../../../assets/quests.png';
import bossfight from '../../../assets/boss-fight.png';

const text = {
  participation: {
    title: 'Participação',
    description:
      'Selecione esta opção se você espera que seus alunos sejam participativos em seu curso. Isso ativará os seguintes elementos de jogo no sistema: ',
    names: [
      'Desafios, ',
      'Níveis, ',
      'Ranking, ',
      'História, ',
      'Medalhas, ',
      'Recompensas ',
      'e Pontos.',
    ],
    image: participation,
    checkeds: ['checkedA', 'checkedB', 'checkedC', 'checkedD', 'checkedE', 'checkedF', 'checkedG'],
    imagesbuttons: [challenges, levels, leaderboard, story, badge, rewards, points],
    label: [
      'Puzzles ou outras tarefas que exigem algum esforço para resolver.',
      'Passos definidos na progressão do aluno no conteúdo.',
      'Uma lista de classificação dos participantes, mostrando o desempenho de um determinado aluno em comparação com as maiores pontuações e com seus amigos.',
      'Uma descrição narrativa de uma sequência de eventos usando uma história ou um tema.',
      'Um símbolo visual de uma conquista. Geralmente projetado para se parecer como seus análogos do mundo real, como o emblema dos escoteiros.',
      'Benefícios por alguma ação ou conquista.',
      'Representações numéricas da progressão dos alunos no conteúdo.',
    ],
    titleButton: ['Desafios', 'Níveis', 'Ranking', 'História', 'Medalhas', 'Recompensas', 'Pontos'],
  },
  performance: {
    title: 'Performance',
    description:
      'Selecione essa opção se você espera que seus alunos se concentrem principalmente em seu desempenho de aprendizado. Isso ativará os seguintes elementos de jogo no sistema: ',
    names: [
      'Desafios, ',
      'Feedback, ',
      'Níveis, ',
      'Ranking, ',
      'História, ',
      'Medalhas, ',
      'Recompensas ',
      'e Pontos.',
    ],
    image: performance,
    checkeds: [
      'checkedA',
      'checkedB',
      'checkedC',
      'checkedD',
      'checkedE',
      'checkedF',
      'checkedG',
      'checkedH',
    ],
    imagesbuttons: [challenges, feedback, levels, leaderboard, story, badge, rewards, points],
    label: [
      'Puzzles ou outras tarefas que exigem algum esforço para resolver.',
      'Feedback sobre como o aluno está indo depois de interagir com o sistema educacional adaptativo.',
      'Passos definidos na progressão do aluno no conteúdo.',
      'Uma lista de classificação dos participantes, mostrando o desempenho de um determinado aluno em comparação com as maiores pontuações e com seus amigos.',
      'Uma descrição narrativa de uma sequência de eventos usando uma história ou um tema.',
      'Um símbolo visual de uma conquista. Geralmente projetado para se parecer como seus análogos do mundo real, como o emblema dos escoteiros.',
      'Benefícios por alguma ação ou conquista.',
      'Representações numéricas da progressão dos alunos no conteúdo.',
    ],
    titleButton: [
      'Desafios',
      'Feedback',
      'Níveis',
      'Ranking',
      'História',
      'Medalhas',
      'Recompensas',
      'Pontos',
    ],
  },
  competition: {
    title: 'Competição',
    description:
      'Selecione esta opção se você deseja fornecer competição entre os alunos. Isso ativará os seguintes elementos de jogo no sistema: ',
    names: ['Ranking ', 'e Pontos.'],
    image: competition,
    checkeds: ['checkedA', 'checkedB'],
    imagesbuttons: [leaderboard, points],
    label: [
      'Uma lista de classificação dos participantes, mostrando o desempenho de um determinado aluno em comparação com as maiores pontuações e com seus amigos.',
      'Representações numéricas da progressão dos alunos no conteúdo.',
    ],
    titleButton: ['Ranking', 'Pontos'],
  },
  enjoyment: {
    title: 'Satisfação',
    description:
      'Selecione esta opção se você espera que seus alunos sejam apreciados principalmente pelo tutor enquanto eles estiverem aprendendo. Isso ativará os seguintes elementos de jogo no sistema: ',
    names: ['Missões, ', 'Avatar, ', 'História, ', 'Medalhas, ', 'Recompensas ', 'e Pontos.'],
    image: enjoyment,
    checkeds: ['checkedA', 'checkedB', 'checkedC', 'checkedD', 'checkedE', 'checkedF'],
    imagesbuttons: [quests, avatar, story, badge, rewards, points],
    label: [
      'Uma missão específica ou desafio para os alunos no sistema educacional adaptativo. A tarefa terá usualmente uma narrativa e um objetivo, além de uma recompensa quando finalizada.',
      'Uma representação virtual do personagem do aluno no sistema educacional adaptativo. Este elemento é comum nos jogos de RPG (Role-Playing Game) em que o jogador pode assumir o papel de uma criatura mágica ou um guerreiro medieval.',
      'Uma descrição narrativa de uma sequência de eventos usando uma história ou um tema.',
      'Um símbolo visual de uma conquista. Geralmente projetado para se parecer como seus análogos do mundo real, como o emblema dos escoteiros.',
      'Benefícios por alguma ação ou conquista.',
      'Representações numéricas da progressão dos alunos no conteúdo.',
    ],
    titleButton: ['Missões', 'Avatar', 'História', 'Medalhas', 'Recompensas', 'Pontos'],
  },
  exploration: {
    title: 'Exploração',
    description:
      'Selecione esta opção se você pretende incentivar a exploração do tutor por seus alunos. Isso ativará os seguintes elementos de jogo no sistema: ',
    names: ['Desafios, ', 'Níveis ', 'e Desafio Final.'],
    image: exploration,
    checkeds: ['checkedA', 'checkedB', 'checkedC'],
    imagesbuttons: [challenges, levels, bossfight],
    label: [
      'Puzzles ou outras tarefas que exigem algum esforço para resolver.',
      'Passos definidos na progressão do aluno no conteúdo.',
      'Uma difícil batalha contra um adversário de nível alto, chamado de boss. Geralmente ele marca o fim de um nível ou de um conteúdo do sistema.',
    ],
    titleButton: ['Desafios', 'Níveis', 'Desafio Final'],
  },
  effectiveness: {
    title: 'Eficácia',
    description:
      'Selecione essa opção se você principalmente espera que seus alunos sejam eficazes quando eles estiverem usando o tutor. A ativação desse comportamento ativará os seguintes elementos de jogo no sistema: ',
    names: ['Ranking, ', 'Medalhas ', 'e Pontos.'],
    image: effectiveness,
    checkeds: ['checkedA', 'checkedB', 'checkedC'],
    imagesbuttons: [leaderboard, badge, points],
    label: [
      'Uma lista de classificação dos participantes, mostrando o desempenho de um determinado aluno em comparação com as maiores pontuações e com seus amigos.',
      'Um símbolo visual de uma conquista. Geralmente projetado para se parecer como seus análogos do mundo real, como o emblema dos escoteiros.',
      'Representações numéricas da progressão dos alunos no conteúdo.',
    ],
    titleButton: ['Ranking', 'Medalhas', 'Pontos'],
  },
};

const pChecked = [
  'checkedA',
  'checkedB',
  'checkedC',
  'checkedD',
  'checkedE',
  'checkedF',
  'checkedG',
  'checkedH',
];

const checkedsbuttons = [
  'Puzzles ou outras tarefas que exigem algum esforço para resolver.',
  'Lorem Ipsum B is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum C is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum D is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum E is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum F is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum G is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum H is simply dummy text of the printing and typesetting industry.',
];

class GamificationType extends Component {
  state = {
    checked: '',
  };

  handleChange = name => (event) => {
    const { checked } = this.state;
    return checked === '' || checked !== event.currentTarget.value
      ? this.setState({ [name]: event.currentTarget.value })
      : this.setState({ checked: '' });
  };

  handleSelect = (event) => {
    const { handleSelect } = this.props;
    return handleSelect(event);
  };

  render() {
    const { classes, select, name } = this.props;
    const { checked } = this.state;
    const textprops = text[name];

    return (
      <div className={classes.root}>
        <Card className={select === name ? classes.select : ''}>
          <CardActionArea value={name} onClick={this.handleSelect}>
            <Grid className={classes.gridContent} container>
              <Grid item xs={12}>
                <Grid container direction="row" spacing={16} className={classes.gridCard}>
                  <img className={classes.img} alt="complex" src={text[name].image} />
                  <Grid className={classes.gridText} container item xs={12} sm>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography className={classes.titleCard} gutterBottom variant="h6">
                          {textprops.title}
                        </Typography>
                        <Typography className={classes.textCard} gutterBottom variant="subtitle1">
                          {textprops.description}
                          {textprops.names.map(v => (
                            <strong key={v}>{v}</strong>
                          ))}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
              </Grid>
            </Grid>
          </CardActionArea>
          <div className={classes.gridGame}>
            {textprops.checkeds.map((v, k) => (
              <Tooltip title={textprops.titleButton[k]} placement="top">
                <Button
                  key={(v, k)}
                  value={v}
                  onClick={this.handleChange('checked')}
                  variant={checked === v && 'raised'}
                >
                  <img className={classes.icon} alt="x" src={textprops.imagesbuttons[k]} />
                </Button>
              </Tooltip>
            ))}
            {checkedsbuttons.map((v, k) => (
              <div key={v} className={classes.container}>
                <Collapse className={classes.collapse} in={checked === pChecked[k]}>
                  <Divider />
                  <Grid
                    style={{ paddingTop: 10, paddingBottom: 10 }}
                    container
                    direction="row"
                    alignItems="center"
                  >
                    <Grid item>
                      <img className={classes.paper} src={textprops.imagesbuttons[k]} alt="" />
                    </Grid>
                    <Grid item xs>
                      <Typography>
                        <strong>{textprops.titleButton[k]}</strong>
                        <br />
                        {textprops.label[k]}
                      </Typography>
                    </Grid>
                  </Grid>
                </Collapse>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }
}

GamificationType.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  select: PropTypes.string.isRequired,
};

export default withStyles(styles)(GamificationType);
