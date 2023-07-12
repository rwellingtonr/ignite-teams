import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type Variants = 'primary' | 'secondary'

type ButtonVariantProps = {
  variant: Variants
}

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`
export const ButtonAction = styled(TouchableOpacity)<ButtonVariantProps>`
  width: 90%;
  min-height: 56px;
  max-height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.green[700] : theme.colors.red[700]};
`

export const ButtonLabel = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.md};
`
