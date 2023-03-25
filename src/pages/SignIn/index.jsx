import { useState } from 'react'
import { Container, Form, Background } from './styles'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMail, FiLock } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({ email, password })
  }

  return(
    <Container>
      <Form>
        <h2>RocketMovies</h2>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h1>Faça seu login</h1>
        <div className='input-wrapper'>
          <Input placeholder='E-mail' icon={FiMail} onChange={e => setEmail(e.target.value)}/>
          <Input type='password' placeholder='Senha' icon={FiLock} onChange={e => setPassword(e.target.value)}/>
        </div>
        <Button value='Entrar' onClick={handleSignIn}/>
        <Link to='/register'>Criar conta <FiArrowRight/></Link>
      </Form>
      <Background />
    </Container>
  )
}