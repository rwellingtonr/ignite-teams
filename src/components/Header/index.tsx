import * as S from './styles'
import logo from '@assets/logo.png'
import type { HeaderProps } from './types'
import { useNavigation } from '@react-navigation/native'

export function Header({ showBackButton = false }: HeaderProps) {
  const { navigate } = useNavigation()

  const handleGoHome = () => navigate('groups')

  return (
    <S.HeaderContainer>
      {showBackButton && (
        <S.BackButton onPress={handleGoHome}>
          <S.LeftArrow />
        </S.BackButton>
      )}
      <S.Logo source={logo} />
    </S.HeaderContainer>
  )
}
