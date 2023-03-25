import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { CreateTag } from '../../components/CreateTag'
import { Button } from '../../components/Button'
import { api } from '../../services/api'

export function CreateMovie(){
  const [title, setTitle] = useState('')
  const [stars, setStars] = useState('')
  const [note, setNote] = useState('')
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddTag(e){
    const tagInputElement = e.target.parentNode.parentNode.childNodes[0]
    const tagIsValid = newTag.trim().length <= 0 ? false : true
    tagIsValid && setTags(prevState => [...prevState, newTag.trim()])
    setNewTag('')
    tagInputElement.size = 15
    tagInputElement.focus()
  }

  function handleRemoveTag(tagToRemove){
    setTags(prevState => prevState.filter(tag => tag !== tagToRemove))
  }

  async function handleNewMovie() {
    if (!title || !stars || !note || !tags ) {
      return alert('Por favor, preencha todos os campos!')
    }

    if (stars < 0 || stars > 5) {
      return alert('Por favor, preencha o campo de nota corretamente!')
    }

    if (newTag) {
      return alert('Você deixou uma tag sem adicionar! \nClique em "+" para adicioná-la!')
    }

    await api.post('/notes', {
      title,
      rating: stars,
      description: note,
      tags
    })
    alert('Filme cadastrado com sucesso!')
    navigate(-1)
  }

  function handleEraseFields() {
    setTitle('')
    setStars('')
    setNote('')
    setTags([])
  }

  function handleLimitOfStars(e){
    if(stars){
      e.target.value.slice(1,2) > 5 ? setStars(5) : setStars(e.target.value.slice(1,2))
    } else {
      e.target.value.slice(0,1) > 5? setStars(5) : setStars(e.target.value.slice(0, 1))
    }
  }

  return(
    <Container>
      <Header />
      <main>
        <Link to="/"><FiArrowLeft />Voltar</Link>
        <h1>Novo filme</h1>
        <div className='col-2 gap-40 inputs'>
          <Input 
            placeholder='Título' 
            onChange={e => setTitle(e.target.value)} 
            autoFocus 
            value={title}
          />
          <Input 
            placeholder='Sua nota (de 0 a 5)' 
            onChange={handleLimitOfStars}
            value={stars}
            type='number'
            maxLength={1}
          />
        </div>
        <Textarea 
          placeholder='Observações' 
          rows='5' 
          className='textarea' 
          onChange={e => setNote(e.target.value)}
          value={note}
        />
        <p>Marcadores</p>
        <div className='col-2 tag-field'>
          {
            tags.map((tag, index) => {
              return (
                <CreateTag 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)} 
                />
              )
            })
          }
          <CreateTag 
            placeholder={'Novo marcador'}
            isNew
            value={newTag} 
            onChange={e => setNewTag(e.target.value)}
            onClick={handleAddTag} 
          />
        </div>
        <div className='col-2 gap-40'>
          <Button 
            className='btn-page-action btn-dark'
            value={'Limpar campos'}
            onClick={handleEraseFields}
          />
          <Button 
            className='btn-page-action' 
            value={'Salvar alterações'}
            onClick={handleNewMovie}
          />
        </div>
      </main>
    </Container>
  )
}