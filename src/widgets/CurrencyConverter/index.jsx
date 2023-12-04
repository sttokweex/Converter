import { useQuery } from '@tanstack/react-query'
import { currencyService } from '../../shared/api'
import {  Box, Button, CircularProgress,Typography } from '@mui/material'
import { CurrencyRateSelector } from '../../features/CurrencyRateSelector'
import { mapCurrencyRatesToLabelValue } from './lib/mapper'
import { CurrencyCountInput } from '../../features/CurrencyCountInput'
export const CurrencyConverter =()=>{
    const {isLoading,data} = useQuery({queryKey:['currencyRate'],queryFn:currencyService.getCurrency,select:(data)=>data.data})
    const onCountChange = (value)=>{
        console.log(value);
    }
    const onFromChange = (value)=>{
        console.log(value);
    }
    const onToChange = (value)=>{
        console.log(value);
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(Object.fromEntries(formData));
        console.log(formData.get('from'))
    }
    if(isLoading){
        return(
            <CircularProgress/>
        )
    }
    return (
        <Box>
            <Typography variant="h2">Конвертер Валют</Typography>
            <Box>
            <Box  display='flex' gap={1} flexDirection='column' component='form' autoComplete="off" onSubmit={onSubmit}>
                <CurrencyCountInput id="currency-count-id" name="count" label="Сумма" onChange={onCountChange}/>
                <CurrencyRateSelector id="currecy-from-id" label='from' name="from" currencyRate={mapCurrencyRatesToLabelValue(data)} onChange={onFromChange}/>
                <CurrencyRateSelector id="currecy-to-id" name="to" label='to' currencyRate={mapCurrencyRatesToLabelValue(data)} onChange={onToChange}/>
                <Button variant="contained" type="submit">Конвертировать</Button>
            </Box>
            </Box>
        </Box>
    )
}