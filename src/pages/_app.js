
import { ThemeProvider } from 'theme-ui'
import theme from '../theme_styles/index'

import "../sections/styles.css"
console.log(theme)


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
