import * as S from './styles'

type HighlightProps = {
  title: string
  subtitle: string
}

export function Highlight({ subtitle, title }: HighlightProps) {
  return (
    <S.HighlightContainer>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.HighlightContainer>
  )
}
