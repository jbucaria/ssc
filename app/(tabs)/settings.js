import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Haptics from 'expo-haptics'
import { ThemedText } from '@/components/ThemeComponent'
import { useThemeStore } from '@/stores/themeStore'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

export default function SettingsScreen() {
  const { themeMode, setThemeMode } = useThemeStore()
  const deviceScheme = useColorScheme()
  // effectiveTheme is determined by whether the user selected a fixed theme or 'auto'
  const effectiveTheme = themeMode === 'auto' ? deviceScheme : themeMode

  // Use the effective theme's accent for borders and background of selected buttons
  const currentAccent = Colors[effectiveTheme].accent

  // Dynamic button style: border color based on effective theme and background if selected.
  const getButtonStyle = mode => [
    styles.option,
    { borderColor: Colors[effectiveTheme].accent },
    themeMode === mode && { backgroundColor: currentAccent },
  ]

  // Dynamic text style: if selected, white text; otherwise, use the effective theme's text color.
  const getTextStyle = mode =>
    themeMode === mode
      ? { color: '#fff' }
      : { color: Colors[effectiveTheme].text }

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: Colors[effectiveTheme].background },
      ]}
    >
      <View style={styles.container}>
        <ThemedText
          type="title"
          style={styles.header}
          lightColor={Colors[effectiveTheme].text}
          darkColor={Colors[effectiveTheme].text}
        >
          Settings
        </ThemedText>
        <ThemedText
          type="subtitle"
          style={styles.subtitle}
          lightColor={Colors[effectiveTheme].text}
          darkColor={Colors[effectiveTheme].text}
        >
          Theme Mode
        </ThemedText>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={getButtonStyle('auto')}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
              setThemeMode('auto')
            }}
          >
            <ThemedText type="defaultSemiBold" style={getTextStyle('auto')}>
              Auto
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={getButtonStyle('dark')}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
              setThemeMode('dark')
            }}
          >
            <ThemedText type="defaultSemiBold" style={getTextStyle('dark')}>
              Dark
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={getButtonStyle('light')}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
              setThemeMode('light')
            }}
          >
            <ThemedText type="defaultSemiBold" style={getTextStyle('light')}>
              Light
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, padding: 16 },
  header: { textAlign: 'center', marginBottom: 24 },
  subtitle: { textAlign: 'center', marginBottom: 16 },
  optionsContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderRadius: 8,
  },
})
