import React, { Component, Fragment } from 'react'
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
})

class ExpansionSubjects extends Component {

    render() {

        const { classes } = this.props

        return (
            <Fragment>
                <ExpansionPanel style={{ marginTop: 10 }} expanded={ this.props.expanded === 'panel4'} onChange={this.props.handleChange('panel4')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                        <Typography className={classes.heading}>Personal data</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                            eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Fragment>
        )
    }
}

export default withStyles(styles)(ExpansionSubjects);