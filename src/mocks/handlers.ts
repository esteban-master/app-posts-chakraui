import { rest } from 'msw'
export const mockData = [
  {
    id: 1,
    createdAt: '2021-10-22T02:39:52.573Z',
    updatedAt: '2021-10-22T02:39:52.573Z',
    name: 'Post MOCK 1',
    description: 'El segundo posts en TCIT'
  },
  {
    id: 2,
    createdAt: '2021-10-22T02:38:04.745Z',
    updatedAt: '2021-10-22T02:38:04.746Z',
    name: 'Post MOCK 2',
    description: 'El segundo posts en TCIT'
  },
  {
    id: 3,
    createdAt: '2021-10-20T19:51:09.986Z',
    updatedAt: '2021-10-20T19:51:09.987Z',
    name: 'Post MOCK 3',
    description: 'Algun texto para esta publicacion'
  }
]
const handlers = [
  rest.get('http://localhost:4000/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData))
  }),
  rest.get('http://localhost:4000/posts/:id', (req, res, ctx) => {
    const { id } = req.params
    const post = mockData.find((p) => p.id.toString() === id.toString())
    return res(ctx.status(200), ctx.json(post))
  }),
  rest.post('http://localhost:4000/login', (req, res, ctx) => {
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
