import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { IconPayment, Payment, PaymentChoice } from './styles'

export function PaymentMethod() {
  return (
    <Payment>
      <IconPayment>
        <CurrencyDollar size={22} />
        <div>
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </IconPayment>
      <PaymentChoice>
        <button>
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </button>
        <button>
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </button>
        <button>
          <Money size={16} />
          DINHEIRO
        </button>
      </PaymentChoice>
    </Payment>
  )
}
