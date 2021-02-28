import apiLocal from './apiLocal'
import { User } from '../store/ducks/Cadastro/types'

const CadastroService = {
    postCadastro: (cadastro: User) => apiLocal.post('/register', cadastro)
}

export default CadastroService