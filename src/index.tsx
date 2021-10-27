import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()

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
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </QueryClientProvider>,
  document.getElementById('root')
)
