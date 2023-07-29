import styled, { css } from 'styled-components/native'

export const PlayerContainer = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${(props) => props.theme.colors.gray[600]};
`
export const Form = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray[700]};
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`
export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`
export const NumbersOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-size: ${theme.fontSize.sm};
    font-family: ${theme.fontFamily.bold};
  `}
`
