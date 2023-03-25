import { useState, useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { MovieCard } from '../../components/MovieCard'
import { api } from '../../services/api'

export function Home(){
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=> {
    async function fetchMovies() {
      const response = await api.get('/notes/?title')
      setMovies(response.data)
    }
    fetchMovies()
  }, [])

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`)
      setMovies(response.data)
    }
    fetchMovies()
  }, [search])

  return(
    <Container>
      <Header autoFocus onChange={(e) => setSearch(e.target.value)}/>
      <main>
        <div>
          <div className='main-header'>
            <h1>Meus filmes</h1>
            <Link to='/create'><Button icon={FiPlus} value='Adicionar filme'/></Link>
          </div>
          <div className='movies-wrapper'>
            {
              movies && movies.map((movie) => {
                return (
                  <MovieCard to={`/preview/${movie.id}`}
                  key={movie.id}
                  title={movie.title} 
                  stars={movie.rating}
                  content={movie.description}
                  tagvalue={movie.tags.map(tag => {
                    return tag.name
                  })}/>
                )
              })
            }
          </div>
        </div>
      </main>
    </Container>
  )
}