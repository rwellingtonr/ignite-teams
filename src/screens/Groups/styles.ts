import styled from 'styled-components/native'

export const GroupsContainer = styled.View`
  flex: 1;
	background-color: ${(props) => props.theme.colors.gray[500]};
	color: ${(props) => props.theme.colors.gray[100]};
	align-items: center;
	justify-content: center;
`