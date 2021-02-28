import apiLocal from './apiLocal'
import { PostFinanca } from '../store/ducks/Financas/types'

const FinancasService = {
    getFinancas: () => apiLocal.get('/finance', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        } 
    }),
    postFinancas: (financa: PostFinanca) => apiLocal.post('/finance', financa, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        } 
    }),
    deleteFinancas: (id: number) => apiLocal.delete(`/finance/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        } 
    })
}

export default FinancasService