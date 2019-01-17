import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Logo from '../assets/ufal.png'
import Nees from '../assets/nees.png'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {
  Link
} from 'react-router-dom'

const styles = {
  styleImagem: {
    height: "150px",
  },
  styleText: {
    marginBottom: "10px"
  }
}

class Termos extends Component {

  render() {
    const { handleChange, checked } = this.props
    return (
      <div >
          <Typography variant="h5" component="label" align="center" style={styles.styleText}>
            <strong>Autoria de Sistemas Educacionais Adaptativos</strong>
          </Typography>
          <div align="center">
            <Typography variant="h6" component="label" align="center">
              <strong>Termo de Consentimento</strong>
            </Typography>
            <br /><div>
              <img src={Logo} style={styles.styleImagem} alt="" />
              <img src={Nees} style={styles.styleImagem} alt="" />
            </div>
            <br /><Divider />
          </div>
          <Typography variant="subtitle1" gutterBottom align="justify">
            <br /><strong>Leia atentamente o formulário de consentimento abaixo e comece a participar do estudo se você concorda com os termos de consentimento.</strong>
          </Typography>
          <Typography variant="body1" gutterBottom align="justify">
            Você está convidado para participar deste estudo que tem como objetivo investigar as funcionalidades de uma ferramenta de configuração projetada para permitir que professores configurem os seus próprios sistemas educacionais adaptativos. Um sistema educacional adaptativo é um ambiente educacional que individualiza de forma inteligente a recomendação de conteúdos para os alunos considerando pontos fortes e fracos dos mesmos. Por favor, leia o formulário cuidadosamente, e fique à vontade para questionar os pesquisadores sobre qualquer dúvida que você tenha.
                </Typography>
          <Typography variant="body2" gutterBottom align="justify">
            <strong>Título do Estudo:</strong> Autoria de Sistemas Educacionais Adaptativos.
                </Typography>
          <Typography variant="body2" gutterBottom align="justify">
            <strong>Pesquisador: </strong>
            Diego Dermeval, Departamento de Sistemas e Computação, Universidade Federal de Campina Grande, <a rel="nofollow" href="mailto:diegodermeval@copin.ufcg.edu.br">diegodermeval@copin.ufcg.edu.br</a> (Doutor em Ciência da Computação)
                </Typography>
          <Typography variant="body2" gutterBottom align="justify">
            <strong>Finalidade e Procedimento: </strong> O objetivo desta pesquisa é investigar alguns recursos de uma ferramenta de configuração projetada para professores. O estudo visa contribuir para a área de pesquisa em Informática na Educação, particularmente, Sistemas Tutores Inteligentes (STI), Ferramentas de Autoria e Gamificação na Educação. Para alcançar isso, realizamos este estudo para entender como os participantes percebem as decisões de projeto que fizemos usando a nossa ferramenta. O participante deverá interagir com duas versões de telas de configuração de um sistema educacional adaptativo e em seguida irá responder um questionário para cada versão à respeito deste processo de configuração e sobre o protótipo de sistema educacional adaptativo configurado por ele.
                </Typography>
          <Typography variant="body2" gutterBottom align="justify">
            <strong>Pontenciais Benefícios: </strong> Os resultados do estudo podem contribuir para um melhor projeto deste sistema que poderia ser usado pelos professores com a finalidade de personalizar sistemas educacionais adaptativos para suas turmas, com recursos de gamificação, de acordo com suas próprias preferências. Ao usar este software, esperamos aproveitar a participação dos professores no processo de projeto de sistemas educacionais adaptativos, com a finalidade de promover a instrução individualizada para seus alunos, bem como para aumentar a motivação do aluno e engajamento com o uso da gamificação.
                </Typography>
          <Typography variant="body2" gutterBottom align="justify">
            <strong>Potenciais Riscos: </strong> Não há riscos conhecidos neste estudo.
                </Typography>
          <Typography variant="body2" gutterBottom align="justify">
            <strong>Confidencialidade: </strong> Ao participar deste estudo, você reconhece e concorda que suas respostas e contribuições serão registradas anonimamente para fins de análise de dados mais confiáveis.
                </Typography>
          <Typography variant="body2" gutterBottom align="justify">
            <strong>Disseminação dos Resultados: </strong> Os resultados agregados deste estudo aparecerão em artigos publicados em conferências revisadas por pares e revistas científicas nacionais e internacionais.
                </Typography>
          <Typography variant="body2" gutterBottom align="justify">
            <strong>Direito de Retirada: </strong> A participação neste estudo é voluntária, e você pode decidir não participar a qualquer momento, ou optar por não responder a perguntas com as quais não se sinta confortável. As respostas da pesquisa permanecerão anônimas. Uma vez que a pesquisa é anônima, quando é submetida não pode ser removida.
                </Typography>
          <Typography variant="body2" gutterBottom align="justify">
            <strong>Dúvidas: </strong> Se você tiver alguma dúvida sobre o estudo, não hesite em perguntar a qualquer momento; Você também está livre para entrar em contato com os pesquisadores se você tiver dúvidas no futuro. Este estudo não precisa ser submetido ao comitê de ética, pois ele está avaliando apenas recursos para melhorar o software desenvolvido.
                </Typography>
          <Typography variant="body2" gutterBottom align="justify">
            <strong>Acompanhamento: </strong> Se você tiver interesse em saber os resultados deste estudo, você pode contactar os pesquisadores usando as informações de contato fornecidas acima.
                </Typography>
          <Typography variant="body2" gutterBottom align="justify">
            <strong>Consentimento para Participar: </strong> Ao preencher e submeter este questionário, o seu consentimento livre e esclarecido é implícito e indica que você entende as condições acima de participação neste estudo.
                </Typography>
          <br /><Divider />
          <div align="center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  value="checked"
                  color="primary"
                />
              }
              label="Eu li e concordo com os termos de consentimento."
            />
          </div>

      </div>
    )
  }
}

export default Termos
