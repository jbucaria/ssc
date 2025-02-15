import React from 'react'
import { ScrollView, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText, ThemedView } from '@/components/ThemeComponent'
import { Colors } from '@/constants/Colors'
import { useThemeStore } from '@/stores/themeStore'
import { useColorScheme } from '@/hooks/useColorScheme'

export default function WorkoutInfoScreen() {
  const { themeMode } = useThemeStore()
  const deviceColorScheme = useColorScheme()
  // If the user setting is 'auto', fall back to the device's setting.
  const currentTheme = themeMode === 'auto' ? deviceColorScheme : themeMode

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: Colors[currentTheme].background },
      ]}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedText
          type="title"
          style={styles.header}
          lightColor={Colors[currentTheme].text}
          darkColor={Colors[currentTheme].text}
        >
          Workout of the Day
        </ThemedText>
        <ThemedView
          variant="card"
          style={styles.card}
          lightColor={Colors[currentTheme].background}
          darkColor={Colors[currentTheme].background}
        >
          <ThemedText
            type="subtitle"
            style={styles.subheader}
            lightColor={Colors[currentTheme].text}
            darkColor={Colors[currentTheme].text}
          >
            Full Body Circuit
          </ThemedText>
          <ThemedText
            style={styles.body}
            lightColor={Colors[currentTheme].text}
            darkColor={Colors[currentTheme].text}
          >
            Warm-up: 10 minutes jogging{'\n'}3 Rounds of:{'\n'}- 15 push-ups
            {'\n'}- 20 squats{'\n'}- 15 burpees{'\n'}- 20 sit-ups{'\n'}
            Cool down: 10 minutes stretching
          </ThemedText>
        </ThemedView>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x200' }}
          style={styles.image}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { padding: 16 },
  header: { textAlign: 'center', marginBottom: 24 },
  card: { padding: 16, borderRadius: 8, marginBottom: 16 },
  subheader: { marginBottom: 8 },
  body: { fontSize: 16, lineHeight: 24 },
  image: { width: '100%', height: 200, borderRadius: 8 },
})
