import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;

  h2 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 14px;
  }

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 136px;

  h1 {
    margin: 48px 0;
  }

  .input-wrapper {
    display: grid;
    gap: 8px;
  }

  button {
    margin: 16px 0 42px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-family: ${({ theme }) => theme.FONT.BODY};
    color: ${({ theme }) => theme.COLORS.PINK};

    text-decoration: none;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
