import { styled } from 'styled-components'

export const ShoppingCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0.5rem;

  a {
    display: flex;
    border: 0;
    padding: 0.5rem;
    border-radius: 6px;
    align-items: center;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`
