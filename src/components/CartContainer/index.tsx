import { ShoppingCart } from 'phosphor-react'
import { CartCount, ShoppingCartContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function CartContainer() {
  return (
    <ShoppingCartContainer>
      <NavLink to="/checkout" title="Checkout">
        <ShoppingCart size={22} />
      </NavLink>
      <CartCount>1</CartCount>
    </ShoppingCartContainer>
  )
}
