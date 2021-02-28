import { action } from 'typesafe-actions'

import { TypesCadastro , TypesLogin , User } from './types'

export const cadastroRequest = (cadastrar: User) => action(TypesCadastro.POST_CADASTRO_REQUEST, cadastrar)
export const cadastroSuccess = (data: string) => action(TypesCadastro.POST_CADASTRO_SUCCESS, data)
export const cadastroFailure = () => action(TypesCadastro.POST_CADASTRO_FAILURE)

export const loginRequest = (login: User) => action(TypesLogin.POST_LOGIN_REQUEST, login)
export const loginSuccess = (data: string) => action(TypesLogin.POST_LOGIN_SUCCESS, data)
export const loginFailure = () => action(TypesLogin.POST_LOGIN_FAILURE)