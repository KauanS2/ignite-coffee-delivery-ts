import { ButtomItemContainer, ItemContainer, ItemContainerInfo } from './styles'
import coffeImg from '../../../assets/coffeone.svg'
import { Minus, Plus, Trash } from 'phosphor-react'

export function ItemsCart() {
  return (
    <ItemContainer>
      <img src={coffeImg} alt="" />
      <ItemContainerInfo>
        <p>Expresso Tradicional</p>
        <ButtomItemContainer>
          <button>
            <Minus />
            1
            <Plus />
          </button>
          <button>
            <Trash />
            Remover
          </button>
        </ButtomItemContainer>
      </ItemContainerInfo>
      <span>R$ 9,90</span>
    </ItemContainer>
  )
}
