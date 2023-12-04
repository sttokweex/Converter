import { AppEntryPoint } from '../pages'
import { AppThemeProvider } from './provider/ThemeProvider'
import { AppQueryProvider } from './provider/QueryProvider'

function App() {
  

  return (
    <AppThemeProvider>
     <AppQueryProvider>
       <AppEntryPoint/>
     </AppQueryProvider>
    </AppThemeProvider>
    
    )
}

export default App
