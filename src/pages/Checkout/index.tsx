import {
  Adress,
  CheckoutContainer,
  CompleteOrder,
  ConfirmOrder,
  Payment,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder>
        <Adress>
          <span>Endereço</span>
          <div>
            <form action="">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </form>
          </div>
        </Adress>
        <Payment>
          <span>Pagamento</span>
          <button>TEste</button>
          <button>teste</button>
          <button>teste</button>
        </Payment>
      </CompleteOrder>
      <ConfirmOrder></ConfirmOrder>
    </CheckoutContainer>
  )
}
