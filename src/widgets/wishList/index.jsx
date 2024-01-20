import { useQuery } from "@tanstack/react-query"
import { currencyService } from "../../shared/api"
import { convertCurrency, useInputState } from "../../shared/utilites"
import { Typography,Box, Button, TextField, CircularProgress } from "@mui/material"
import { useState } from "react"
import { ModalBase } from "../../shared/ui"
import { mapCurrencyRatesToLabelValue } from "../../entities/currency"
import { ConvertForm } from "../../features/ConvertForm"

export const WishList = ()=>{
    const [isOpen,setIsOpen] = useState(false);
    const {value,setValue,error,setError} = useInputState();
    const {isLoading,data:currencyRate} = useQuery({queryKey:['currencyRate'],queryFn:currencyService.getCurrency,select:(data)=>data.data})
    const onSubmit=(data)=>{
        if(!value){
            return setError(true)
        }
        const result = convertCurrency(data.countCurrency, currencyRate[data.from],currencyRate[data.to])
        console.log(result)
    }
    const onAddWishClick =()=>{
        setIsOpen(true)
        
    }
    const onValueChange = (e) =>{
        if(e.target.value){
        setError(false);}
        return setValue(e.target.value)
    }
    if(isLoading){
        return ( 
            <CircularProgress/>
        )
    }
    return(
        <Box display="flex" flexDirection='column' alignItems='center'>
            <Typography variant ='h4'> Wish</Typography>
            <Button variant='contained' color='primary' onClick={onAddWishClick}>Add</Button>
            <ModalBase
                title='Опишите этот предмет'
                isOpen={isOpen}
                onClose={()=>setIsOpen(false)}
            > <Box padding={2} display="flex" flexDirection='column' alignItems='center' gap={2}>
                 <TextField
                        label="Название"
                        type="text"
                        value={value}
                        autoComplete="off"
                        onChange={onValueChange}
                        sx={{width:'200px'}}
                        error={error}
                        helperText={error ? 'Обязательное поле' : ''}
                 />

                 <ConvertForm onSubmit={onSubmit} currencyList={mapCurrencyRatesToLabelValue(currencyRate)} buttonLabel='сохранить' />
            </Box>
            </ModalBase>
           
        </Box>
    )
}