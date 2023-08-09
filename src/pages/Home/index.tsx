import {
  HomeBox,
  HomeContainer,
  QualityContainer,
  StatusQuality,
} from './styles'
import imagem from '../../assets/imagem.svg'
export function Home() {
  return (
    <HomeContainer>
      <HomeBox>
        <p>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </p>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />
          qualquer hora
        </h3>
        <QualityContainer>
          <StatusQuality statusColor="yellowDark">
            Compra simples e segura
          </StatusQuality>
          <StatusQuality statusColor="gray">
            Embalagem mantém o café intacto
          </StatusQuality>
          <StatusQuality statusColor="yellow">
            Entrega rápida e rastreada
          </StatusQuality>
          <StatusQuality statusColor="purple">
            O café chega fresquinho até você
          </StatusQuality>
        </QualityContainer>
      </HomeBox>
      <img src={imagem} alt="" />
    </HomeContainer>
  )
}
