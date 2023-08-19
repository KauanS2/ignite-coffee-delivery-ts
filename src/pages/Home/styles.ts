import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 12rem;
  gap: 15px;
`

export const TitleCoffe = styled.p`
  display: flex;
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2';
  font-size: 2rem;
  line-height: 130%;
  font-weight: 800;
  margin-top: 1rem;
`
export const CoffeList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`
