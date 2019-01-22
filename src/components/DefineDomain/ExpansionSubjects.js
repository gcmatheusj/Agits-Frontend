import React, { Component } from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Grid,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import PaperSubject from './PaperSubject';

import styles from './styles';

class ExpansionSubjects extends Component {

    render() {

        const { classes } = this.props

        return (
            <div>
                <ExpansionPanel
                    expanded={this.props.expanded === this.props.name}
                    onChange={this.props.handleChange(this.props.name)}
                    style={{ marginBottom: 2 }}
                >
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                        <Typography className={classes.heading} variant='h6'>{this.props.name}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid>
                            <Typography gutterBottom variant="subtitle1" >
                                Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Suco de cevadiss deixa as pessoas mais interessantis.
                            </Typography>
                            <Typography variant="h6">
                                Requirements:
                            </Typography>
                            <PaperSubject/>
                            <PaperSubject/>
                            <PaperSubject/>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

export default withStyles(styles)(ExpansionSubjects);