import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

interface GroupCardProps extends TouchableOpacityProps {
  title: string
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <S.GroupCardContainer {...rest}>
      <S.UsersThreeIcon />
      <S.GroupCardTitle>{title}</S.GroupCardTitle>
    </S.GroupCardContainer>
  )
}
