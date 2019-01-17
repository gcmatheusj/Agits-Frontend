import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/lab/Slider'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'

const perguntas = [
    {
        numero: '1',
        pergunta: 'Aprender a configurar o sistema educacional foi fácil.',
        name: 'valorFerramenta1',
        valor: 0
    },
]

class Perguntas extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { valores } = this.props
        return (
            <div>
                {console.log(valores)}
                <Typography variant="display1" component="label">
                    Ferramenta de Configuração<br />
                </Typography>

                {
                    perguntas.map((v) => (
                        <div key={v.valor}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">{v.pergunta}</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores[v.valor]} </FormLabel>
                    </FormControl>
                    <Slider value={valores[v.valor]} min={1} max={7} step={1} onChange={this.props.onChange('valorFerramenta1', v.valor)} />
                </div>
                    ))
                }

            </div>
        )
    }
}
export default Perguntas