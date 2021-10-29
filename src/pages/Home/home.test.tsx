import { screen } from '@testing-library/dom'
import React from 'react'
import { mockData } from '../../mocks/handlers'
import { renderWithQueryClient } from '../../test/utils'
import { Home } from './index'

describe('Test Home', () => {
  test('Deberia encontrar el titulo', async () => {
    renderWithQueryClient(<Home />)
    expect(screen.getByText('Cargando...'))
    expect(
      await screen.findByRole('heading', {
        name: `${mockData.length} posts publicados`
      })
    ).toBeInTheDocument()
  })
  test('should render post', async () => {})
})
