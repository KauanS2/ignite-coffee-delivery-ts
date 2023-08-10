import { NavLink } from 'react-router-dom'
import {
  Adress,
  CheckoutContainer,
  CompleteOrder,
  ConfirmOrder,
  FormAdress,
  IconAdress,
  IconPayment,
  InputAdress,
  Payment,
  PaymentChoice,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder>
        <Adress>
          <IconAdress>
            <MapPinLine size={22} />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </IconAdress>
          <FormAdress>
            <InputAdress placeholder="CEP" id="intOne" type="text" />
            <InputAdress placeholder="Rua" id="intTwo" type="text" />
            <div>
              <InputAdress placeholder="Número" id="intThree" type="text" />
              <InputAdress placeholder="Complemento" id="intFour" type="text" />
            </div>
            <div>
              <InputAdress placeholder="Bairro" id="intFive" type="text" />
              <InputAdress placeholder="Cidade" id="intSix" type="text" />
              <InputAdress placeholder="UF" id="intSeven" type="text" />
            </div>
          </FormAdress>
        </Adress>
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
      </CompleteOrder>
      <ConfirmOrder>
        <div>items</div>
        <div>informação</div>
        <NavLink to="/checkout/sucess" title="Sucesso">
          Confirmar Pedido
        </NavLink>
      </ConfirmOrder>
    </CheckoutContainer>
  )
}
