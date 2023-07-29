import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

interface FilterProps extends TouchableOpacityProps, S.FilterStyleProps {
  label: string
}

export function Filter({ label, ...props }: FilterProps) {
  return (
    <S.FilterContainer {...props}>
      <S.Title>{label}</S.Title>
    </S.FilterContainer>
  )
}
