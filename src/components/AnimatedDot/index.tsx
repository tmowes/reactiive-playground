import React from 'react'
import Animated, { interpolateColor, useAnimatedStyle } from 'react-native-reanimated'
import { PAGE_WIDTH } from '../OnboardingItem/styles'
import { styles } from './styles'
import { AnimatedDotProps } from './types'

export default function AnimatedDot(props: AnimatedDotProps) {
  const { index, translateX } = props
  const inputRange = [
    (index - 1) * PAGE_WIDTH,
    index * PAGE_WIDTH,
    (index + 1) * PAGE_WIDTH,
  ]
  const animatedDot = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(translateX.value, inputRange, [
      'black',
      'white',
      'black',
    ]),
  }))

  return <Animated.View style={[styles.container, animatedDot]} />
}
