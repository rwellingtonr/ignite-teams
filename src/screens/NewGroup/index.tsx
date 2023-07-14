import * as S from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { InputText } from '@components/InputText'

export function NewGroup() {
  return (
    <S.NewGroupContainer>
      <Header showBackButton />
      <S.ContentContainer>
        <S.UserIcon />
        <Highlight title="Nova Turma" subtitle="Crie a turma para adicionar as pessoas" />

        <InputText placeholder="Nome da turma" accessibilityHint="Digite o nome da turma" />
        <Button label="Criar" variant="primary" style={{ marginTop: 16 }} />
      </S.ContentContainer>
    </S.NewGroupContainer>
  )
}
