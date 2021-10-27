import { rest } from 'msw'



const handlers = [
  rest.get('https://api.github.com/search/repositories', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]))
  }),
  rest.post('/login', (req, res, ctx) => {
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
