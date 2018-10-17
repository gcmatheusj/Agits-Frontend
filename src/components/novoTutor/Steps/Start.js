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
        margin: 20,
        padding: 10,
        //background: "#757575"
    },
    root: {
        flexGrow: 1,
    },
})

const Start = props => {
    const { classes } = props
    return (
        <div>
            <Typography variant="subheading">
                Você pode começar selecionando um modelo de tutor ou criando um novo tutor.
            </Typography>
            <Grid container className={classes.root} container justify="center">
                    <Card className={classes.card}>
                    <CardActionArea>
                        <img src={scratch} />
                        <CardContent>
                            <Typography gutterBottom variant="title" component="h2" align="justify">
                                Criar seu tutor a partir do zero
                            </Typography>
                            <Typography align="justify">
                                Crie um novo tutor passo a passo e explore todos os recursos que trazemos para você.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>

                <CardActionArea>
                    <Card className={classes.card}>
                        <img src={template} style={{ justifyContent: 'center', alignItems: 'center' }} />
                        <CardContent>
                            <Typography gutterBottom variant="title" component="h2" align="justify">
                                Usando modelo
                            </Typography>
                            <Typography align="justify">
                                Economize tempo usando um tutor já configurado para uso! Mas fique à vontade para modificar o que você precisar.
                            </Typography>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Grid>
        </div>
    )
}

Start.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Start)