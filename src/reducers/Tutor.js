const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const tutor = (state = INITIAL_STATE, action) => {
    if(action.type === 'DEFINE_DOMAIN_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error: false
        }
    }
    if(action.type === 'DEFINE_PEDAGOGICAL_MODEL_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error: false
        }
    }
    if(action.type === 'DEFINE_GAMIFIED_MODEL_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error: false
        }
    }
    if(action.type === 'DEFINE_EVALUATION_METHOD_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error: false
        }
    }
    if(action.type === 'DEFINE_REPORTS_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error: false
        }
    }
    if(action.type === 'CREATE_TUTOR_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error: false
        }
    }

    return state
}

export default tutor