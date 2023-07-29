import { TextInput } from 'react-native'
import { styled } from 'styled-components/native'

export const InputTextContainer = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray[400],
}))`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${(props) => props.theme.colors.gray[700]};
  color: ${(props) => props.theme.colors.white};

  border-radius: 6px;
  padding: 16px;

  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.md};
`
