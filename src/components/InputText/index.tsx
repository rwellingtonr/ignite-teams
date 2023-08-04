import { TextInput, TextInputProps } from 'react-native'
import { InputTextContainer } from './styles'

interface InputTextProps extends TextInputProps {
  inputRef?: React.RefObject<TextInput>
}

export function InputText({ inputRef, ...props }: InputTextProps) {
  return <InputTextContainer ref={inputRef} {...props} />
}
