import { theme } from '@theme/index'
import { TextInputProps } from 'react-native'
import { InputTextContainer } from './styles'

interface InputTextProps extends TextInputProps {}

export function InputText(props: InputTextProps) {
  return <InputTextContainer {...props} placeholderTextColor={theme.colors.gray[400]} />
}
