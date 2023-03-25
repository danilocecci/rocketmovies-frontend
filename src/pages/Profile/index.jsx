import { useState } from 'react'
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container } from './styles'
import { Avatar } from '../../components/Avatar'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Profile(){
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email) 
  const [oldPassword, setOldPassword ] = useState()
  const [newPassword, setNewPassword] = useState()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)
  
  async function handleUpdate() {
    const newUsersInfo = { name, email, newPassword: newPassword, oldPassword: oldPassword }
    const toUpdateUser = Object.assign(user, newUsersInfo)
    await updateProfile({ user: toUpdateUser, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return(
    <Container>
      <header>
        
        <Link to='/'><FiArrowLeft size={'18px'}/>Voltar</Link>
      </header>

      <main>
        <form>
          <div className='img-profile'>
            <Avatar className='photo' size={186} borderSize={1} src={avatarURL} alt={'Foto de ' + user.name} />
            <label className='camera' htmlFor="avatar-img">
              <FiCamera />
              <input id='avatar-img' type='file' onChange={handleChangeAvatar} />
            </label>
          </div>

          <div className='input-field'>
            <Input icon={FiUser} placeholder={'Nome'} value={name} onChange={(e) => setName(e.target.value)} />
            <Input icon={FiMail} placeholder={'E-mail'} value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input icon={FiLock} placeholder={'Senha atual'} type='password' onChange={(e) => setOldPassword(e.target.value)} />
            <Input icon={FiLock} placeholder={'Nova senha'} type='password' onChange={(e) => setNewPassword(e.target.value)} />
          </div>

          <Button value='Salvar' onClick={handleUpdate} />
        </form>
      </main>
    </Container>
  )
}