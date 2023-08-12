import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  AddItems,
  CardContainer,
  CardQuantityBox,
  CardValue,
  CoffeStatus,
  Description,
  Value,
} from './styles'
import { createContext, useState } from 'react'

interface CardProductsProps {
  image: string
  name: string
  price: number
  description: string
  type: string
}

interface CardContextType {
  item: CardProductsProps[]
}

export const ItemContext = createContext({} as CardContextType)

export function CardProducts({
  description,
  image,
  name,
  price,
  type,
}: CardProductsProps) {
  const [quantity, setQuantity] = useState(1)

  function handleQuantityItemsAdd() {
    setQuantity((state) => state + 1)
  }

  function handleQuantityItemsMinus() {
    if (quantity === 0) {
      setQuantity(0)
    } else {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddToCart() {}

  return (
    <CardContainer>
      <img src={image} alt="" />
      <CoffeStatus>{type}</CoffeStatus>
      <p>{name}</p>
      <Description>{description}</Description>
      <CardValue>
        <Value>{(price * quantity).toFixed(2)}</Value>
        <CardQuantityBox>
          <AddItems>
            <Minus onClick={handleQuantityItemsMinus} />
            {quantity}
            <Plus onClick={handleQuantityItemsAdd} />
          </AddItems>
          <button onClick={handleAddToCart}>
            <ShoppingCart size={17} />
          </button>
        </CardQuantityBox>
      </CardValue>
    </CardContainer>
  )
}
