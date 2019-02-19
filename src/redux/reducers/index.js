import { combineReducers } from 'redux'

import tutor from './tutor'
import experimento from './experimento'

const rootReducer = combineReducers({ 
    tutor, 
    experimento 
})

export default rootReducer
