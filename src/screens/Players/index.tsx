import * as S from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { InputText } from '@components/InputText'
import { Filter } from '@components/Filter'
import { Alert, FlatList, TextInput } from 'react-native'
import { useCallback, useEffect, useRef, useState } from 'react'
import { PlayerCard } from '@components/PlayerCard'
import { EmptyList } from '@components/EmptyList'
import { Button } from '@components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import { addPlayerByGroup } from '@storage/player/addPlayerByGroup'
import { AppError } from '@utils/AppError'
import { uid } from '@utils/uid'
import { getUsersByGroupAndTeam } from '@storage/player/getUsersByGroupAndTeam'
import type { PlayerStorageDTO } from '@storage/player/playerDto'
import { removePlayerById } from '@storage/player/removePlayerById'
import { removeGroupByName } from '@storage/group/removeGroupByName'

type RouteParams = {
  group: string
}

export function Players() {
  const [team, setTeam] = useState<string>('time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [playerName, setPlayerName] = useState<string>('')

  const inputRef = useRef<TextInput | null>(null)
  const { navigate } = useNavigation()
  const route = useRoute()
  const { group } = route.params as RouteParams

  const handleRemovePlayer = async (playerId: string) => {
    const playersCopy = players
    const filteredPlayers = playersCopy.filter((player) => player.id !== playerId)
    setPlayers(filteredPlayers)
    await removePlayerById(playerId, group)
  }

  const handleCreateNewPlayer = async () => {
    if (!playerName.trim()) {
      return Alert.alert('Novo jogador', 'Informe o nome do jogador!')
    }

    try {
      const newPlayer = {
        id: uid(),
        name: playerName,
        team,
      }

      await addPlayerByGroup(newPlayer, group)

      setPlayerName('')
      inputRef.current?.blur()

      setPlayers((state) => [...state, newPlayer])
    } catch (err) {
      console.error(err)
      if (err instanceof AppError) {
        return Alert.alert('Novo jogador', err.message)
      }
      Alert.alert('Novo jogador', 'Erro ao criar o novo jogador!')
    }
  }

  const handleRemoveGroup = async () => {
    try {
      await removeGroupByName(group)
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert('Remover grupo', err.message)
      }
      Alert.alert('Remover grupo', 'Erro ao remover o grupo!')
    }
  }

  const handleDeleteGroup = () => {
    Alert.alert('Remover', 'Deseja remover o grupo?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: async () => {
          await handleRemoveGroup()
          navigate('groups')
        },
      },
    ])
  }

  const fetchPlayersByTeam = useCallback(async () => {
    try {
      const playersFound = await getUsersByGroupAndTeam(group, team)

      setPlayers(playersFound)
    } catch (err) {
      console.error(err)
      if (err instanceof AppError) {
        return Alert.alert('Jogadores', err.message)
      }
      return Alert.alert('Jogadores', 'Erro ao buscar jogadores!')
    }
  }, [group, team])

  useEffect(() => {
    fetchPlayersByTeam()
  }, [fetchPlayersByTeam])

  return (
    <S.PlayerContainer>
      <Header showBackButton />
      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <S.Form>
        <InputText
          value={playerName}
          key={players.at(-1)?.id}
          onChangeText={setPlayerName}
          inputRef={inputRef}
          placeholder="nome da pessoa"
          keyboardType="default"
          autoCorrect={false}
          returnKeyType="done"
          onSubmitEditing={handleCreateNewPlayer}
        />

        <ButtonIcon icon="add" disabled={!playerName} onPress={handleCreateNewPlayer} />
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
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: player }) => (
          <PlayerCard onRemove={() => handleRemovePlayer(player.id)} playerName={player.name} />
        )}
        ListEmptyComponent={() => <EmptyList message="Não há pessoas nesse time!" />}
        contentContainerStyle={[{ paddingBottom: 100 }, !players?.length && { flex: 1 }]}
      />

      <Button onPress={handleDeleteGroup} label="Remover turma" variant="secondary" />
    </S.PlayerContainer>
  )
}
