import React from 'react'
import { ScrollView, StyleSheet, Switch, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText, ThemedView } from '@/components/ThemeComponent'
import { Colors } from '@/constants/Colors'
import { useAppTheme } from '@/context/ThemeContext'

export default function WorkoutInfoScreen() {
  const { theme, toggleTheme } = useAppTheme()
  const currentTheme = theme

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: Colors[currentTheme].background },
      ]}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.toggleContainer}>
          <ThemedText
            type="defaultSemiBold"
            lightColor={Colors.light.text}
            darkColor={Colors.dark.text}
          >
            Light
          </ThemedText>
          <Switch
            value={currentTheme === 'dark'}
            onValueChange={toggleTheme}
            thumbColor={
              currentTheme === 'dark' ? Colors.dark.accent : Colors.light.accent
            }
            trackColor={{
              false: Colors.light.backgroundSecondary,
              true: Colors.dark.backgroundSecondary,
            }}
          />
          <ThemedText
            type="defaultSemiBold"
            lightColor={Colors.light.text}
            darkColor={Colors.dark.text}
          >
            Dark
          </ThemedText>
        </View>
        <ThemedText
          type="title"
          style={styles.header}
          lightColor={Colors.light.text}
          darkColor={Colors.dark.text}
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
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  header: { textAlign: 'center', marginBottom: 24 },
  card: { padding: 16, borderRadius: 8, marginBottom: 16 },
  subheader: { marginBottom: 8 },
  body: { fontSize: 16, lineHeight: 24 },
  image: { width: '100%', height: 200, borderRadius: 8 },
})
