import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 8rem;
  gap: 15px;
`

export const HomeBox = styled.div`
  display: flex;
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
export const StatusQuality = styled.span<StatusProps>`
  font-size: 16px;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  font-family: 'Roboto', Roboto;
  line-height: 130%;
  gap: 8px;

  &::before {
    content: '';
    border-radius: 9999px;
    width: 2rem;
    height: 2rem;
    background-color: ${(props) =>
      props.theme[STATUS_COLOR[props.statusColor]]};
  }
`
