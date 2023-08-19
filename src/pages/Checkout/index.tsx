import { NavLink } from 'react-router-dom'
import {
  Adress,
  CheckoutContainer,
  CompleteOrder,
  ConfirmOrder,
  ConfirmOrderListItems,
  IconAdress,
  InformationItems,
} from './styles'
import { MapPinLine } from 'phosphor-react'
import { ItemsCart } from './ItemsCart'
import { InputsContainer } from './Inputs'
import { PaymentMethod } from './PaymentMethod'

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
          <InputsContainer />
        </Adress>

        <PaymentMethod />
      </CompleteOrder>
      <ConfirmOrder>
        <ConfirmOrderListItems>
          <ItemsCart />
          <ItemsCart />
        </ConfirmOrderListItems>

        <InformationItems>
          <span>
            Total de items
            <p>R$ 29,70</p>
          </span>
          <span>
            Entrega
            <p>R$ 3,50</p>
          </span>
          <h4>
            Total
            <p>R$ 33,20</p>
          </h4>
        </InformationItems>
        <NavLink to="/checkout/sucess" title="Sucesso">
          Confirmar Pedido
        </NavLink>
      </ConfirmOrder>
    </CheckoutContainer>
  )
}
