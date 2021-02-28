import { put } from 'redux-saga/effects'
import { call } from 'typed-redux-saga'

import { responseType } from './types'
import { cadastroSuccess , cadastroFailure , loginFailure , loginSuccess } from './actions'
import CadastroService from '../../../services/cadastro-service'
import LoginService from '../../../services/login-service'

export function* postCadastro(action: any) {
    try {
        const response: responseType = yield call(CadastroService.postCadastro, action.payload)
        yield put(cadastroSuccess(response.data.accessToken))
    } catch (err) {
        console.log(err)
        yield put(cadastroFailure)
    }
}

export function* postLogin(action:any){
    try {
        const response: responseType = yield call(LoginService.postLogin, action.payload)
        yield put(loginSuccess(response.data.accessToken))
        localStorage.setItem("token", response.data.accessToken)
    } catch (err) {
        console.log(err)
        yield put(loginFailure)
    }
}