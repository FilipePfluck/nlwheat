import { ThemeProvider } from 'styled-components'

import { Home } from './Pages/Home'

import GlobalStyle from './styles/global'
import dark from './styles/themes/dark'

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Home/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
