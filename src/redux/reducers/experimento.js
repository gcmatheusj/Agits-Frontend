import { createReducer } from 'reduxsauce'
import { Types } from '../actions/experimento'

export const INITIAL_STATE = {
    demografico: {},
    passoAPasso: {},
    usandoModelo: {}
}

export const demograficoRequest = (state = INITIAL_STATE, action) => ({
    ...state,
    demografico: action.respostasDemografico
})

export const passoAPassoRequest = (state = INITIAL_STATE, action) => ({
    ...state,
    passoAPasso: action.respostas
})

export const usandoModeloRequest = (state = INITIAL_STATE, action) => ({
    ...state,
    usandoModelo: action.respostas
})

export const HANDLERS = {
    [Types.DEMOGRAFICO_REQUEST]: demograficoRequest,
    [Types.PASSOAPASSO_REQUEST]: passoAPassoRequest,
    [Types.USANDOMODELO_REQUEST]: usandoModeloRequest
}

export default createReducer (INITIAL_STATE, HANDLERS)