import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoedasRequest } from '../../store/ducks/ListaMoeda/actions'
import { getMoedaRequest } from '../../store/ducks/Moeda/actions'
import { Moeda } from '../../store/ducks/Moeda/types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Moedas = () => {

    const dispatch = useDispatch();

    const arrayMoedas = useSelector((state:any) => state.reducerMoedas.arrayMoedas)
    const moeda: Moeda = useSelector((state:any) => state.reducerMoeda.moeda)

    useEffect(() => {
        dispatch(getMoedasRequest())
    }, [dispatch])

    const ShowMoeda = (item: string) => {
        dispatch(getMoedaRequest(item.toLowerCase()))
    }

    return (
        <>
            <Grid container spacing={3}>
                {arrayMoedas?.map((item: string) => (
                    <Grid item xs={2} key={arrayMoedas.indexOf(item)}>
                        <Paper onClick={() => ShowMoeda(item)}>{item}</Paper>
                    </Grid>
                ))}
            </Grid>

            {moeda?.currency_code !== undefined &&
                <List>
                    <ListItem>
                        <ListItemText primary={moeda.currency_code} secondary="Moeda Selecionada" />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                        <ListItemText primary={moeda.name} secondary="Nome da moeda" />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                        <ListItemText primary={moeda.symbol} secondary="Símbolo" />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                        <ListItemText primary={moeda.country_code} secondary="Código do País" />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                        <ListItemText primary={moeda.central_bank} secondary="Banco Central" />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                        <ListItemText primary={moeda.country_name} secondary="País" />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                        <ListItemText primary=
                            {moeda.using_countries.map((item: string) => (
                                <p key={moeda.using_countries.indexOf(item)}>{item}</p>
                            ))} 
                        secondary="Países de uso"/>
                    </ListItem>
                </List>
            }
        </>
    )
}

export default Moedas