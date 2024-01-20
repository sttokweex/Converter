import {Container} from '@mui/material'
import { CurrencyConverter } from '../../widgets/CurrencyConverter'
import { WishList } from '../../widgets/wishList'
export const MainPage=()=>{

    return (<Container>
      <CurrencyConverter />
      <WishList/>
      </Container>
    )
}