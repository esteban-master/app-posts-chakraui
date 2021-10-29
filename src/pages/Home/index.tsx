import React from 'react'
import { Link } from 'react-router-dom'
import { usePosts } from '../../api/postsHooks'

export const Home = () => {
  const { data, isLoading, isSuccess } = usePosts()
  return (
    <div>
      <h1>Home</h1>

      {isLoading && <p>Cargando...</p>}
      {isSuccess && data ? (
        <div>
          <h1> {data.length} characters publicados </h1>
          {data.map((p) => (
            <div key={p.id}>
              <h1> {p.name} </h1>
              <p> {p.species} </p>
              <Link to={`/post/${p.id}`}> Ver mas... </Link>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
