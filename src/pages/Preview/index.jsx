import { Link, useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiClock, FiDelete } from 'react-icons/fi'
import { Rating } from 'react-simple-star-rating'
import { useTheme } from 'styled-components'
import { useState, useEffect } from 'react'

import { Container } from './styles'

import { Header } from '../../components/Header'
import { Avatar } from '../../components/Avatar'
import { Tag } from '../../components/Tag'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useAuth } from '../../hooks/auth'


export function Preview(){
  const themes = useTheme()
  const { user } = useAuth()
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const movieId = useParams().id

  async function handleDeleteMovie() {
    const deleteConfirmation = confirm(`Realmente deseja apagar as anotações de "${data.title}"?`)
    if (deleteConfirmation) {
      await api.delete(`/notes/${movieId}`)
      navigate(-1)
    }
  }
  
  useEffect(() => {
    async function fetchMoviePreview() {
      const response = await api.get(`/notes/${movieId}`)
      setData(response.data)
    }

    fetchMoviePreview()
  }, [])

  return(
    <Container>
      <Header />
      {
        data &&
        <main>
          <Link to='/'><FiArrowLeft />Voltar</Link>
          
            <div className='movie-title'>
              <h1>{data.title}</h1>
              <Rating size={20} fillColor={themes.COLORS.PINK} emptyColor={'transparent'} initialValue={data.rating} readonly={true}/>
            </div>
    
            <div className='author-date'>
              <Avatar src={avatarURL} size={16} alt={'Foto de ' + user.name}/>
              <span>Por {user.name}</span>
              <FiClock color={themes.COLORS.PINK} />
              <span>{
                new Date(data.updated_at).toLocaleDateString('pt-BR', {day:'numeric', month:'numeric', year:'numeric', hour:'numeric', minute:'numeric'})
              }</span>
              <span className='deleteSpan' onClick={handleDeleteMovie}>Excluir <FiDelete color={themes.COLORS.PINK} /></span>
            </div>
    
            <div className='tags'>
              {
                data.tags.map((tag,index) => {
                  return (
                    <Tag key={index} value={tag.name}/>
                  )
                })
              }
            </div>
            <p>{data.description}</p>
        </main>
      }
    </Container>
  )
}