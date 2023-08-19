import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { IconQuality, QualityContainer, StatusQuality } from './styles'

export function Status() {
  return (
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
  )
}
