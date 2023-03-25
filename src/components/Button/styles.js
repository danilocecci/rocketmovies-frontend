import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    height: 56px;
    width: 100%;

    border: none;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_CARDS};

    font-family: ${({ theme }) => theme.FONT.BODY};
    font-weight: 500;
    font-size: 16px;

    cursor: pointer;

    transition: all 400ms;
  }
`
