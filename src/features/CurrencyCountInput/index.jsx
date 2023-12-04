import { TextField } from "@mui/material"

export const CurrencyCountInput = ({id,name,label,onChange}) =>{
    const onHandleChange = (e)=>{
            return onChange(e.target.value)
    }
    return (
        <TextField
          id={id}
          label={label}
          name={name}
          type="number"
          onChange={onHandleChange}
        />
    )

}