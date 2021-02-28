import React , { useRef } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import { cadastroRequest , loginRequest } from '../../store/ducks/Cadastro/actions'
import { Redirect } from 'react-router-dom'

const Login = () => {

    const cadastrarEmail = useRef<HTMLInputElement>(null)
    const cadastrarSenha = useRef<HTMLInputElement>(null)

    const loginEmail = useRef<HTMLInputElement>(null)
    const loginSenha = useRef<HTMLInputElement>(null)

    const dispatch = useDispatch()

    const logado = useSelector((state:any) => state.reducerCadastro.login)

    const Cadastro = () => {
        const cadastrar: any = {
            email: cadastrarEmail.current?.value,
            password: cadastrarSenha.current?.value
        }
        dispatch(cadastroRequest(cadastrar))
    }

    const Login = () => {
        const login: any = {
            email: loginEmail.current?.value,
            password: loginSenha.current?.value
        }
        dispatch(loginRequest(login))
    }

    return (
        <>
        <h3>Cadastro</h3>
        <TextField label='E-mail' inputRef={cadastrarEmail} />
        <TextField label='Senha' inputRef={cadastrarSenha} />
        <Button variant='contained' onClick={Cadastro}>Cadastrar</Button>

        <h3>Login</h3>
        <TextField label='E-mail' inputRef={loginEmail} />
        <TextField label='Senha' inputRef={loginSenha} />
        <Button variant='contained' onClick={Login}>Login</Button>
        {logado && <Redirect to='/home' />}

        </>
    )
}

export default Login