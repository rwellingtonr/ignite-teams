import AsyncStorage from '@react-native-async-storage/async-storage'
import { configProps } from '@storage/storageConfig'
import type { PlayerStorageDTO } from './playerDto'
import { getAllPlayersByGroup } from './getAllPlayersByGroup'
import { AppError } from '@utils/AppError'

export const addPlayerByGroup = async (props: PlayerStorageDTO, group: string) => {
  const storagePlayers = await getAllPlayersByGroup(group)

  const playerAlreadyExists = storagePlayers.filter((player) => player.name === props.name)

  if (playerAlreadyExists.length) {
    throw new AppError('Jogador já cadastrado em uma equipe', 409)
  }

  const players = [...storagePlayers, props]

  const payload = JSON.stringify(players)

  const key = `${configProps.player}-${group}`
  await AsyncStorage.setItem(key, payload)
}
