import { combineReducers } from 'redux'

import reducerCadastro from './Cadastro'
import reducerMoedas from './ListaMoeda'
import reducerMoeda from './Moeda'
import reducerFinancas from './Financas'


const createRootReducer = () => combineReducers ({
    reducerCadastro,
    reducerMoedas,
    reducerMoeda,
    reducerFinancas
})

export default createRootReducer