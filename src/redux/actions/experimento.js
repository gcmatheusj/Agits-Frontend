import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators,
} = createActions({
    demograficoRequest: ['respostas'],
    passoapassoRequest: ['respostas'],
    usandomodeloRequest: ['respostas'],
    duracaoConfig: ['duracao'],
    duracaoConfigUsandoModeloRequest: ['duracao'],

    handleRespostasRequest: ['questionario']
})

export default Creators