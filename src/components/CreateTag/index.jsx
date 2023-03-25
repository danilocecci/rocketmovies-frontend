import { Container } from './styles'

import { FiPlus, FiX } from 'react-icons/fi'

export function CreateTag({isNew, value, onClick, ...rest}){
  return(
    <Container isNew={isNew}>
      <input type="text" onInput={(e) => e.target.size = e.target.value.length == 0 ? 15 : e.target.value.length + 1} size={isNew ? 15 : (value.length + 1)} maxLength={30} value={value} readOnly={!isNew} {...rest}/>
      <button type='button' onClick={onClick} className={isNew ? 'button-add' : 'button-delete'} >
          {isNew ? <FiPlus /> : <FiX />}
        </button>
    </Container>
  )
}