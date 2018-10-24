import React from "react"
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, Card, CardContent, CardActionArea} from '@material-ui/core'
import PropTypes from 'prop-types'
import scratch from '../../../assets/scratch.png'
import template from '../../../assets/template.png'


const styles = theme => ({
    card: {
        maxWidth: 280,
        textAlign: "center",
        marginTop: 20,
        marginRight: 150,
        padding: 10,
        [theme.breakpoints.down('sm')]: {
            padding: 1,
            margin: 10,
        }    
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem'
        },
    },
    titleCard: {
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem'
        }
    },
    textCard: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8rem'
        }
    },
    root: {
        flexGrow: 1,
    },
})

const Start = props => {
    const { classes } = props
    return (
        <div>
            <Typography className={classes.title} variant="subtitle1">
                Você pode começar selecionando um modelo de tutor ou criando um novo tutor.
            </Typography>
            <Grid container className={classes.root} container justify="center">
                    <Card className={classes.card}>
                    <CardActionArea>
                        <img src={scratch} />
                        <CardContent>
                            <Typography className={classes.titleCard} gutterBottom variant="h6" align="center">
                                Criar seu tutor do zero
                            </Typography>
                            <Typography className={classes.textCard} variant="body1"  gutterBottom>
                                Crie um novo tutor passo a passo e explore todos os recursos que trazemos para você.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className={classes.card}>
                        <CardActionArea>
                            <img src={template} style={{ justifyContent: 'center', alignItems: 'center' }} />
                            <CardContent>
                                <Typography className={classes.titleCard} gutterBottom variant="h6" align="center" gutterBottom>
                                    Usando modelo
                                </Typography>
                                <Typography className={classes.textCard} variant="body1" gutterBottom>
                                    Economize tempo usando um tutor já configurado para uso! Mas fique à vontade para modificar o que você precisar.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Grid>
        </div>
    )
}

Start.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Start)