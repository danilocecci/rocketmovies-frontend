import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 116px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  padding: 24px 123px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};

  > h2 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 700;
    font-size: 24px;
    cursor: pointer;
  }

  > div {
    max-width: 630px;
  }

  .profile {
    display: flex;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      margin-right: 9px;
    }

    h3 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 14px;
      font-weight: 700;
      white-space: nowrap;
    }

    a {
      text-decoration: none;
      text-transform: lowercase;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    img {
      width: 54px;
      border: none;
      border-radius: 50%;
    }
  }
`
