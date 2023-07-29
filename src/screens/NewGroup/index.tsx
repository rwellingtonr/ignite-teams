import * as S from './styles'
import { useState } from 'react'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { InputText } from '@components/InputText'
import { useNavigation } from '@react-navigation/native'

export function NewGroup() {
  const [group, setGroup] = useState<string>('')

  const { navigate } = useNavigation()

  const handleNavigateToPlayers = () => {
    navigate('players', { group })
  }

  return (
    <S.NewGroupContainer>
      <Header showBackButton />
      <S.ContentContainer>
        <S.UserIcon />
        <Highlight title="Nova Turma" subtitle="Crie a turma para adicionar as pessoas" />

        <InputText
          placeholder="Nome da turma"
          accessibilityHint="Digite o nome da turma"
          onChangeText={setGroup}
        />
        <Button
          disabled={!group}
          label="Criar"
          variant="primary"
          style={{ marginTop: 16 }}
          onPress={handleNavigateToPlayers}
        />
      </S.ContentContainer>
    </S.NewGroupContainer>
  )
}
