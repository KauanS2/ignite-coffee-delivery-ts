import { CoffeList, HomeContainer, TitleCoffe } from './styles'

import coffeone from '../../assets/coffeone.svg'
import coffetwo from '../../assets/coffeT.svg'
import { CardProducts } from './components/CardProducts'
import { MainHome } from './components/MainHome'

export function Home() {
  return (
    <HomeContainer>
      <MainHome />

      <TitleCoffe>Nossos cafés</TitleCoffe>
      <CoffeList>
        <CardProducts
          name="Expresso Tradicional"
          type="Tradicional"
          image={coffeone}
          description="O tradicional café feito com água quente e grãos moídos"
          price={9.91}
        />
        <CardProducts
          name="Expresso Americano"
          type="Tradicional"
          image={coffetwo}
          description="Expresso diluído, menos intenso que o tradicional"
          price={5.0}
        />
        <CardProducts
          name="Expresso Americano"
          type="Tradicional"
          image={coffetwo}
          description="Expresso diluído, menos intenso que o tradicional"
          price={5.0}
        />
        <CardProducts
          name="Expresso Americano"
          type="Tradicional"
          image={coffetwo}
          description="Expresso diluído, menos intenso que o tradicional"
          price={5.0}
        />
      </CoffeList>
    </HomeContainer>
  )
}
