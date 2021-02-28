export enum TypesMoeda { 
    GET_MOEDA_REQUEST = 'GET_MOEDA_REQUEST',
    GET_MOEDA_SUCCESS = 'GET_MOEDA_SUCCESS',
    GET_MOEDA_FAILURE = 'GET_MOEDA_FAILURE'
}

export interface Moeda {
    currency_code: string,
    name: string,
    symbol: string,
    country_code: string,
    central_bank: string,
    country_name: string,
    using_countries: string[]

}