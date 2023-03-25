import { Container } from './styles'
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { Tag } from '../../components/Tag'
import { useTheme } from 'styled-components'

export function MovieCard({title, stars, content, tagvalue, ...rest}){
  const [ratingValue, setRatingValue] = useState(0)
  const handleRating = (rate) => {
    setRatingValue(rate)
  }
  const themes = useTheme()

  return(
    <Container value={tagvalue} {...rest}>
      <h3>{title}</h3>
      <Rating size={13} fillColor={themes.COLORS.PINK} emptyColor={'transparent'} initialValue={stars} readonly={true}/>
      <p>{content}</p>
      <div className='tag-wrapper'>
        {tagvalue && tagvalue.map((tag, index) => (<Tag key={index} value={tag}/>))}
      </div>
    </Container>
  )
}