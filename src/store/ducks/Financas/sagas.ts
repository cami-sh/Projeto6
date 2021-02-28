import { put } from 'redux-saga/effects'
import { call } from 'typed-redux-saga'

import { deleteFinancasFailure, deleteFinancasSuccess, getFinancasFailure , getFinancasSuccess , postFinancasFailure , postFinancasSuccess } from './actions'
import FinancasService from '../../../services/financas-service'
import { AxiosResponse } from 'axios'
import { PostFinanca } from './types'

export function* getFinancas() {
    try {
        const response: AxiosResponse = yield call(FinancasService.getFinancas)
        yield put(getFinancasSuccess(response.data))
    } catch (err) {
        console.log(err)
        yield put(getFinancasFailure)
    }
}

export function* postFinancas(financa: any) {
    try {
        const response: AxiosResponse = yield call(FinancasService.postFinancas, financa.payload)
        yield put(postFinancasSuccess(response))
    } catch (err) {
        console.log(err)
        yield put(postFinancasFailure)
    }
}

export function* deleteFinancas(id: any) {
    try {
        const response: AxiosResponse = yield call(FinancasService.deleteFinancas, id.payload)
        yield put(deleteFinancasSuccess(response))
    } catch (err) {
        console.log(err)
        yield put(deleteFinancasFailure)
    }
}