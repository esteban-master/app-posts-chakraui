import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from './App'
import { mockData } from './mocks/handlers'
import { renderWithQueryClientAndRouter } from './test/utils'

const [primerPostMock] = mockData

describe('App Test', () => {
  test.only('should render post', async () => {
    renderWithQueryClientAndRouter(<App />, {
      options: {},
      initialRoutes: ['/', `/post/${primerPostMock.id}`]
    })
    const [primerVerMas] = await screen.findAllByText(/ver mas.../i)
    userEvent.click(primerVerMas)
    expect(
      await screen.findByRole('heading', {
        name: `Dentro del post: ${primerPostMock.name}`
      })
    ).toBeInTheDocument()
    expect(
      await screen.findByText(primerPostMock.description)
    ).toBeInTheDocument()
  })
})
