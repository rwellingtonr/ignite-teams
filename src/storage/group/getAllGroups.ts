import AsyncStorage from '@react-native-async-storage/async-storage'
import { configProps } from '@storage/storageConfig'

export const getAllGroups = async () => {
  const storage = await AsyncStorage.getItem(configProps.group)

  if (!storage) return []

  const groups: string[] = JSON.parse(storage)
  return groups
}
