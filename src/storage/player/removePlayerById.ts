import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAllPlayersByGroup } from './getAllPlayersByGroup'
import { configProps } from '@storage/storageConfig'

export const removePlayerById = async (id: string, group: string) => {
  const players = await getAllPlayersByGroup(group)
  const playersFiltered = players.filter((player) => player.id !== id)

  const key = `${configProps.player}-${group}`
  await AsyncStorage.setItem(key, JSON.stringify(playersFiltered))
}
