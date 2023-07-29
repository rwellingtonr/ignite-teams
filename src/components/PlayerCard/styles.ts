import { MaterialIcons } from '@expo/vector-icons'
import styled, { css } from 'styled-components/native'

export const PlayerCardContainer = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${(props) => props.theme.colors.gray[500]};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`

export const PlayerName = styled.Text`
  flex: 1;
  text-transform: capitalize;

  ${({ theme }) => css`
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontFamily.regular};
    color: ${theme.colors.gray[200]};
  `}
`

export const PlayerIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray[200],
}))`
  margin: 0 4px 0 16px;
`
