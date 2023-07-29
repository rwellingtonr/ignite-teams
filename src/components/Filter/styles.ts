import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type FilterStyleProps = {
  isActivated: boolean
}

export const FilterContainer = styled(TouchableOpacity)<FilterStyleProps>`
  ${(props) =>
    props.isActivated &&
    css`
      border: 1px solid ${props.theme.colors.green[700]};
    `}

  border-radius: 4px;
  margin-right: 12px;
  margin-top: 5px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm};
    color: ${theme.colors.white};
  `}
  text-transform: uppercase;
`
