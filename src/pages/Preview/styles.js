import styled from 'styled-components'

export const Container = styled.div`
  main {
    padding: 0 144px;
  }

  main a {
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
    font-weight: 400;

    padding-top: 40px;
  }

  .movie-title {
    display: flex;
    align-items: center;
    gap: 19px;
    padding: 40px 0 24px;
  }

  main h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 500;
    font-size: 36px;
  }

  .star-svg {
    transform: translateY(20%);
  }

  .star-svg > path {
    stroke-width: 1px;
    stroke: #ff859b;
  }

  .author-date {
    display: flex;
    align-items: center;
    gap: 8px;

    padding-bottom: 40px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 16px;

    div {
      height: 16px;
    }

    .deleteSpan {
      display: flex;
      align-items: center;
      margin-left: auto;
      gap: 10px;
      color: ${({ theme }) => theme.COLORS.PINK};
      cursor: pointer;
    }
  }

  .tags {
    display: flex;
    gap: 8px;

    padding-bottom: 40px;
  }

  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
    font-size: 16px;
    line-height: 21px;
  }

  p + p {
    margin-top: 15px;
  }
`
