import { action } from 'typesafe-actions'

import { TypesMoedas } from './types'

export const getMoedasRequest = () => action(TypesMoedas.GET_MOEDAS_REQUEST)
export const getMoedasSuccess = (data: string[]) => action(TypesMoedas.GET_MOEDAS_SUCCESS, data)
export const getMoedasFailure = () => action(TypesMoedas.GET_MOEDAS_FAILURE)