import {
  BoxContainerHome,
  CoffeList,
  HomeBox,
  HomeContainer,
  IconQuality,
  QualityContainer,
  StatusQuality,
  TitleCoffe,
} from './styles'
import imagem from '../../assets/imagem.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CardProducts } from './components/CardProducts'
export function Home() {
  return (
    <HomeContainer>
      <BoxContainerHome>
        <HomeBox>
          <p>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </p>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />
            qualquer hora
          </h3>
          <QualityContainer>
            <StatusQuality>
              <IconQuality statusColor="yellowDark">
                <ShoppingCart />
              </IconQuality>
              Compra simples e segura
            </StatusQuality>
            <StatusQuality>
              <IconQuality statusColor="gray">
                <Package />
              </IconQuality>
              Embalagem mantém o café intacto
            </StatusQuality>
            <StatusQuality>
              <IconQuality statusColor="yellow">
                <Timer />
              </IconQuality>
              Entrega rápida e rastreada
            </StatusQuality>
            <StatusQuality>
              <IconQuality statusColor="purple">
                <Coffee />
              </IconQuality>
              O café chega fresquinho até você
            </StatusQuality>
          </QualityContainer>
        </HomeBox>
        <img src={imagem} alt="" />
      </BoxContainerHome>

      <TitleCoffe>Nossos cafés</TitleCoffe>
      <CoffeList>
        <CardProducts />
        <CardProducts />
        <CardProducts />
        <CardProducts />
        <CardProducts />
        <CardProducts />
      </CoffeList>
    </HomeContainer>
  )
}
