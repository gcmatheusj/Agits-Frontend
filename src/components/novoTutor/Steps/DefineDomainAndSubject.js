import React, { Component } from 'react'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, FormControl } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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

/*  (@gustavodlima)
    Essa parte vai ficar mais interessante quando tiver o back implementado pra que a busca pelo conteúdo seja o que
    tiver armazenado no DB. Por hora, é só um conteúdo estático.
*/

let domainArray = [
    'Basic math for 9th graders students'
];

let subjectArray = [

];

class DefineDomainAndSubject extends Component {

    state = {
        domainArray: [],
        subjectArray: []
    }

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