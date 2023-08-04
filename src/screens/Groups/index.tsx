import { Button } from '@components/Button'
import { EmptyList } from '@components/EmptyList'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { ButtonWrapper, GroupsContainer } from './styles'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { getAllGroups } from '@storage/group/getAllGroups'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const { navigate } = useNavigation()

  const handleCreateNewGroup = () => navigate('new-group')

  const fetchGroups = async () => {
    try {
      const groupsFound = await getAllGroups()
      setGroups(groupsFound)
    } catch (err) {
      console.error(err)
    }
  }

  const handleOpenGroup = async (group: string) => {
    navigate('players', { group })
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, []),
  )

  return (
    <GroupsContainer>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard onPress={() => handleOpenGroup(item)} title={item} />}
        contentContainerStyle={groups?.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <EmptyList message="Que tal cadastrar a primeira turma?" />}
      />
      <ButtonWrapper>
        <Button label="Criar nova turma" variant="primary" onPress={handleCreateNewGroup} />
      </ButtonWrapper>
    </GroupsContainer>
  )
}
