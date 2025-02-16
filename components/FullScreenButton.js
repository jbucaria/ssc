import React from 'react'
import { TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { ThemedText } from '@/components/ThemeComponent'

export default function FullscreenButton() {
  const goFullScreen = () => {
    if (Platform.OS === 'web' && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error('Error attempting to enable full-screen mode:', err)
      })
    }
  }

  return (
    <TouchableOpacity style={styles.button} onPress={goFullScreen}>
      <ThemedText type="defaultSemiBold" style={styles.buttonText}>
        Full Screen
      </ThemedText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
})
