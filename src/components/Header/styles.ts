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

  span {
    display: flex;
    border-radius: 6px;
    line-height: 130%;
    font-weight: 600;
    font-size: 14px;
    align-items: center;
    padding: 0.5rem;
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`
