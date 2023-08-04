import AsyncStorage from '@react-native-async-storage/async-storage'
import { configProps } from '@storage/storageConfig'
import { getAllGroups } from './getAllGroups'

export const removeGroupByName = async (group: string) => {
  const playersKey = `${configProps.player}-${group}`

  const [, storedGroups] = await Promise.all([AsyncStorage.removeItem(playersKey), getAllGroups()])

  const filteredGroups = storedGroups.filter((storedGroup) => storedGroup !== group)
  await AsyncStorage.setItem(configProps.group, JSON.stringify(filteredGroups))
}
