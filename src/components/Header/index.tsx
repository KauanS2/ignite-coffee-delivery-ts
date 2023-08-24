import { CartBox, HeaderContainer, TagLocal } from './styles'
import logo from '../../assets/logomain.svg'
import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CartContainer } from '../CartContainer'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home Page">
        <img src={logo} alt="" />
      </NavLink>
      <CartBox>
        <TagLocal>
          <MapPin size={22} />
          <p>Porto Alegre, RS</p>
        </TagLocal>
        <CartContainer />
      </CartBox>
    </HeaderContainer>
  )
}
