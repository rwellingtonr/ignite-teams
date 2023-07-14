import { css, styled } from 'styled-components/native'

export const HighlightContainer = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Title = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.fontSize.xl};
    font-family: ${props.theme.fontFamily.bold};
    color: ${props.theme.colors.white};
  `}
  text-align: center;
`
export const Subtitle = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.fontSize.md};
    font-family: ${props.theme.fontFamily.regular};
    color: ${props.theme.colors.gray[300]};
  `}
  text-align: center;
`
