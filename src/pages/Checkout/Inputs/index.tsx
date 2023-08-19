import { FormAdress, InputAdress } from './styles'

export function InputsContainer() {
  return (
    <FormAdress>
      <InputAdress placeholder="CEP" id="intOne" type="text" />
      <InputAdress placeholder="Rua" id="intTwo" type="text" />
      <div>
        <InputAdress placeholder="Número" id="intThree" type="text" />
        <InputAdress placeholder="Complemento" id="intFour" type="text" />
      </div>
      <div>
        <InputAdress placeholder="Bairro" id="intFive" type="text" />
        <InputAdress placeholder="Cidade" id="intSix" type="text" />
        <InputAdress placeholder="UF" id="intSeven" type="text" />
      </div>
    </FormAdress>
  )
}
