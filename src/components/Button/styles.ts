import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type Variants = 'primary' | 'secondary'

type ButtonVariantProps = {
  variant: Variants
}

export const ButtonAction = styled(TouchableOpacity)<ButtonVariantProps>`
  min-height: 56px;
  max-height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.green[700] : theme.colors.red[700]};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`

export const ButtonLabel = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.white};
    font-family: ${props.theme.fontFamily.bold};
    font-size: ${props.theme.fontSize.md};
  `}
`
