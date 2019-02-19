import { createReducer } from 'reduxsauce'
import { Types } from '../actions/experimento'

export const INITIAL_STATE = {
    questionario: null,
    duracaoConfigPassoAPasso: null,
    duracaoConfigUsandoModelo: null,
    demografico: {},
    passoAPasso: {},
    usandoModelo: {}
}

export const demograficoRequest = (state = INITIAL_STATE, action) => ({
    ...state,
    demografico: action.respostas
})

export const passoAPassoRequest = (state = INITIAL_STATE, action) => ({
    ...state,
    passoAPasso: action.respostas
})

export const usandoModeloRequest = (state = INITIAL_STATE, action) => ({
    ...state,
    usandoModelo: action.respostas
})

export const duracaoConfig = (state = INITIAL_STATE, action) => ({
    ...state,
    duracaoConfigPassoAPasso: action.duracao
})

export const duracaoConfigUsandoModeloRequest = (state = INITIAL_STATE, action) => ({
    ...state,
    duracaoConfigUsandoModelo: action.duracao
})

export const handleRespostasRequest = (state = INITIAL_STATE, action) => ({
    ...state,
    questionario: action.questionario
})

export const HANDLERS = {
    [Types.DEMOGRAFICO_REQUEST]: demograficoRequest,
    [Types.PASSOAPASSO_REQUEST]: passoAPassoRequest,
    [Types.USANDOMODELO_REQUEST]: usandoModeloRequest,
    [Types.DURACAO_CONFIG]: duracaoConfig,
    [Types.DURACAO_CONFIG_USANDO_MODELO_REQUEST]: duracaoConfigUsandoModeloRequest,
    [Types.HANDLE_RESPOSTAS_REQUEST]: handleRespostasRequest
}

export default createReducer (INITIAL_STATE, HANDLERS)