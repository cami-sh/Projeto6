import { action } from 'typesafe-actions'

import { TypesFinancas , PostFinanca } from './types'

export const getFinancasRequest = () => action(TypesFinancas.GET_FINANCAS_REQUEST)
export const getFinancasSuccess = (data: any) => action(TypesFinancas.GET_FINANCAS_SUCCESS, data)
export const getFinancasFailure = () => action(TypesFinancas.GET_FINANCAS_FAILURE)

export const postFinancasRequest = (requisicao: PostFinanca) => action(TypesFinancas.POST_FINANCAS_REQUEST, requisicao)
export const postFinancasSuccess = (data: any) => action(TypesFinancas.POST_FINANCAS_SUCCESS, data)
export const postFinancasFailure = () => action(TypesFinancas.POST_FINANCAS_FAILURE)

export const deleteFinancasRequest = (requisicao: number) => action(TypesFinancas.DELETE_FINANCAS_REQUEST, requisicao)
export const deleteFinancasSuccess = (data: any) => action(TypesFinancas.DELETE_FINANCAS_SUCCESS, data)
export const deleteFinancasFailure = () => action(TypesFinancas.DELETE_FINANCAS_FAILURE)