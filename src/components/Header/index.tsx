import { CartBox, HeaderContainer } from './styles'
import logo from '../../assets/logomain.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <CartBox>
        <span>
          <MapPin size={22} />
          <p>Ceara, CE</p>
        </span>
        <button>
          <ShoppingCart size={22} />
        </button>
      </CartBox>
    </HeaderContainer>
  )
}
