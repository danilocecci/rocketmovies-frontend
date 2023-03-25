import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    padding: 58px 123px;

    > div {
      overflow-y: auto;
      height: 700px;
      padding-right: 8px;
    }

    .main-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 38px;

      > h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 32px;
        font-weight: 400;
      }

      div > button {
        width: 207px;
        height: 48px;
      }
    }

    .movies-wrapper {
      display: grid;
      gap: 24px;
    }
  }
`
