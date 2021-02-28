import apiLocal from './apiLocal'
import { User } from '../store/ducks/Cadastro/types'

const LoginService = {
    postLogin: (login: User) => apiLocal.post('/login', login)
}

export default LoginService