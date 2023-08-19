import { styled } from 'styled-components'

export const FormAdress = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  width: 35rem;

  #intOne {
    padding: 0.5rem;
    width: 12.5rem;
  }
  #intTwo {
    padding: 0.5rem;
    width: 100%;
  }
  div {
    display: flex;
    gap: 4px;
    #intThree {
      width: 1/3%;
      padding: 0.5rem;
    }
    #intFour {
      width: 100%;
      padding: 0.5rem;
    }
    #intFive {
      width: 1/3%;
      padding: 0.5rem;
    }
    #intSix {
      width: 100%;
      padding: 0.5rem;
    }
    #intSeven {
      width: 3.75rem;
      padding: 0.5rem;
    }
  }
`

export const InputAdress = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  border: 1px solid ${(props) => props.theme['base-button']};
  outline: none;
  align-items: center;
  border-radius: 4px;
  font-size: 0.875rem;
  line-height: 130%;

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`
