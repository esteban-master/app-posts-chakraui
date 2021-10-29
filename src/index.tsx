import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'

console.log('Env: ', process.env.NODE_ENV)
// MSW
if (process.env.NODE_ENV === 'development') {
  const modules = import.meta.glob('./mocks/browser.ts')
  for (const path in modules) {
    modules[path]().then((mod) => {
      if ('worker' in mod) {
        const { worker } = mod
        worker.start()
      }
    })
  }
}

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
)
