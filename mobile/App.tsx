import "react-native-gesture-handler"
import { useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import * as SplashScreen from "expo-splash-screen"

import { useFonts, Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter"

import { theme } from "./src/theme"
import Widget from "./src/components/Widget/index"

export default function App() {
  SplashScreen.preventAutoHideAsync()

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  }) 

  useEffect(() => {
    SplashScreen.hideAsync()
  }, [fontsLoaded])

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>

      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent
      />

      <Widget />
    </View>
  )
}
