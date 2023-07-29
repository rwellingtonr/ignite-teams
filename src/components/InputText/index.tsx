import { TextInputProps } from 'react-native'
import { InputTextContainer } from './styles'

interface InputTextProps extends TextInputProps {}

export function InputText(props: InputTextProps) {
  return <InputTextContainer {...props} />
}
