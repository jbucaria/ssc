// TimerComponent.js
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { ThemedText, ThemedView } from '@/components/ThemeComponent'
import { IconSymbol } from '@/components/ui/IconSymbol'

const windowHeight = Dimensions.get('window').height

export default function TimerComponent({
  time,
  onPlay,
  onStop,
  onReset,
  formatTime,
}) {
  return (
    <ThemedView style={[styles.timerCard, { height: windowHeight * 0.5 }]}>
      <View style={styles.timerDisplay}>
        <ThemedText type="title" style={styles.timerText}>
          {formatTime(time)}
        </ThemedText>
      </View>
      <View style={styles.timerControls}>
        <TouchableOpacity style={styles.controlButton} onPress={onPlay}>
          <IconSymbol name="play" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={onStop}>
          <IconSymbol name="pause" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={onReset}>
          <IconSymbol name="reset" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  timerCard: {
    backgroundColor: 'rgba(255,255,255,0.95)', // restored to original background
    borderRadius: 12,
    padding: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between', // push controls to the bottom
    marginBottom: 20,
  },
  timerText: {
    fontSize: 200,
    fontWeight: 'bold',
    color: '#D4AF37',
    textAlign: 'center',
  },
  timerControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  timerDisplay: {
    height: '50%', // This sets it to 50% of the timerCard's height
    justifyContent: 'center',
    alignItems: 'center',
  },

  controlButton: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
})
