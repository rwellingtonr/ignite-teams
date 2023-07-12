import { styled } from 'styled-components/native'

export const EmptyListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const MessageEmptyList = styled.Text`
  color: ${(props) => props.theme.colors.gray[300]};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-family: ${(props) => props.theme.fontFamily.regular};
`
