export enum TypesCadastro {
    POST_CADASTRO_REQUEST = 'POST_CADASTRO_REQUEST',
    POST_CADASTRO_SUCCESS = 'POST_CADASTRO_SUCCESS',
    POST_CADASTRO_FAILURE = 'POST_CADASTRO_FAILURE'
}

export enum TypesLogin {
    POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST',
    POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS',
    POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE'
}

export interface User {
    email: string,
    password: string
}

export interface responseType {
    data: {
        accessToken: string
    }
}

export interface State {
    loading: boolean,
    error: boolean,
    login: false
}