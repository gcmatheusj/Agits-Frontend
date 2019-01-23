import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'

const perguntas = [
    {
        pergunta: 'Para mim foi fácil aprender a configurar o sistema educacional.',
        name: 'valorFerramenta1',
        valor: 0
    },
    {
        pergunta: 'É fácil usar o sistema para fazer o que é necessário.',
        name: 'valorFerramenta2',
        valor: 1
    },
    {
        pergunta: 'A interação com a ferramenta não exige muito esforço.',
        name: 'valorFerramenta3',
        valor: 2
    },
    {
        pergunta: 'Eu acho que seria fácil tornar-se habilidoso no uso desta ferramenta de configuração.',
        name: 'valorFerramenta4',
        valor: 3
    },
    {
        pergunta: 'Eu acho essa ferramenta de configuração fácil de usar.',
        name: 'valorFerramenta5',
        valor: 4
    },
    {
        pergunta: 'A ferramenta de configuração é simples e clara.',
        name: 'valorFerramenta6',
        valor: 5
    },
    {
        pergunta: 'Esta ferramenta é flexível para interagir.',
        name: 'valorFerramenta7',
        valor: 6
    },
    {
        pergunta: 'A ferramenta de configuração tem boas funcionalidades.',
        name: 'valorFerramenta8',
        valor: 7
    },
    {
        pergunta: 'Eu sinto que seria intuitivo configurar um sistema educacional usando esta ferramenta.',
        name: 'valorFerramenta9',
        valor: 8
    },
    {
        pergunta: 'Eu sinto que seria fácil de lembrar como realizar tarefas usando esta ferramenta.',
        name: 'valorFerramenta10',
        valor: 9
    },
    {
        pergunta: 'O sistema parece muito complexo para usar.',
        name: 'valorFerramenta11',
        valor: 10
    },
    {
        pergunta: 'A implementação dos componentes e estilos de design parece ter sido bem projetada.',
        name: 'valorFerramenta12',
        valor: 11
    },
    {
        pergunta: 'Usar esta ferramenta de configuração possibilita que eu realize estas tarefas mais lentamente.',
        name: 'valorFerramenta13',
        valor: 12
    },
    {
        pergunta: 'Usar esta ferramenta de configuração diminui meu desempenho.',
        name: 'valorFerramenta14',
        valor: 13
    },
    {
        pergunta: 'Usar esta ferramenta de configuração diminui minha produtividade.',
        name: 'valorFerramenta15',
        valor: 14
    },
    {
        pergunta: 'Usar esta ferramenta de configuração diminui minha eficácia.',
        name: 'valorFerramenta16',
        valor: 15
    },
    {
        pergunta: 'A ferramenta de configuração parece ser original.',
        name: 'valorFerramenta17',
        valor: 16
    },
    {
        pergunta: 'O design da ferramenta parece ser único.',
        name: 'valorFerramenta18',
        valor: 17
    },
    {
        pergunta: 'De maneira geral, configurar o sistema educacional usando esta ferramenta é bom.',
        name: 'valorFerramenta19',
        valor: 18
    },
    {
        pergunta: 'De maneira geral, eu tive uma impressão favorável sobre esta ferramenta de configuração de sistemas educacionais adaptativos.',
        name: 'valorFerramenta20',
        valor: 19
    },
    {
        pergunta: 'De maneira geral, eu tenho sentimentos positivos sobre esta ferramenta de configuração.',
        name: 'valorFerramenta21',
        valor: 20
    },
    {
        pergunta: 'A qualidade da ferramenta de configuração, incluindo funções de ajuda e suporte instrucional, é boa.',
        name: 'valorFerramenta22',
        valor: 21
    },
    {
        pergunta: 'O suporte da ferramenta de configuração para completar a tarefa de criar o sistema adaptativo é bom.',
        name: 'valorFerramenta23',
        valor: 22
    },
    {
        pergunta: 'A ferramenta de configuração provê suporte personalizado (ex.: existem opções que me ajudam especificar minhas preferências).',
        name: 'valorFerramenta24',
        valor: 23
    },
    {
        pergunta: 'Eu teria interesse em continuar usando esta ferramenta de configuração no futuro.',
        name: 'valorFerramenta25',
        valor: 24
    },
    {
        pergunta: 'Eu tenho expectativa em usar esta ferramenta de configuração no futuro.',
        name: 'valorFerramenta26',
        valor: 25
    },
    {
        pergunta: 'Se houver disponibilidade, eu planejo usar esta ferramenta de configuração no futuro.',
        name: 'valorFerramenta27',
        valor: 26
    },
    {
        pergunta: 'Por favor, indique de 1 a 9, a credibilidade da ferramenta de configuração:',
        name: 'valorFerramenta28',
        valor: 27,
        max: 9
    },
    {
        pergunta: 'Por favor, descreva aqui um ponto negativo sobre esta versão da ferramenta de configuração.',
        name: 'valorFerramenta29',
        valor: 28,
        text: true
    },
    {
        pergunta: 'Por favor, descreva aqui um ponto positivo sobre esta versão da ferramenta de configuração.',
        name: 'valorFerramenta30',
        valor: 29,
        text: true
    },
]

class Perguntas extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { valores } = this.props
        return (
            <div>
                <Typography variant="h4" component="label">
                    Ferramenta de Configuração<br />
                </Typography>

                {
                    perguntas.map((v) => (
                        <div key={v.valor}>
                            <br /> <br /> <FormControl component="fieldset">
                                <FormLabel component="legend">{v.pergunta}</FormLabel>
                                <br />
                            </FormControl>
                            <br />
                            {
                                !v.text ?
                                    <RadioGroup
                                        aria-label="gender"
                                        name="escolaridade"
                                        value={'Doutorado'}
                                        onChange={this.props.onChangeValue}
                                    >
                                        <Grid container justify='space-between'>
                                            <FormControlLabel value="Discordo Totalmente" control={<Radio color="primary" />} label="Discordo Totalmente" />
                                            <FormControlLabel value="Discordo" control={<Radio color="primary" />} label="Discordo" />
                                            <FormControlLabel value="Discordo Parcialmente" control={<Radio color="primary" />} label="Discordo Parcialmente" />
                                            <FormControlLabel value="Neutro" control={<Radio color="primary" />} label="Neutro" />
                                            <FormControlLabel value="Concordo Parcialmente" control={<Radio color="primary" />} label="Concordo Parcialmente" />
                                            <FormControlLabel value="Concordo" control={<Radio color="primary" />} label="Concordo" />
                                            <FormControlLabel value="Concordo Totalmente" control={<Radio color="primary" />} label="Concordo Totalmente" />
                                        </Grid>
                                    </RadioGroup>
                                    : <TextField
                                        variant='outlined'
                                        value={valores[v.valor]}
                                        onChange={this.props.onChange(v.name, v.valor, true)}
                                        style={{ width: '100%' }}
                                    />
                            }
                        </div>
                    ))
                }

            </div>
        )
    }
}
export default Perguntas