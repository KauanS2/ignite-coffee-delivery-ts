import { styled } from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 12rem;
  justify-content: space-between;
`
export const CartBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  a {
    display: flex;
    border: 0;
    padding: 0.5rem;
    border-radius: 6px;
    align-items: center;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    display: flex;
    border-radius: 6px;
    line-height: 130%;
    font-weight: 400;
    font-size: 14px;
    align-items: center;
    padding: 0.5rem;
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
  }
`
