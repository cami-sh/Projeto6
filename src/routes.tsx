import { Route , Switch } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Moedas from './pages/Moedas'
import CadastroFinancas from './pages/CadastroFinancas'
import ListaFinancas from './pages/ListaFinancas'

const Routes = () => (
        <Switch>
            <Route path='/'exact component={Login} />
            <Route path='/home' exact component={Home} />
            <Route path='/moedas' exact component={Moedas} />
            <Route path='/cadastro_financas' exact component={CadastroFinancas} />
            <Route path='/financas' exact component={ListaFinancas} />
        </Switch>
)

export default Routes