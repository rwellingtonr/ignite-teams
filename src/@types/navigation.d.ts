type RoutesProps = {
  groups: undefined
  'new-group': undefined
  players: {
    group: string
  }
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RoutesProps {}
  }
}
