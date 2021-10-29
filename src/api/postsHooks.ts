import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { api } from '.'
import { Post } from '../models'

type ErrorResponse = AxiosError<{
  statusCode: number
  message: string
  error: string
}>

export const usePosts = () =>
  useQuery<Post[], ErrorResponse>('posts', async () => {
    const { data } = await api.get<Post[]>('/posts')
    return data
  })
