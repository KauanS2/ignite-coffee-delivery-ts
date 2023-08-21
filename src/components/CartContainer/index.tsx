import { ShoppingCart } from 'phosphor-react'
import { ShoppingCartContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function CartContainer() {
  return (
    <ShoppingCartContainer>
      <NavLink to="/checkout" title="Checkout">
        <ShoppingCart size={22} />
        <span>1</span>
      </NavLink>
    </ShoppingCartContainer>
  )
}
