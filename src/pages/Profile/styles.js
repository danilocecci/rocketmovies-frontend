import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  header {
    display: flex;
    align-items: center;

    height: 144px;
    padding-inline: 144px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARDS};

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.PINK};
      text-decoration: none;
      font-size: 16px;
    }
  }

  main {
    margin: 0 144px;
  }

  main,
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form {
    margin-top: -90px;
    margin-bottom: 64px;

    .img-profile {
      position: relative;
      margin-bottom: 64px;
    }

    .camera {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      right: 7px;
      bottom: 7px;

      width: 48px;
      height: 48px;

      border-radius: 50%;

      background-color: ${({ theme }) => theme.COLORS.PINK};

      cursor: pointer;

      input {
        display: none;
      }

      svg {
        width: 20px;
        height: 20px;

        stroke-width: 1.5px;
      }
    }

    .input-field div {
      width: 340px;
      height: 56px;
    }

    .input-field div:nth-child(odd) {
      margin-bottom: 8px;
    }

    .input-field div:nth-child(even) {
      margin-bottom: 24px;
    }

    button {
      width: 340px;
      height: 48px;
    }
  }
`
