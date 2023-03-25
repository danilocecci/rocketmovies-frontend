import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

  border-radius: 10px;

  svg {
    align-self: center;
    margin-left: 16px;
    stroke: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  input {
    width: 100%;
    height: 100%;

    padding: 14px;

    border: none;
    border-radius: 10px;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
