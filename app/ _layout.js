import React, { useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import 'react-native-reanimated'
import {
  NavigationThemeProvider,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native'
import { ThemeProvider, useAppTheme } from '@/context/ThemeContext'
import { useColorScheme } from '@/hooks/useColorScheme'
import { ThemedText } from '@/components/ThemeComponent'
import { Stack } from 'expo-router'

function CustomHeader() {
  useEffect(() => {
    console.log('Fonts loaded value:', loaded)
    if (loaded) {
      console.log('Hiding splash screen now')
      SplashScreen.hideAsync()
    }
  }, [loaded])
  // You can add a custom header here if desired.
  return (
    <View style={styles.headerContainer}>
      <ThemedText type="title" style={styles.headerTitle}>
        Sevensprings CrossFit
      </ThemedText>
      {/* If you don't need a drawer, remove any hamburger button */}
    </View>
  )
}

function LayoutContent() {
  const { theme } = useAppTheme()
  const deviceColorScheme = useColorScheme()
  const effectiveTheme = theme === 'auto' ? deviceColorScheme : theme

  return (
    <NavigationThemeProvider
      value={effectiveTheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <CustomHeader />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </NavigationThemeProvider>
  )
}

export default function Layout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) return null

  return (
    <ThemeProvider>
      <LayoutContent />
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#000',
    padding: 16,
    justifyContent: 'center', // centers header content horizontally
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: '#D4AF37', // gold accent
  },
})
