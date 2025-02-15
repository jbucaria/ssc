import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useThemeColor } from '@/hooks/useThemeColor'

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  let textStyle
  switch (type) {
    case 'title':
      textStyle = styles.title
      break
    case 'subtitle':
      textStyle = styles.subtitle
      break
    case 'defaultSemiBold':
      textStyle = styles.defaultSemiBold
      break
    case 'link':
      textStyle = styles.link
      break
    default:
      textStyle = styles.default
  }

  return <Text style={[{ color }, textStyle, style]} {...rest} />
}

export function ThemedView({
  style,
  lightColor,
  darkColor,
  variant = 'default',
  ...otherProps
}) {
  let backgroundKey = 'background'
  if (variant === 'secondary') {
    backgroundKey = 'backgroundSecondary'
  } else if (variant === 'card') {
    backgroundKey = 'card'
  }

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    backgroundKey
  )

  return <View style={[{ backgroundColor }, style]} {...otherProps} />
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Montserrat',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 42,
    letterSpacing: 0.5,
    fontFamily: 'Oswald',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 28,
    fontFamily: 'Oswald',
  },
  link: {
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: 'underline',
    fontFamily: 'Montserrat',
    color: '#D4AF37',
  },
})
