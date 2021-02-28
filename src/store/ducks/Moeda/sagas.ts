import { put } from 'redux-saga/effects'
import { call } from 'typed-redux-saga'

import { getMoedaFailure , getMoedaSuccess } from './actions'
import MoedaService from '../../../services/moeda-service'
import { AxiosResponse } from 'axios'

export function* getMoeda(action: any) {
    try {
        const response: AxiosResponse = yield call(MoedaService.getMoeda, action.payload)
        yield put(getMoedaSuccess(Object.values(response.data)))
    } catch (err) {
        console.log(err)
        yield put(getMoedaFailure)
    }
}