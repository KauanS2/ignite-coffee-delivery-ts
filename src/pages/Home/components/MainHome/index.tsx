import { Status } from '../Status'
import { BoxContainerHome, HomeBox } from './styles'
import imagem from '../../assets/imagem.svg'

export function MainHome() {
  return (
    <BoxContainerHome>
      <HomeBox>
        <p>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </p>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />
          qualquer hora
        </h3>
        <Status />
      </HomeBox>
      <img src={imagem} alt="" />
    </BoxContainerHome>
  )
}
