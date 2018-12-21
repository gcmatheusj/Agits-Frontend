import React, { Component } from 'react'
import Collapse from '@material-ui/core/Collapse'
import {
    Grid, Card, CardActionArea, Typography, Divider, Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

import { styles } from './styles'

import participation from '../../../../assets/participation.png'
import performance from '../../../../assets/performance.png'
import competition from '../../../../assets/competition.png'
import enjoyment from '../../../../assets/enjoyment.png'
import exploration from '../../../../assets/exploration.png'
import effectiveness from '../../../../assets/effectiveness.png'

import story from '../../../../assets/story.png'
import rewards from '../../../../assets/rewards.png'
import badge from '../../../../assets/badge.png'
import levels from '../../../../assets/levels.png'
import challenges from '../../../../assets/challenges.png'
import leaderboard from '../../../../assets/leaderboard.png'
import points from '../../../../assets/points.png'
import feedback from '../../../../assets/feedback.png'
import avatar from '../../../../assets/avatar.png'
import quests from '../../../../assets/quests.png'
import bossfight from '../../../../assets/boss-fight.png'

const text = {
    'participation': {
        'title': 'Participation',
        'description': 'Select this option if you expect your students to be participative in your course. This will activate the following game elements in the system: ',
        'names': ['Challenges, ', 'Levels, ', 'Leaderboard, ', 'Story, ', 'Badges, ', 'Rewards ', 'and Points.'],
        'image': participation,
        'checkeds': ['checkedA', 'checkedB', 'checkedC', 'checkedD', 'checkedE', 'checkedF', 'checkedG'],
        'imagesbuttons': [challenges, levels, leaderboard, story, badge, rewards, points]
    },
    'performance': {
        'title': 'Performance',
        'description': 'Select this option if you expect your students to mainly focus on their learning performance. This will activate the following game elements in the system: ',
        'names': ['Challenges, ', 'Feedback, ', 'Levels, ', 'Leaderboard, ', 'Story, ', 'Badges, ', 'Rewards ', 'and Points.'],
        'image': performance,
        'checkeds': ['checkedA', 'checkedB', 'checkedC', 'checkedD', 'checkedE', 'checkedF', 'checkedG', 'checkedH'],
        'imagesbuttons': [challenges, feedback, levels, leaderboard, story, badge, rewards, points]
    },
    'competition': {
        'title': 'Competition',
        'description': 'Select this option if you expect to provide competition between students. This will activate the following game elements in the system: ',
        'names': ['Leaderboard ', 'and Points.'],
        'image': competition,
        'checkeds': ['checkedA', 'checkedB'],
        'imagesbuttons': [leaderboard, points]
    },
    'enjoyment': {
        'title': 'Enjoyment',
        'description': 'Select this option if you expect your students to be mainly enjoyed by the tutor while they are learning. This will activate the following game elements in the system: ',
        'names': ['Quests, ', 'Avatar, ', 'Story, ', 'Badges, ', 'Rewards ', 'and Points.'],
        'image': enjoyment,
        'checkeds': ['checkedA', 'checkedB', 'checkedC', 'checkedD', 'checkedE', 'checkedF'],
        'imagesbuttons': [quests, avatar, story, badge, rewards, points]
    },
    'exploration': {
        'title': 'Exploration',
        'description': 'Select this option if you expect to incentive the exploration of the tutor by your students.This will activate the following game elements in the system: ',
        'names': ['Challenges, ', 'Levels ', 'and Boss Fight.'],
        'image': exploration,
        'checkeds': ['checkedA', 'checkedB', 'checkedC'],
        'imagesbuttons': [challenges, levels, bossfight]
    },
    'effectiveness': {
        'title': 'Effectiveness',
        'description': 'Select this options if you mainly expect your students to be effective when they are using the tutor. Enabling this behavior will activate the following game elements in the system: ',
        'names': ['Leaderboard, ', 'Badges ', 'and Points.'],
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