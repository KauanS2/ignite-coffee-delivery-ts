import { CartBox, HeaderContainer } from './styles'
import logo from '../../assets/logomain.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <CartBox>
        <span>
          <MapPin size={22} />
          <p>Ceara, CE</p>
        </span>
        <NavLink to="checkout" title="Checkout">
          <ShoppingCart size={22} />
        </NavLink>
      </CartBox>
    </HeaderContainer>
  )
}
