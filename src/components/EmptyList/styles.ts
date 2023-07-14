import styled, { css } from 'styled-components/native'

export const EmptyListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const MessageEmptyList = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors.gray[300]};
    font-size: ${props.theme.fontSize.sm};
    font-family: ${props.theme.fontFamily.regular};
  `}
`
