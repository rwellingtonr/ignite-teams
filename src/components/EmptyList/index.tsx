import * as S from './styles'

type EmptyListProps = {
  message: string
}

export function EmptyList({ message }: EmptyListProps) {
  return (
    <S.EmptyListContainer>
      <S.MessageEmptyList>{message}</S.MessageEmptyList>
    </S.EmptyListContainer>
  )
}
