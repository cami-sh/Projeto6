import React , { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { postFinancasRequest } from '../../store/ducks/Financas/actions'
import { PostFinanca } from '../../store/ducks/Financas/types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const CadastroFinancas = () => {

    const inputType = useRef<HTMLInputElement>(null)
    const inputAmount = useRef<HTMLInputElement>(null)

    const dispatch = useDispatch()

    const NovaFinanca = () => {
        const requisicao: PostFinanca = {
           type: inputType.current?.value,
           amount: inputType.current?.value 
        }
        dispatch(postFinancasRequest(requisicao))
    }

    return (
        <>
        <TextField label='Tipo' inputRef={inputType} />
        <TextField label='Valor (ex: R$ 40)' inputRef={inputAmount} />
        <Button variant='contained' onClick={NovaFinanca}>Cadastrar Finança</Button>
        </>
    )
}

export default CadastroFinancas