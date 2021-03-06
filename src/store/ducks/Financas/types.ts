export enum TypesFinancas {
    GET_FINANCAS_REQUEST = 'GET_FINANCAS_REQUEST',
    GET_FINANCAS_SUCCESS = 'GET_FINANCAS_SUCCESS',
    GET_FINANCAS_FAILURE = 'GET_FINANCAS_FAILURE',
    POST_FINANCAS_REQUEST = 'POST_FINANCAS_REQUEST',
    POST_FINANCAS_SUCCESS = 'POST_FINANCAS_SUCCESS',
    POST_FINANCAS_FAILURE = 'POST_FINANCAS_FAILURE',
    DELETE_FINANCAS_REQUEST = 'DELETE_FINANCAS_REQUEST',
    DELETE_FINANCAS_SUCCESS = 'DELETE_FINANCAS_SUCCESS',
    DELETE_FINANCAS_FAILURE = 'DELETE_FINANCAS_FAILURE'
}

export interface PostFinanca {
    type: string | undefined,
    amount: string | undefined
}

export interface Financa {
    id: number,
    amount: string,
    type: string
}