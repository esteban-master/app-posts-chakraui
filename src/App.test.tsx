import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from './App'
import { mockData } from './mocks/handlers'
import { renderWithQueryClientAndRouter } from './test/utils'

const [primerCharacterMock] = mockData.results

describe('App Test', () => {
  test('should render post', async () => {
    renderWithQueryClientAndRouter(<App />, {
      options: {},
      initialRoutes: ['/', `/post/${primerCharacterMock.id}`]
    })
    const [primerVerMas] = await screen.findAllByText(/ver mas.../i)

    userEvent.click(primerVerMas)
    expect(
      await screen.findByRole('heading', {
        name: `Dentro del post: ${primerCharacterMock.name}`
      })
    ).toBeInTheDocument()
    expect(
      await screen.findByText(primerCharacterMock.species)
    ).toBeInTheDocument()
  })
})
