import { StatusBar } from 'react-native'

import { ThemeProvider } from 'styled-components'
import { theme } from '@theme/index'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading.tsx'
import { SafeAreaContainer } from '@theme/app'
import { Players } from '@screens/Players'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? (
        <SafeAreaContainer>
          <Players />
          {/* <NewGroup /> */}
          {/* <Groups /> */}
          <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
        </SafeAreaContainer>
      ) : (
        <Loading />
      )}
    </ThemeProvider>
  )
}
