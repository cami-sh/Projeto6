import { Reducer } from 'redux'
import { TypesMoedas } from './types'

const initial_state: any = {
    arrayMoedas: [],
    loading: false,
    error: false
}

const reducerMoedas: Reducer = (state = initial_state, action) => {
    switch (action.type) {
        case TypesMoedas.GET_MOEDAS_REQUEST:
            return {...state, loading: true}
        case TypesMoedas.GET_MOEDAS_SUCCESS:
            return {
                ...state,
                loading: false,
                arrayMoedas: action.payload
            }
        case TypesMoedas.GET_MOEDAS_FAILURE:
            return {
                ...state, 
                loading: false, 
                error: true
            }
        default:
            return state
    }
}

export default reducerMoedas