import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'primary' | 'secondary'

type ButtonIconProps = {
  variant: ButtonIconTypeStyleProps
}

export const ButtonIconContainer = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  opacity: ${(props) => (props?.disabled ? 0.4 : 1)};
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`
export const Icon = styled(MaterialIcons).attrs<ButtonIconProps>(({ theme, variant }) => ({
  size: 24,
  color: variant === 'primary' ? theme.colors.green[700] : theme.colors.red[700],
}))``
