import 'styles/global.css'
import 'styles/variables.css'

import React from 'react'
import type { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
