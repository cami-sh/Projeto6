import { all , takeLatest } from 'typed-redux-saga'

import { TypesCadastro , TypesLogin } from './Cadastro/types'
import { postCadastro , postLogin } from './Cadastro/sagas'
import { TypesMoedas } from './ListaMoeda/types'
import { getListaMoeda } from './ListaMoeda/sagas'
import { TypesMoeda } from './Moeda/types'
import { getMoeda } from './Moeda/sagas'
import { TypesFinancas } from './Financas/types'
import { getFinancas , postFinancas , deleteFinancas } from './Financas/sagas'

export default function* rootSaga(): any {
    return yield all([
        takeLatest(TypesCadastro.POST_CADASTRO_REQUEST, postCadastro),
        takeLatest(TypesLogin.POST_LOGIN_REQUEST, postLogin),
        takeLatest(TypesMoedas.GET_MOEDAS_REQUEST, getListaMoeda),
        takeLatest(TypesMoeda.GET_MOEDA_REQUEST, getMoeda),
        takeLatest(TypesFinancas.GET_FINANCAS_REQUEST, getFinancas),
        takeLatest(TypesFinancas.POST_FINANCAS_REQUEST, postFinancas),
        takeLatest(TypesFinancas.DELETE_FINANCAS_REQUEST, deleteFinancas)
    ])
}