import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import coffeone from '../../../../assets/coffeone.svg'
import {
  AddItems,
  CardContainer,
  CardQuantityBox,
  CardValue,
  CoffeStatus,
  Description,
  Value,
} from './styles'
export function CardProducts() {
  return (
    <CardContainer>
      <img src={coffeone} alt="" />
      <CoffeStatus>Tradicional</CoffeStatus>
      <p>Expresso Tradicional</p>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <CardValue>
        <Value>9,90</Value>
        <CardQuantityBox>
          <AddItems>
            <Minus />
            1
            <Plus />
          </AddItems>
          <button>
            <ShoppingCart size={17} />
          </button>
        </CardQuantityBox>
      </CardValue>
    </CardContainer>
  )
}
