import { Reducer } from 'redux'
import { TypesMoeda } from './types'

const initial_state: any = {
    moeda: {},
    loading: false,
    error: false
}

const reducerMoeda: Reducer = (state = initial_state, action) => {
    switch (action.type) {
        case TypesMoeda.GET_MOEDA_REQUEST:
            return {...state, loading: true}
        case TypesMoeda.GET_MOEDA_SUCCESS:
            return {
                ...state,
                loading: false,
                moeda: action.payload[0]
            }
        case TypesMoeda.GET_MOEDA_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export default reducerMoeda