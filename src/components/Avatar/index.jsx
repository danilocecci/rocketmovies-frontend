import { Container } from './styles'

export function Avatar({size, borderSize, src, alt}){
  return(
    <Container>
      <img width={size} height={size} style={{border:borderSize+'px solid #3E3B47'}} src={src} alt={alt} />
    </Container>
  )
}