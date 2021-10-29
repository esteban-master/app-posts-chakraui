import React from 'react'
import Router from './Routes.routes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()
function App() {
  return (
    <div className="bg-white">
      <p>hola</p>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Router />
      </QueryClientProvider>
    </div>
  )
}

export default App
