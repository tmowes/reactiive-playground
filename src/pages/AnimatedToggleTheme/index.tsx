import React, { useEffect, useState } from 'react'
import { Switch, View } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome'

import { styles } from './styles'

const colors = {
  dark: {
    background: '#14151B',
    circle: 'orangered',
    text: 'white',
  },
  light: {
    background: 'whitesmoke',
    circle: 'dodgerblue',
    text: '#14151B',
  },
}

type Theme = 'dark' | 'light'

export default function AnimatedToggleTheme() {
  const [theme, setTheme] = useState<Theme>('dark')
  const progress = useDerivedValue(
    () => (theme === 'dark' ? withTiming(0) : withTiming(1)),
    [theme],
  )

  const animatedBackground = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.dark.background, colors.light.background],
    )
    return {
      backgroundColor,
    }
  })
  const animatedCircle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.dark.circle, colors.light.circle],
    )
    return {
      backgroundColor,
    }
  })
  const animatedText = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [colors.dark.text, colors.light.text],
    )
    return {
      color,
    }
  })

  useEffect(() => {}, [])

  return (
    <Animated.View style={[styles.container, animatedBackground]}>
      <View style={styles.button}>
        <Animated.Text style={[styles.title, animatedText]}>
          Animated Theme Switch
        </Animated.Text>
      </View>

      <Animated.View style={[styles.bar, animatedCircle]}>
        <Icon name="superpowers" size={48} color="white" />
        <Animated.Text style={[styles.title, animatedText]}>THEME TOGGLE</Animated.Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggled => setTheme(toggled ? 'dark' : 'light')}
          trackColor={{ true: 'white', false: 'white' }}
          thumbColor={theme === 'dark' ? 'orangered' : 'dodgerblue'}
        />
      </Animated.View>
    </Animated.View>
  )
}
