import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFinancasRequest , deleteFinancasRequest } from '../../store/ducks/Financas/actions'
import { Financa } from '../../store/ducks/Financas/types'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const ListaFinancas = () => {

    const dispatch = useDispatch()

    const arrayFinancas: Financa[] = useSelector((state: any) => state.reducerFinancas.arrayFinancas)

    useEffect(() => {
        dispatch(getFinancasRequest())
    }, [dispatch])

    const Deletar = (id: number) => {
        dispatch(deleteFinancasRequest(id))
    }

    return (
        <>
        <p>Finanças</p>
        <List>
            {arrayFinancas !== null &&
                arrayFinancas.map((item: Financa) => (
                    <ListItem key={item.id}>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.amount}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => Deletar(item.id)}>
                                <DeleteRoundedIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))
            }
        </List>
        </>
    )
}

export default ListaFinancas