import { Reducer } from 'redux'
import { TypesFinancas } from './types'

const initial_state: any = {
    arrayFinancas: [],
    loading: false,
    error: false
}

const reducerFinancas: Reducer = (state = initial_state, action) => {
    switch (action.type) {
        case TypesFinancas.GET_FINANCAS_REQUEST:
            return {...state, loading: true}
        case TypesFinancas.GET_FINANCAS_SUCCESS:
            return {
                ...state,
                arrayFinancas: action.payload,
                loading: false
            }
        case TypesFinancas.GET_FINANCAS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        case TypesFinancas.POST_FINANCAS_REQUEST:
            return {...state, loading: true}
        case TypesFinancas.POST_FINANCAS_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case TypesFinancas.POST_FINANCAS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        case TypesFinancas.DELETE_FINANCAS_REQUEST:
            return {...state, loading: true}
        case TypesFinancas.DELETE_FINANCAS_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case TypesFinancas.DELETE_FINANCAS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export default reducerFinancas