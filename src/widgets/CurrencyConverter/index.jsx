import { useQuery } from '@tanstack/react-query'
import { currencyService } from '../../shared/api'
import {  Box,  CircularProgress,Typography } from '@mui/material'
import { ConvertForm } from '../../features/ConvertForm'
import { useState } from 'react';
import { convertCurrency } from './../../shared/utilites/convert/currency';
import { mapCurrencyRatesToLabelValue } from '../../entities/currency';


export const CurrencyConverter =()=>{
    const [result,setResult]= useState(null);
    const {isLoading,data:currencyRate} = useQuery({queryKey:['currencyRate'],queryFn:currencyService.getCurrency,select:(data)=>data.data})
    const onSubmit=(data)=>{
        const result = convertCurrency(data.countCurrency, currencyRate[data.from],currencyRate[data.to])
        return setResult(`${data.countCurrency} ${data.from} = ${result.toFixed(2)} ${data.to}`)
    }
    if(isLoading){
        return(
            <CircularProgress/>
        )
    }
    return (
        <Box display="flex" flexDirection='column' alignItems='center'>
            <Typography variant="h2">Конвертер Валют</Typography>
            <Box sx={{padding:'16px'}}>
                <ConvertForm currencyList={mapCurrencyRatesToLabelValue(currencyRate)} onSubmit={onSubmit} buttonLabel={'Конвертировать'}/>
            </Box>
            <Box sx={{padding:'16px', minHeight:'32px'}}>
            {result ? <Typography variant='h5'>{result}</Typography>:''}
            </Box>
        </Box>
    )
}