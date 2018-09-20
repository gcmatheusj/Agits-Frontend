import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

const styles = {
    root: {
        marginTop: '30px',
        marginBottom: '10px'
    },
    expansionPanel: {
        paddingTop: '5px',
        paddingBottom: '5px',
        borderTop: '1px solid #bdbdbd',
        borderRight: '1px solid #bdbdbd',
        borderLeft: '1px solid #bdbdbd',
    },
    expansionPanelFont: {
        fontSize: '16pt'
    },
    expansionPanelDetail: {
        borderRight: '1px solid #bdbdbd',
        borderLeft: '1px solid #bdbdbd',
    },
    label: {
        paddingTop: '30px',
        paddingBottom: '30px',
        fontSize: '14pt',
    },
    select: {
        width: '100%'
    }
}

class DefineDomainAndSubject extends React.Component {

    handleChange() {
        
    }

    render() {
        return (
            <div style={styles.root}>
                <div>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} style={styles.expansionPanel}>
                            <Typography variant="headline" style={styles.expansionPanelFont}>
                                Define Domain
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={styles.expansionPanelDetail}>
                           <form>
                                <FormControl>
                                    {/*TODO*/}
                                </FormControl>
                           </form>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} style={styles.expansionPanel}>
                            <Typography variant="headline" style={styles.expansionPanelFont}>
                                Define Subjects
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={styles.expansionPanelDetail}>
                            <form>
                                <FormControl>
                                    {/*TODO*/}
                                </FormControl>
                            </form>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
                <div>
                    <Typography variant='headline' alignCenter style={styles.label}>
                        Do not worry about creating or modifying your tutor content at this stage.
                        After finalizing the customization of your tutor, you can manage all your 
                        content whenever you want!
                    </Typography>
                </div>
            </div>
        )
    }
}

export default DefineDomainAndSubject