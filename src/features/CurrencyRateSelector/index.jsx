import {TextField,MenuItem } from "@mui/material"


// {
//     currencyRate: Array<string>
//     label:string
//     onChange:{value} => void
// }
export const CurrencyRateSelector =({id,name,currencyRate,onChange,label})=>{
    const onHandleChange =(e)=>{
        return onChange(e.target.value)
    }
    return (
        
      <TextField
          id={id}
          name={name}
          select
          sx={{width:"150px"}}
          label={label}      
          onChange={onHandleChange}
          required
        >
          {currencyRate.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        
    )
}