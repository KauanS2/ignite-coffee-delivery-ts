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
export const Adress = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  gap: 32px;
  width: 40rem;
  border-radius: 6px;
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
