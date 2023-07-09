import { CaretLeft } from 'phosphor-react-native'
import { styled } from 'styled-components/native'

export const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
`

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`
export const BackButton = styled.TouchableOpacity`
  flex: 1;
`
export const LeftArrow = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.colors.white,
  size: 32,
}))``
