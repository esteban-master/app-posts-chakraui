import React, { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { render, RenderOptions } from '@testing-library/react'

export const testingQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // desactiva los reintentos en testing
      retry: false
    }
  }
})

const Wrapper = ({ children }: PropsWithChildren<React.ReactNode>) => (
  <QueryClientProvider client={testingQueryClient}>
    {children}
  </QueryClientProvider>
)

export function renderWithQueryClient(
  ui: React.ReactElement,
  options?: RenderOptions
) {
  return render(ui, { wrapper: Wrapper, ...options })
}
