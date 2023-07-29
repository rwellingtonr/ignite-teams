import * as S from './styles'
import { ButtonIcon } from '@components/ButtonIcon'

type PlayerCardProps = {
  playerName: string
  onRemove: (is: string) => void
}

export function PlayerCard(props: PlayerCardProps) {
  return (
    <S.PlayerCardContainer>
      <S.PlayerIcon name="person" />
      <S.PlayerName>{props.playerName}</S.PlayerName>
      <ButtonIcon
        icon="close"
        variant="secondary"
        onPress={() => props.onRemove(props.playerName)}
      />
    </S.PlayerCardContainer>
  )
}
