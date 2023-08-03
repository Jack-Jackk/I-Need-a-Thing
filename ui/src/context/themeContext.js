import { CssBaseline } from '@mui/material' 
import { createTheme, ThemeProvider  } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E3FEE6',
    },
    secondary: {
      main: '#E3FEE6',
    },
  },
})


const ThemeContextProvider = (props) => {
  const {
    children
  } = props

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default ThemeContextProvider