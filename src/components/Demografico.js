import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        display: 'flex',
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
})

class Demografico extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    render() {
        const { classes, respostas } = this.props
        return (
            <form onSubmit={(event) => this.props.onSubmitForm(event)}>
                <Typography variant="h5" component="label" >
                    Sobre Você
                </Typography>
                <br /><div>
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Inicialmente selecione seu gênero.</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="sexualidade"
                            className={classes.group}
                            value={respostas.resposta1}
                            onChange={this.props.onChangeValue}
                        >
                            <FormControlLabel value="Feminino" control={<Radio color="primary" />} label="Feminino" />
                            <FormControlLabel value="Masculino" control={<Radio color="primary" />} label="Masculino" />
                            <FormControlLabel value="Prefiro não responder" control={<Radio color="primary" />} label="Prefiro não responder" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br /><div>
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Por favor, informe sua idade.</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="idade"
                            value={respostas.resposta2}
                            onChange={this.props.onChangeValue}
                        >
                            <FormControlLabel value="18 a 25 anos" control={<Radio color="primary" />} label="18 a 25 anos" />
                            <FormControlLabel value="26 a 40 anos" control={<Radio color="primary" />} label="26 a 40 anos" />
                            <FormControlLabel value="40 a 65 anos" control={<Radio color="primary" />} label="40 a 65 anos" />
                            <FormControlLabel value="Mais de 65 anos
                            " control={<Radio color="primary" />} label="Mais de 65 anos
                            " />
                            <FormControlLabel value="Prefiro não responder" control={<Radio color="primary" />} label="Prefiro não responder" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br /><div>
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Ocupação.</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="ocupação"
                            value={respostas.resposta3}
                            onChange={this.props.onChangeValue}
                        >
                            <FormControlLabel value="Estudante" control={<Radio color="primary" />} label="Estudante" />
                            <FormControlLabel value="Professor" control={<Radio color="primary" />} label="Professor" />
                            <FormControlLabel value="Outra" control={<Radio color="primary" />} label="Outra" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br /><div> 
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Qual o maior nível de educação que você completou?</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="escolaridade"
                            value={respostas.resposta4}
                            onChange={this.props.onChangeValue}
                        >
                            <FormControlLabel value="Ensino Fundamental" control={<Radio color="primary" />} label="Ensino Fundamental" />
                            <FormControlLabel value="Ensino Médio" control={<Radio color="primary" />} label="Ensino Médio" />
                            <FormControlLabel value="Ensino Técnico" control={<Radio color="primary" />} label="Ensino Técnico" />
                            <FormControlLabel value="Ensino Superior" control={<Radio color="primary" />} label="Ensino Superior" />
                            <FormControlLabel value="Mestrado" control={<Radio color="primary" />} label="Mestrado" />
                            <FormControlLabel value="Doutorado" control={<Radio color="primary" />} label="Doutorado" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br /><div>
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Como você classifica suas habilidades com a informática?</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="habilidades"
                            value={respostas.resposta5}
                            onChange={this.props.onChangeValue}
                        >
                            <FormControlLabel value="Nenhuma habilidade" control={<Radio color="primary" />} label="Nenhuma habilidade" />
                            <FormControlLabel value="Usuario iniciante" control={<Radio color="primary" />} label="Usuário iniciante" />
                            <FormControlLabel value="Usuario intermediario" control={<Radio color="primary" />} label="Usuário intermediário" />
                            <FormControlLabel value="Usuario avancado
                            " control={<Radio color="primary" />} label="Usuário avançado
                            " />
                        </RadioGroup>
                    </FormControl>
                </div>        
                <br /><div>
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Você recebeu, durante sua formação, treinamento formal para o uso de tecnologias educacionais de informática?</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="treinamento"
                            value={respostas.resposta6}
                            onChange={this.props.onChangeValue}
                        >
                            <FormControlLabel value="Sim" control={<Radio color="primary" />} label="Sim" />
                            <FormControlLabel value="Não" control={<Radio color="primary" />} label="Não" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br /><div>
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Você se considera apto para o uso de tecnologias educacionais de informática?</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="usoTecnologiasEducacionais"
                            value={respostas.resposta7}
                            onChange={this.props.onChangeValue}
                        >
                            <FormControlLabel value="Sim" control={<Radio color="primary" />} label="Sim" />
                            <FormControlLabel value="Não" control={<Radio color="primary" />} label="Não" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </form>
        )
    }
}

Demografico.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Demografico)