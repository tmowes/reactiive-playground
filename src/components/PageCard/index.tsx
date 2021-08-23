import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

import Icon from 'react-native-vector-icons/FontAwesome'

import { SQUARE, styles } from './styles'
import { PageCardProps } from './types'

const { width } = Dimensions.get('window')
export default function PageCard(props: PageCardProps) {
  const { word, index, translateX } = props

  const animatedRect = useAnimatedStyle(() => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    )
    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [8, SQUARE / 2, 8],
      Extrapolate.CLAMP,
    )
    return {
      transform: [{ scale }],
      borderRadius,
    }
  })

  const animatedText = useAnimatedStyle(() => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP,
    )
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [SQUARE, 0, -SQUARE],
      Extrapolate.CLAMP,
    )
    return {
      opacity,
      transform: [{ translateY }],
    }
  })

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: `rgba(255, 255, 255, 0.${index + 1})` },
      ]}
    >
      <Animated.View style={[styles.bar, animatedRect]}>
        <Icon name="superpowers" size={48} color="white" />
        <Animated.View style={animatedText}>
          <Text style={styles.title}>{word}</Text>
        </Animated.View>
      </Animated.View>
    </View>
  )
}
