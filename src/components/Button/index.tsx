import { TouchableOpacityProps } from 'react-native'
import { ButtonAction, ButtonContainer, ButtonLabel, type Variants } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  variant: Variants
  label: string
}
export function Button({ label, ...props }: ButtonProps) {
  return (
    <ButtonContainer>
      <ButtonAction {...props}>
        <ButtonLabel>{label}</ButtonLabel>
      </ButtonAction>
    </ButtonContainer>
  )
}
