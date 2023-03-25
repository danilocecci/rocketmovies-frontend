import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  width: 100%;

  padding: 32px;

  background-color: rgba(255, 133, 155, 0.05);

  border-radius: 16px;

  .star-svg > path {
    stroke-width: 1px;
    stroke: #ff859b;
  }

  h3 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    text-align: justify;
    color: ${({ theme }) => theme.COLORS.SINOPSE};
    margin: 15px 0;
  }

  .tag-wrapper {
    display: flex;
    gap: 8px;
  }
`
