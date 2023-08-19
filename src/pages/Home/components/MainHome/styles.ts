import { styled } from 'styled-components'

export const HomeBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 8px;

  p {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', Roboto;
    font-size: 48px;
    font-weight: 800;
    line-height: 130%;
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto', Roboto;
    line-height: 130%;
    font-weight: normal;
    font-size: 18px;
  }
`
export const BoxContainerHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
