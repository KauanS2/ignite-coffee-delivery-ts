import { styled } from 'styled-components'

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
