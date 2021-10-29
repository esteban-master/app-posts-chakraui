import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { api } from '.'
import { Character } from '../models'

type ErrorResponse = AxiosError<{
  statusCode: number
  message: string
  error: string
}>

export const usePosts = () =>
  useQuery<Character[], ErrorResponse>('character', async () => {
    const { data } = await api.get<{ info: any; results: Character[] }>(
      '/character'
    )
    return data.results
  })
export const usePost = (id: string) =>
  useQuery<Character, ErrorResponse>(['character', id], async () => {
    const { data } = await api.get<Character>(`/character/${id}`)
    return data
  })
