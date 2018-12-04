import React from "react"
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, Card, CardContent, CardActionArea, Button} from '@material-ui/core'
import PropTypes from 'prop-types'

import Header from "../../Header";

import scratch from '../../../assets/scratch.png'
import template from '../../../assets/template.png'

const styles = theme => ({
    root: {
        width: '100%',
      },
    card: {
        maxWidth: 280,
        textAlign: "center",
        marginTop: 100,
        marginRight: 80,
        padding: 10,
        [theme.breakpoints.down('sm')]: {
            padding: 1,
            margin: 10,
        }    
    },
    titleContainer: {
        marginTop: 10, 
        textAlign: 'center',
    },
    title: {
        fontWeight:'bold',
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
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
    container: {
        flexGrow: 1,
    },
    buttonContainer: {
        marginBottom: theme.spacing.unit * 2,
        marginTop: 50,
        [theme.breakpoints.down('sm')]: {
            marginTop: 20
        }
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        justify: 'center'

    },
})

const EscolhaDoModelo = props => {
    const { classes } = props
        return (
            <div className={classes.root}>
                <Header>
                    <Grid className={classes.titleContainer}>
                        <Typography className={classes.title}  variant="subtitle1">
                            Create tutor.
                        </Typography>
                    </Grid>
                    <Grid container className={classes.container} justify="center">
                        <Card className={classes.card}>
                        <CardActionArea>
                            <img src={scratch} alt="" />
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
                                <img src={template} alt="" style={{ width: 160, height: 210 }} />
                                <CardContent>
                                    <Typography className={classes.titleCard} variant="h6" align="center" gutterBottom>
                                        Usando modelo
                                    </Typography>
                                    <Typography className={classes.textCard} variant="body1" gutterBottom>
                                        Economize tempo usando um tutor já configurado para uso! Mas fique à vontade para modificar o que você precisar.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid 
                        container
                        direction="row"   
                        justify="center" 
                        className={classes.buttonContainer}   
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            className={classes.button}
                        >
                            Next
                        </Button>
                    </Grid>
                </Header>
            </div>
        )
    }
    EscolhaDoModelo.propTypes = {
        classes: PropTypes.object.isRequired,
    }

export default withStyles(styles)(EscolhaDoModelo)