import { action } from 'typesafe-actions'
import { TypesMoeda } from './types'

export const getMoedaRequest = (requisicao: string) => action(TypesMoeda.GET_MOEDA_REQUEST, requisicao)
export const getMoedaSuccess = (data: any) => action(TypesMoeda.GET_MOEDA_SUCCESS, data)
export const getMoedaFailure = () => action(TypesMoeda.GET_MOEDA_FAILURE)