import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText, ThemedView } from '@/components/ThemeComponent'
import { Colors } from '@/constants/Colors'
import { useThemeStore } from '@/stores/themeStore'
import { useColorScheme } from '@/hooks/useColorScheme'

const classes = [
  {
    id: '1',
    title: 'Morning Bootcamp',
    time: '6:00 AM',
    instructor: 'Coach Mike',
  },
  { id: '2', title: 'Yoga Flow', time: '8:00 AM', instructor: 'Coach Sarah' },
  {
    id: '3',
    title: 'Strength Training',
    time: '12:00 PM',
    instructor: 'Coach Dave',
  },
  { id: '4', title: 'HIIT Blast', time: '5:00 PM', instructor: 'Coach Lisa' },
]

export default function ClassScheduleScreen() {
  // Retrieve themeMode from the store.
  const { themeMode } = useThemeStore()
  // Get the device color scheme.
  const deviceScheme = useColorScheme()
  // Determine the effective theme.
  const currentTheme = themeMode === 'auto' ? deviceScheme : themeMode // currentTheme should be "light" or "dark"

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: Colors[currentTheme].background },
      ]}
    >
      <ThemedText
        type="title"
        style={styles.header}
        lightColor={Colors[currentTheme].text}
        darkColor={Colors[currentTheme].text}
      >
        Class Schedule
      </ThemedText>
      <FlatList
        data={classes}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ThemedView
            variant="card"
            style={styles.card}
            lightColor={Colors[currentTheme].card}
            darkColor={Colors[currentTheme].card}
          >
            <ThemedText
              type="defaultSemiBold"
              lightColor={Colors[currentTheme].text}
              darkColor={Colors[currentTheme].text}
            >
              {item.title}
            </ThemedText>
            <ThemedText
              lightColor={Colors[currentTheme].text}
              darkColor={Colors[currentTheme].text}
            >
              {item.time} — {item.instructor}
            </ThemedText>
          </ThemedView>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, padding: 16 },
  header: { textAlign: 'center', marginBottom: 16 },
  list: { paddingBottom: 16 },
  card: { padding: 16, borderRadius: 8, marginBottom: 12 },
})
