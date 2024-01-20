import  Button  from "@mui/material/Button"
import { Box, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { CurrencySelector } from "./currencySelector";

export const ConvertForm =({currencyList,onSubmit,buttonLabel})=>{
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();
   
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box display='flex' flexDirection='column' gap={2} sx={{width:"200px"}}>
             <TextField
        {...register('countCurrency', {required:true})}
        label='Сумма'
        type='number'
        sx={{width:'100%'}}
        error={errors['countCurrency']? true:false}
        helperText={errors['countCurrency'] ? 'Обязательное поле' : ''}
        />
        <CurrencySelector register={{...register('from')}} label='из' currencyList={currencyList}/>
        <CurrencySelector register={{...register('to')}} label='в' currencyList={currencyList}/>
        <Button type='submit' variant='contained'>{buttonLabel}</Button>
        </Box>
        </form>
    )
}