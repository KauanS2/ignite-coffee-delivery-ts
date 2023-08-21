import { CartBox, HeaderContainer } from './styles'
import logo from '../../assets/logomain.svg'
import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContainer } from '../CartContainer/styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home Page">
        <img src={logo} alt="" />
      </NavLink>
      <CartBox>
        <span>
          <MapPin size={22} />
          <p>Porto Alegre, RS</p>
        </span>
        <ShoppingCartContainer />
      </CartBox>
    </HeaderContainer>
  )
}
