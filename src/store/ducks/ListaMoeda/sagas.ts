import { put } from 'redux-saga/effects'
import { call } from 'typed-redux-saga'

import { getMoedasFailure , getMoedasSuccess } from './actions'
import MoedaService from '../../../services/moeda-service'
import { AxiosResponse } from 'axios'

export function* getListaMoeda() {
    try {
        const response: AxiosResponse = yield call(MoedaService.getListaMoeda)
        yield put(getMoedasSuccess(Object.keys(response.data)))
    } catch (err) {
        console.log(err)
        yield put(getMoedasFailure)
    }
}

