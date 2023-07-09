import * as S from './styles'
import logo from '@assets/logo.png'
import type { HeaderProps } from './types'

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <S.HeaderContainer>
      {showBackButton && (
        <S.BackButton>
          <S.LeftArrow />
        </S.BackButton>
      )}
      <S.Logo source={logo} />
    </S.HeaderContainer>
  )
}
