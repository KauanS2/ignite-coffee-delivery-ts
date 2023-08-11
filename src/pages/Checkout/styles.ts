import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 12rem;
`
export const CompleteOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const ConfirmOrder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  width: 28rem;
  max-height: 31.125rem;
  overflow: auto;
  border-radius: 6px 44px 6px 44px;
  gap: 24px;
  background-color: ${(props) => props.theme['base-card']};

  a {
    background-color: ${(props) => props.theme.yellow};
    text-decoration: none;
    padding: 0.75rem 0.5rem;
    border-radius: 6px;
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
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

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
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

export const ConfirmOrderListItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  gap: 32px;
`
export const InformationItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 0.5rem;

  span {
    display: flex;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    justify-content: space-between;
    line-height: 130%;
  }

  h4 {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    font-size: 1.25rem;
    font-weight: bold;
  }
`
