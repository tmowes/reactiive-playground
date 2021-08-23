import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

import Icon from 'react-native-vector-icons/FontAwesome'

import { CIRCLE_RADIUS, SQUARE, styles } from './styles'

export default function GestureRect() {
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const onGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value
      ctx.y = translateY.value
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = translationX + ctx.x
      translateY.value = translationY + ctx.y
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)
      if (distance < CIRCLE_RADIUS + SQUARE / 2) {
        translateX.value = withSpring(0)
        translateY.value = withSpring(0)
      }
    },
  })

  const animatedRect = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
  }))

  useEffect(() => {}, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.title}>Animate with Gesture</Text>
      </View>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={onGesture}>
          <Animated.View style={[styles.bar, animatedRect]}>
            <Icon name="superpowers" size={32} color="white" />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </SafeAreaView>
  )
}
