import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const CompleteOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const ConfirmOrder = styled.div`
  display: flex;
  flex-direction: column;
`
export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  gap: 32px;
`
export const Adress = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  gap: 32px;
  width: 40rem;
  border-radius: 6px;
`
export const FormAdress = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  width: 35rem;

  #intOne {
    padding: 0.5rem;
    width: 12.5rem;
  }
  #intTwo {
    padding: 0.5rem;
    width: 100%;
  }
  div {
    display: flex;
    gap: 4px;
    #intThree {
      width: 1/3%;
      padding: 0.5rem;
    }
    #intFour {
      width: 100%;
      padding: 0.5rem;
    }
    #intFive {
      width: 1/3%;
      padding: 0.5rem;
    }
    #intSix {
      width: 100%;
      padding: 0.5rem;
    }
    #intSeven {
      width: 3.75rem;
      padding: 0.5rem;
    }
  }
`
export const InputAdress = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  border: 1px solid ${(props) => props.theme['base-button']};
  outline: none;
  align-items: center;
  border-radius: 4px;
  font-size: 0.875rem;
  line-height: 130%;
`

export const IconAdress = styled.div`
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
    color: ${(props) => props.theme['yellow-dark']};
  }
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
