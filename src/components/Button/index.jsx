import { Container } from './styles'

export function Button({icon:Icon,value, ...rest}){
  return(
    <Container {...rest}>
      <button type='button'>
        {Icon && <Icon size={20} />}
        {value}
      </button>
    </Container>
  )
}