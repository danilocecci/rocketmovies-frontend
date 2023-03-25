import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

  border-radius: 10px;

  textarea {
    width: 100%;
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    padding: 14px;

    resize: none;
  }
`
