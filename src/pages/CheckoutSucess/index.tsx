import {
  CheckoutOrderConfirmed,
  CheckoutSucessContainer,
  InfoCheckoutConfirmed,
  InfoOrderClient,
} from './styles'
import illustration from '../../assets/illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
export function CheckoutSucess() {
  return (
    <CheckoutSucessContainer>
      <CheckoutOrderConfirmed>
        <h4>Uhu! Pedido confirmado</h4>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <InfoCheckoutConfirmed>
          <InfoOrderClient statusColor="purple">
            <MapPin size={16} />
            <span>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br />
              Farrapos - Porto Alegre, RS
            </span>
          </InfoOrderClient>
          <InfoOrderClient statusColor="yellow">
            <Timer size={16} />
            <span>
              Previsão de entrega <br /> <strong>20 min - 30 min</strong>{' '}
            </span>
          </InfoOrderClient>
          <InfoOrderClient statusColor="yellowDark">
            <CurrencyDollar size={16} />
            <span>
              Pagamento na entrega <br />
              <strong>Cartão de Crédito</strong>
            </span>
          </InfoOrderClient>
        </InfoCheckoutConfirmed>
      </CheckoutOrderConfirmed>
      <img src={illustration} alt="" />
    </CheckoutSucessContainer>
  )
}
