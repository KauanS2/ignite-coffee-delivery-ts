import { styled } from 'styled-components'
export const ItemContainer = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  gap: 10px;
  img {
    width: 4rem;
    height: 4rem;
  }
  span {
    display: flex;
    width: 100%;
    justify-content: end;
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-weight: bold;
    line-height: 130%;
  }
`
export const ItemContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`
export const ButtomItemContainer = styled.div`
  display: flex;
  gap: 8px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
    border: 0;
    font-size: 0.875rem;
    gap: 4px;
    border-radius: 6px;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-button']};

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`
