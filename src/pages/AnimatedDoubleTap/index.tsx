/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
import { ImageBackground, View } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome'

import { styles } from './styles'

import unsplash from '../../assets/unsplash.jpg'
import heart from '../../assets/heart.png'
import { TapGestureHandler } from 'react-native-gesture-handler'
import { useRef } from 'react'

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

// const AnimatedCustom = Animated.createAnimatedComponent(Image)

export default function AnimatedDoubleTap() {
  const doubleTapRef = useRef(null)
  const [theme, setTheme] = useState<Theme>('dark')
  const progress = useDerivedValue(
    () => (theme === 'dark' ? withTiming(0) : withTiming(1)),
    [theme],
  )
  const scale = useSharedValue(0)
  const opacity = useSharedValue(0)

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
  const animatedHeart = useAnimatedStyle(() => {
    return {
      transform: [{ scale: Math.max(scale.value, 0) }],
    }
  })
  const animatedRockets = useAnimatedStyle(() => {
    return {
      opacity: Math.max(opacity.value, 0),
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

  const onSingleTap = useCallback(() => {

    opacity.value = withTiming(1, {}, isFinished => {
      if (isFinished) {
        opacity.value = withDelay(500, withTiming(0))
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onDoubleTap = useCallback(() => {

    scale.value = withSpring(1, {}, isFinished => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0))
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {

  }, [])

  return (
    <Animated.View style={[styles.container, animatedBackground]}>
      <View style={styles.button}>
        <Icon name="superpowers" size={48} color="white" />
        <Animated.Text style={[styles.title, animatedText]}>
          Animated Double Tap
        </Animated.Text>
      </View>
      <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}>
        <TapGestureHandler
          ref={doubleTapRef}
          maxDelayMs={250}
          onActivated={onDoubleTap}
          numberOfTaps={2}
        >
          <Animated.View style={styles.image}>
            <ImageBackground source={unsplash} style={styles.image} resizeMode="cover">
              <Animated.Image
                source={heart}
                style={[styles.image, animatedHeart]}
                resizeMode="center"
              />
            </ImageBackground>
            <Animated.Text style={[styles.icons, animatedRockets]}>
              🚀🚀🚀🚀🚀
            </Animated.Text>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </Animated.View>
  )
}
