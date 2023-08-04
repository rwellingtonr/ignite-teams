import { getAllPlayersByGroup } from './getAllPlayersByGroup'

export const getUsersByGroupAndTeam = async (group: string, team: string) => {
  const players = await getAllPlayersByGroup(group)

  return players.filter((player) => player.team === team)
}
