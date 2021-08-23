import React, { useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import Icon from 'react-native-vector-icons/FontAwesome'

import { styles } from './styles'

export default function AnimatedToggleCircle() {
  const randomWidth = useSharedValue(10)

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  }

  const animated = useAnimatedStyle(() => ({
    width: withTiming(randomWidth.value, config),
    height: withTiming(randomWidth.value, config),
    borderRadius: withTiming(randomWidth.value / 2, config),
  }))

  useEffect(() => {

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.bar, animated]} />
      <RectButton
        style={styles.button}
        rippleColor="orangered"
        onPress={() => {
          randomWidth.value = Math.random() * 350
        }}
      >
        <Icon name="superpowers" size={24} color="white" />
        <Text style={styles.title}>Animate</Text>
      </RectButton>
    </SafeAreaView>
  )
}
