import { TouchableOpacity } from 'react-native'
import { styled } from 'styled-components/native'
import { UsersThree } from 'phosphor-react-native'

export const GroupCardContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${(props) => props.theme.colors.gray[500]};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`
export const GroupCardTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors.gray[200]};
  font-family: ${(props) => props.theme.fontFamily.regular};
`

export const UsersThreeIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.green[700],
  weight: 'fill',
}))`
  margin-right: 20px;
`
