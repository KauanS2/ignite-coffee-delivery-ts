import { styled } from 'styled-components'

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  gap: 32px;
`
export const IconPayment = styled.div`
  display: flex;
  gap: 10px;
  justify-items: center;

  div p {
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: bold;
  }
  div span {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
`
export const PaymentChoice = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  button {
    display: flex;
    padding: 1rem;
    justify-items: center;
    cursor: pointer;
    align-items: center;
    font-size: 0.75rem;
    line-height: 160%;
    gap: 12px;
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.purple};
      background-color: ${(props) => props.theme['purple-light']};
    }
  }
`
