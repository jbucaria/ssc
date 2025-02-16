import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'

const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  // Additional icons:
  previous: 'skip-previous',
  play: 'play-arrow',
  pause: 'pause',
  next: 'skip-next',
  volume: 'volume-up',
  'gearshape.fill': 'settings',
  calendar: 'calendar-today',
  reset: 'replay',
}

export function IconSymbol({ name, size = 24, color, style, weight }) {
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      style={style}
    />
  )
}
