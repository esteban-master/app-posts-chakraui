import { screen, waitFor } from '@testing-library/dom'
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
        name: `${mockData.length} posts publicados`
      })
    ).toBeInTheDocument()
  })
})
