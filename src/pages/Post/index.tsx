import React from 'react'
import { useParams } from 'react-router-dom'
import { usePost } from '../../api/postsHooks'

export const Post = () => {
  const { id } = useParams<{ id: string }>()
  const post = usePost(id)
  return (
    <div>
      {post.isLoading && <p>Cargando post...</p>}
      {post.isSuccess && (
        <>
          <h1>Dentro del post: {post.data.name} </h1>
          <p> {post.data.description} </p>
        </>
      )}
    </div>
  )
}
