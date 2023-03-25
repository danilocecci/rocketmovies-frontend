import styled from 'styled-components'

export const Container = styled.div`
  main {
    padding: 24px 123px;
    overflow-y: auto;
  }

  main a {
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 500;
    font-size: 36px;
    line-height: 48px;

    margin-top: 24px;
    margin-bottom: 40px;
  }

  .inputs {
    margin-bottom: 40px;
  }

  main p {
    margin-top: 40px;

    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.SINOPSE};

    margin-bottom: 24px;
  }

  .tag-field {
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    /* height: 90px; */

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};

    padding: 16px;
    margin-bottom: 40px;

    border-radius: 10px;
  }

  .col-2 {
    display: flex;
    align-items: center;
  }

  .gap-40 {
    gap: 40px;
  }

  .tag-field {
    gap: 24px;
  }

  .btn-page-action {
    width: 100%;
    height: 56px;
    margin: 0 auto;
  }

  .btn-dark > button {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};

    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 500;
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
