import { Container } from './styles'
import { Input } from '../Input'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar } from '../Avatar'
import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({autoFocus, onChange}){
  const navigate = useNavigate()
  const { signOut, user } = useAuth()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function goToHome(){
    navigate('/')
  }

  return(
    <Container>
      <h2 onClick={goToHome}>RocketMovies</h2>
      <Input type="text" placeholder='Pesquisar pelo título' className='header-input' autoFocus={autoFocus} onChange={onChange}/>
      <div className='profile'>
        <div>
          <Link to='/profile'><h3>{user.name}</h3></Link>
          <Link to='/' onClick={signOut}>Sair</Link>
        </div>
        <Link to='/profile'><Avatar size={54} src={avatarURL} alt={'foto de ' + user.name}/></Link>
      </div>
    </Container>
  )
}