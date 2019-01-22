import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators,
} = createActions({
    demograficoRequest: ['respostasDemografico'],
    passoapassoRequest: ['respostas'],
    usandomodeloRequest: ['respostas']
})

export default Creators