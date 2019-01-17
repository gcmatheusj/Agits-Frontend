import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/lab/Slider'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'

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
                <Typography variant="display1" component="label">
                    Ferramenta de Configuração<br />
                </Typography>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Aprender a configurar o sistema educacional foi fácil.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta1} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta1} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta1} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Eu acho que seria fácil usar esta ferramenta de configuração para fazer o que eu preciso fazer.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta2} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta2} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta2} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">A interação com esta ferramenta de configuração não exige muito esforço.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta3} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta3} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta3} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Eu acho que seria fácil tornar-se habilidoso no uso desta ferramenta de configuração.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta4} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta4} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta4} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Eu acho que esta ferramenta de configuração é fácil de usar.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta5} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta5} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta5} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">A ferramenta de configuração é simples.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta6} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta6} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta6} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">A ferramenta de configuração é bem projetada para empregar diversos componentes e estilos de design.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta7} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta7} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta7} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">A quantidade de informação apresentada na ferramenta de configuração é bem projetada.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta8} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta8} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta8} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">A ferramenta de configuração é clara e compreensível. </FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta9} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta9} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta9} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">A ferramenta de configuração é flexível para interagir. </FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta10} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta10} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta10} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">A ferramenta de configuração tem boas funcionalidades. </FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta11} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta11} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta11} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Eu sinto que seria intuitivo configurar um sistema educacional usando esta ferramenta.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta12} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta12} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta12} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Eu sinto que seria fácil de lembrar como realizar tarefas usando esta ferramenta.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta13} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta13} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta13} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Usar esta ferramenta de configuração possibilita que eu realize estas tarefas mais lentamente.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta14} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta14} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta14} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Usar esta ferramenta de configuração diminui meu desempenho.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta15} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta15} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta15} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Usar esta ferramenta de configuração diminui minha produtividade.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta16} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta16} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta16} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Usar esta ferramenta de configuração diminui minha eficácia. </FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta17} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta17} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta17} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">De maneira geral, configurar o sistema educacional usando esta ferramenta é bom.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta18} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta18} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta18} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">De maneira geral, eu tive uma impressão favorável sobre esta ferramenta de configuração de sistemas educacionais adaptativos.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta19} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta19} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta19} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">De maneira geral, eu tenho sentimentos positivos sobre esta ferramenta de configuração.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta20} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta20} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta20} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Eu teria interesse em continuar usando esta ferramenta de configuração no futuro.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta21} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta21} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta21} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Eu tenho expectativa em usar esta ferramenta de configuração no futuro.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta22} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta22} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta22} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Se houver disponibilidade, eu planejo usar esta ferramenta de configuração no futuro.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta23} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta23} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta23} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">A qualidade da ferramenta de configuração, incluindo funções de ajuda e suporte instrucional, é boa.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta24} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta24} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta24} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">O suporte da ferramenta de configuração para completar a tarefa de criar o sistema adaptativo é bom.</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta25} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta25} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta25} />
                </div>
                <br /><div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">A ferramenta de configuração provê suporte personalizado (ex.: existem opções que me ajudam especificar minhas preferências).</FormLabel>
                        <br /><FormLabel component="legend"> Avaliação: {valores.valorFerramenta26} </FormLabel>
                    </FormControl>
                    <Slider value={valores.valorFerramenta26} min={1} max={7} step={1} onChange={this.props.onChangeFerramenta26} />
                </div>
            </div>
        )
    }
}
export default Perguntas