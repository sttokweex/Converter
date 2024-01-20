import {TextField,MenuItem } from "@mui/material"
export const CurrencySelector =({currencyList,label,register})=>{
   
    return (
      <TextField
         {...register}
          select
          sx={{width:"100%"}}
          defaultValue='EUR'
          label={label}
          required>
          {currencyList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value  }
            </MenuItem>
          ))}
        </TextField>
        
    )
}