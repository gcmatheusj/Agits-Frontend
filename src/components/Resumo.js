import React, { Component } from 'react'
import Slider from '@material-ui/lab/Slider'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'

class Perguntas extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { valores } = this.props
        console.log(valores)
        return (
            <div>
                <Typography variant="display1" component="label">
                    Resumo do Tutor<br />
                </Typography>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">O quão fiel o sistema é com relação às escolhas de configuração que você fez:</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valor1} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valor1} min={0} max={10} step={1} onChange={this.props.onChangeSlider1} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">O seu grau de satisfação com o protótipo de sistema educacional adaptativo configurado por você:</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valor2} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valor2} min={0} max={10} step={1} onChange={this.props.onChangeSlider2} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">O quão útil seria prover um sistema como esse para seus alunos:</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valor3} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valor3} min={0} max={10} step={1} onChange={this.props.onChangeSlider3} />
                </div>
            </div>
        )
    }
}
export default Perguntas