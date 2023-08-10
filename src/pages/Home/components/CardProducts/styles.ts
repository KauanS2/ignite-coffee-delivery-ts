import { styled } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px 6px 36px;
  gap: 18px;
  margin: 0.5rem;

  img {
    margin-top: -1.13rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`
export const CardValue = styled.div`
  display: flex;
  gap: 25px;
`

export const Value = styled.span`
  display: flex;
  font-size: 24px;
  line-height: 130%;
  font-weight: 700;
  align-items: center;
  gap: 2px;

  &::before {
    content: 'R$';
    font-size: 14px;
  }
`

export const CardQuantityBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    display: flex;
    border-radius: 6px;
    color: ${(props) => props.theme.white};
    border: 0;
    padding: 0.5rem;
    background-color: ${(props) => props.theme['purple-dark']};
    transition: background-color 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.purple};
    }
  }
`
export const AddItems = styled.span`
  display: flex;
  padding: 0.5rem;
  border-radius: 6px;
  align-items: center;
  gap: 5px;
  background-color: ${(props) => props.theme['base-button']};
`
export const CoffeStatus = styled.span`
  display: flex;
  font-size: 12px;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  line-height: 130%;
  font-weight: bold;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
export const Description = styled.span`
  display: flex;
  font-size: 14px;
  line-height: 130%;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  color: ${(props) => props.theme['base-label']};
`
