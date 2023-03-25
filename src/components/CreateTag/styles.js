import styled from 'styled-components'

export const Container = styled.div`
  height: 56px;

  padding: 16px;

  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_INPUT};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : 'none'};
  border-radius: 10px;

  input {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: monospace;

    cursor: ${({ isNew }) => (isNew ? 'auto' : 'auto')};
  }

  button {
    display: flex;
    align-items: center;

    background: none;
    border: none;
    svg {
      stroke-width: 2;
      width: 1.5em;
      height: 1.5em;
    }
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
