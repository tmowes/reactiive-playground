import React from 'react'
import { Text, View } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { PAGE_WIDTH, styles } from './styles'
import { OnboardingItemProps } from './types'

export default function OnboardingItem(props: OnboardingItemProps) {
  const { page, index, translateX } = props
  const inputRange = [
    (index - 1) * PAGE_WIDTH,
    index * PAGE_WIDTH,
    (index + 1) * PAGE_WIDTH,
  ]

  const animatedCircle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(translateX.value, inputRange, [0, 1, 0], Extrapolate.CLAMP),
      },
    ],
  }))
  const animatedSkate = useAnimatedStyle(() => {
    const progress =
      interpolate(translateX.value, inputRange, [0.5, 0, 1], Extrapolate.CLAMP) *
      Math.PI

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    )
    return {
      opacity,
      transform: [
        {
          rotate: `${progress}rad`,
        },
      ],
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Animated.View style={[styles.circle, animatedCircle]} />
        <Animated.Image
          style={[styles.image, animatedSkate]}
          source={page.source}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>{page.title}</Text>
      <Text style={styles.description}>{page.description}</Text>
    </View>
  )
}
