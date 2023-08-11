import { styled } from 'styled-components'

export const CheckoutSucessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 12rem;

  img {
    margin-top: 2.5rem;
  }
`

export const CheckoutOrderConfirmed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h4 {
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 2rem;

    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }
`

export const InfoCheckoutConfirmed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme.purple};
  border-radius: 6px 36px 6px 36px;
  margin-top: 3rem;
`

const COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface StatusProps {
  statusColor: keyof typeof COLOR
}

export const InfoOrderClient = styled.div<StatusProps>`
  display: flex;
  gap: 12px;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    padding: 0.5rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme[COLOR[props.statusColor]]};
  }
  span {
    color: ${(props) => props.theme['base-text']};
  }
`
