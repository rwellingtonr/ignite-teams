import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import * as S from './styles'

interface ButtonIconProps extends TouchableOpacityProps {
  variant?: S.ButtonIconTypeStyleProps
  icon: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({ variant = 'primary', icon, ...props }: ButtonIconProps) {
  return (
    <S.ButtonIconContainer {...props}>
      <S.Icon name={icon} variant={variant} />
    </S.ButtonIconContainer>
  )
}
