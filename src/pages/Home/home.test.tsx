import { screen } from '@testing-library/react'
import React from 'react'
import { mockData } from '../../mocks/handlers'
import { renderWithQueryClientAndRouter } from '../../test/utils'
import { Home } from './index'

describe('Test Home', () => {
  test('Deberia encontrar el titulo', async () => {
    renderWithQueryClientAndRouter(<Home />, { options: {} })
    expect(screen.getByText('Cargando...'))
    expect(
      await screen.findByRole('heading', {
        name: `${mockData.results.length} characters publicados`
      })
    ).toBeInTheDocument()
  })
})
