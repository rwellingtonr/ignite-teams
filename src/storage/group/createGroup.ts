import AsyncStorage from '@react-native-async-storage/async-storage'
import { configProps } from '@storage/storageConfig'
import { getAllGroups } from './getAllGroups'
import { AppError } from '@utils/AppError'

export const createGroup = async (groupName: string) => {
  const groups = await getAllGroups()

  const groupAlreadyExists = groups.includes(groupName)

  if (groupAlreadyExists) {
    throw new AppError('Grupo previamente cadastrado!', 409)
  }

  groups.push(groupName)

  await AsyncStorage.setItem(configProps.group, JSON.stringify(groups))
}
