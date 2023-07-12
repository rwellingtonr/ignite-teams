import { Button } from '@components/Button'
import { EmptyList } from '@components/EmptyList'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { GroupsContainer } from './styles'

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['hey'])

  return (
    <GroupsContainer>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups?.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <EmptyList message="Que tal cadastrar a primeira turma?" />}
      />
      <Button label="Criar nova turma" variant="primary" />
    </GroupsContainer>
  )
}
