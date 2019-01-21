import React, { Component } from 'react'
import Collapse from '@material-ui/core/Collapse'
import {
    Grid, Card, CardActionArea, Typography, Divider, Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

import { styles } from './styles'

import participation from '../../../assets/participation.png'
import performance from '../../../assets/performance.png'
import competition from '../../../assets/competition.png'
import enjoyment from '../../../assets/enjoyment.png'
import exploration from '../../../assets/exploration.png'
import effectiveness from '../../../assets/effectiveness.png'

import story from '../../../assets/story.png'
import rewards from '../../../assets/rewards.png'
import badge from '../../../assets/badge.png'
import levels from '../../../assets/levels.png'
import challenges from '../../../assets/challenges.png'
import leaderboard from '../../../assets/leaderboard.png'
import points from '../../../assets/points.png'
import feedback from '../../../assets/feedback.png'
import avatar from '../../../assets/avatar.png'
import quests from '../../../assets/quests.png'
import bossfight from '../../../assets/boss-fight.png'

const text = {
    'participation': {
        'title': 'Participação',
        'description': 'Selecione esta opção se você espera que seus alunos sejam participativos em seu curso. Isso ativará os seguintes elementos de jogo no sistema: ',
        'names': ['Desafios, ', 'Níveis, ', 'Entre os melhores, ', 'História, ', 'Medalhas, ', 'Recompensas ', 'e Pontos.'],
        'image': participation,
        'checkeds': ['checkedA', 'checkedB', 'checkedC', 'checkedD', 'checkedE', 'checkedF', 'checkedG'],
        'imagesbuttons': [challenges, levels, leaderboard, story, badge, rewards, points]
    },
    'performance': {
        'title': 'Performance',
        'description': 'Selecione essa opção se você espera que seus alunos se concentrem principalmente em seu desempenho de aprendizado. Isso ativará os seguintes elementos de jogo no sistema: ',
        'names': ['Desafios, ', 'Feedback, ', 'Níveis, ', 'Entre os melhores, ', 'História, ', 'Medalhas, ', 'Recompensas ', 'e Pontos.'],
        'image': performance,
        'checkeds': ['checkedA', 'checkedB', 'checkedC', 'checkedD', 'checkedE', 'checkedF', 'checkedG', 'checkedH'],
        'imagesbuttons': [challenges, feedback, levels, leaderboard, story, badge, rewards, points]
    },
    'competition': {
        'title': 'Competição',
        'description': 'Selecione esta opção se você deseja fornecer competição entre os alunos. Isso ativará os seguintes elementos de jogo no sistema: ',
        'names': ['Entre os melhores ', 'e Pontos.'],
        'image': competition,
        'checkeds': ['checkedA', 'checkedB'],
        'imagesbuttons': [leaderboard, points]
    },
    'enjoyment': {
        'title': 'Satisfação',
        'description': 'Selecione esta opção se você espera que seus alunos sejam apreciados principalmente pelo tutor enquanto eles estiverem aprendendo. Isso ativará os seguintes elementos de jogo no sistema: ',
        'names': ['Missões, ', 'Avatar, ', 'História, ', 'Medalhas, ', 'Recompensas ', 'e Pontos.'],
        'image': enjoyment,
        'checkeds': ['checkedA', 'checkedB', 'checkedC', 'checkedD', 'checkedE', 'checkedF'],
        'imagesbuttons': [quests, avatar, story, badge, rewards, points]
    },
    'exploration': {
        'title': 'Exploração',
        'description': 'Selecione esta opção se você pretende incentivar a exploração do tutor por seus alunos. Isso ativará os seguintes elementos de jogo no sistema: ',
        'names': ['Desafios, ', 'Níveis ', 'e Desafio Final.'],
        'image': exploration,
        'checkeds': ['checkedA', 'checkedB', 'checkedC'],
        'imagesbuttons': [challenges, levels, bossfight]
    },
    'effectiveness': {
        'title': 'Eficácia',
        'description': 'Selecione essa opção se você principalmente espera que seus alunos sejam eficazes quando eles estiverem usando o tutor. A ativação desse comportamento ativará os seguintes elementos de jogo no sistema: ',
        'names': ['Entre os melhores, ', 'Medalhas ', 'e Pontos.'],
        'image': effectiveness,
        'checkeds': ['checkedA', 'checkedB', 'checkedC'],
        'imagesbuttons': [leaderboard, badge, points]
    }
}

const pChecked = ["checkedA", "checkedB", "checkedC", "checkedD", "checkedE", "checkedF", "checkedG", "checkedH"]

const checkedsbuttons = [
    'Lorem Ipsum A is simply dummy text of the printing and typesetting industry.',
    'Lorem Ipsum B is simply dummy text of the printing and typesetting industry.',
    'Lorem Ipsum C is simply dummy text of the printing and typesetting industry.',
    'Lorem Ipsum D is simply dummy text of the printing and typesetting industry.',
    'Lorem Ipsum E is simply dummy text of the printing and typesetting industry.',
    'Lorem Ipsum F is simply dummy text of the printing and typesetting industry.',
    'Lorem Ipsum G is simply dummy text of the printing and typesetting industry.',
    'Lorem Ipsum H is simply dummy text of the printing and typesetting industry.'
]

class GamificationType extends Component {

    state = {
        checked: '',
        select: '',
    };

    handleChange = name => event => {
        this.state.checked === '' || this.state.checked !== event.currentTarget.value ?
            this.setState({ [name]: event.currentTarget.value }) :
            this.setState({ checked: '' })
    };

    handleSelect = (event) => {
        this.props.handleSelect(event)
    }

    render() {
        const { classes } = this.props;
        const { checked } = this.state;
        const textprops = text[this.props.name];

        return (
            <div className={classes.root}>
                <Card className={ this.props.select === this.props.name ? classes.select : '' }>
                    <CardActionArea value={this.props.name} onClick={this.handleSelect}>
                        <Grid className={classes.gridContent} container>
                            <Grid item xs={12}>
                                <Grid container direction="row" spacing={16} className={classes.gridCard}>
                                    <img className={classes.img} alt="complex" src={(text[this.props.name].image)} />
                                    <Grid className={classes.gridText} container item xs={12} sm>
                                        <Grid item xs container direction="column" spacing={16}>
                                            <Grid item xs>
                                                <Typography className={classes.titleCard} gutterBottom variant="h6">
                                                    {(textprops.title)}
                                                </Typography>
                                                <Typography className={classes.textCard} gutterBottom variant="subtitle1">
                                                    {(textprops.description)}
                                                    {((textprops.names).map((v, k) => <strong key={k}>{v}</strong>))}
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
                        {
                            ((textprops.checkeds).map((v, k) => {
                                return (
                                    <Button key={k} value={v} onClick={this.handleChange('checked')}>
                                        <img className={classes.icon} alt="x" src={(textprops.imagesbuttons)[k]} />
                                    </Button>
                                )
                            }))
                        }
                        {checkedsbuttons.map((v, k) => {
                            return (
                                <div key={k} className={classes.container}>
                                    <Collapse className={classes.collapse} in={checked === pChecked[k]} >
                                        <Divider />
                                        <Grid container direction="row" alignItems="center">
                                            <img className={classes.paper} src={(textprops.imagesbuttons)[k]} alt="" />
                                            <Typography>
                                                {v}
                                            </Typography>
                                        </Grid>
                                    </Collapse>
                                </div>
                            )
                        })}
                    </div>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(GamificationType)