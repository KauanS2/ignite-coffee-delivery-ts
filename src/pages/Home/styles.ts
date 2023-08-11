import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 12rem;
  gap: 15px;
`

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
export const QualityContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
`
const STATUS_COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}
export const StatusQuality = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
  font-family: 'Roboto', Roboto;
  line-height: 130%;
  padding: 0.375rem;
  gap: 10px;
`

export const IconQuality = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  border-radius: 9999px;
  justify-content: center;
  color: ${(props) => props.theme.white};
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
`

export const BoxContainerHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
