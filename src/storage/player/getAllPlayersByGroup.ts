import AsyncStorage from '@react-native-async-storage/async-storage'
import { configProps } from '@storage/storageConfig'
import type { PlayerStorageDTO } from './playerDto'

export const getAllPlayersByGroup = async (group: string) => {
  const key = `${configProps.player}-${group}`
  const storage = await AsyncStorage.getItem(key)

  if (!storage) return []

  const players: PlayerStorageDTO[] = JSON.parse(storage)

  return players
}
