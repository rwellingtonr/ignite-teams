import * as S from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { InputText } from '@components/InputText'
import { Filter } from '@components/Filter'
import { FlatList } from 'react-native'
import { useState } from 'react'
import { PlayerCard } from '@components/PlayerCard'
import { EmptyList } from '@components/EmptyList'
import { Button } from '@components/Button'

export function Players() {
  const [team, setTeam] = useState<string>('time A')
  const [players, setPlayers] = useState<string[]>(['Wellington', 'Well 2'])

  const handleRemovePlayer = (playerId: string) => {}

  return (
    <S.PlayerContainer>
      <Header showBackButton />
      <Highlight subtitle="Adicione a galera e separe os times" title="Nome da turma" />

      <S.Form>
        <InputText placeholder="nome da pessoa" keyboardType="default" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </S.Form>
      <S.HeaderList>
        <FlatList
          data={['time A', 'time B']}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter label={item} onPress={() => setTeam(item)} isActivated={team === item} />
          )}
        />
        <S.NumbersOfPlayers>{players?.length}</S.NumbersOfPlayers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: player }) => (
          <PlayerCard onRemove={handleRemovePlayer} playerName={player} />
        )}
        ListEmptyComponent={() => <EmptyList message="Não há pessoas nesse time!" />}
        contentContainerStyle={[{ paddingBottom: 100 }, !players?.length && { flex: 1 }]}
      />

      <Button label="Remover turma" variant="secondary" />
    </S.PlayerContainer>
  )
}
