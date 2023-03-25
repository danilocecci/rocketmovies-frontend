import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Form, Background } from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp(){
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
      return alert('Preencha todos os campos!')
    }

    api.post('/users', { name, email, password })
      .then(() => { 
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch(err => {
        if(err.response){
          alert(err.response.data.message);
        } else {
          alert('Não foi possível cadastrar!')
        }
      }
    )
  }

  return(
    <Container>
      <Background />
      <Form>
        <h2>RocketMovies</h2>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h1>Crie sua conta</h1>
        <div className='input-wrapper'>
          <Input placeholder='Nome' icon={FiUser} onChange={e => setName(e.target.value)}/>
          <Input placeholder='E-mail' icon={FiMail} onChange={e => setEmail(e.target.value)}/>
          <Input type='password' placeholder='Senha' icon={FiLock} onChange={e => setPassword(e.target.value)}/>
        </div>
        <Button value='Cadastrar' onClick={handleSignUp} />
        <Link to='/'>
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>
    </Container>
  )
}