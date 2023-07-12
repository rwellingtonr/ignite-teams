import { styled } from 'styled-components/native'

export const HighlightContainer = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-family: ${(props) => props.theme.fontFamily.bold};
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`
export const Subtitle = styled.Text`
  font-size: ${(props) => props.theme.fontSize.md};
  font-family: ${(props) => props.theme.fontFamily.regular};
  text-align: center;
  color: ${(props) => props.theme.colors.gray[300]};
`
