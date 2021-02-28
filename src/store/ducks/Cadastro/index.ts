import { Reducer } from 'redux'
import { TypesCadastro , State , TypesLogin } from './types'

const initial_state: State = {
    loading: false,
    error: false,
    login: false
}

const reducerCadastro: Reducer = (state = initial_state, action) => {
    switch (action.type) {
        case TypesCadastro.POST_CADASTRO_REQUEST:
            return {...state, loading: true}
        case TypesCadastro.POST_CADASTRO_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case TypesCadastro.POST_CADASTRO_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        case TypesLogin.POST_LOGIN_REQUEST:
            return {...state, loading: true}
        case TypesLogin.POST_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                login: true
            }
        case TypesLogin.POST_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export default reducerCadastro