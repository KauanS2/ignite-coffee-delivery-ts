import { styled } from 'styled-components'

export const ShoppingCartContainer = styled.div`
  position: relative;

  a {
    display: flex;
    border: none;
    padding: 0.5rem;
    border-radius: 6px;
    align-items: center;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CartCount = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -18%;
  left: 75%;
  border-radius: 9999px;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
`
