import { styled } from 'styled-components/native'
import { UsersThree } from 'phosphor-react-native'

export const NewGroupContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.gray[600]};
  padding: 24px;
`
export const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
`

export const UserIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.colors.green[700],
}))`
  align-self: center;
`
