import styled from 'styled-components'

export const Container = styled.span`
  width: fit-content;
  padding: 5px 16px;

  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.WHITE};

  font-family: ${({ theme }) => theme.FONT.SINOPSE};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARDS};
`
