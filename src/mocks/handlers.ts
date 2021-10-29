import { rest } from 'msw'
export const mockData = {
  info: {
    count: 671,
    pages: 34,
    next: 'https://rickandmortyapi.com/api/character?page=2',
    prev: null
  },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human'
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human'
    }
  ]
}

const handlers = [
  rest.get(`http://localhost:3001/character`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData))
  }),
  rest.get(`http://localhost:3001/character/:id`, (req, res, ctx) => {
    const { id } = req.params
    const post = mockData.results.find((p) => p.id.toString() === id.toString())
    return res(ctx.status(200), ctx.json(post))
  }),
  rest.post(`http://localhost:3001/login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Welcome desde test',
        user: JSON.parse(req.body as string)
      })
    )
  })
]

export { handlers }
