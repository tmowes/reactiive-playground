import React, { useCallback, useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'
import { useSharedValue } from 'react-native-reanimated'
import { ReText } from 'react-native-redash'
import Svg, { Circle } from 'react-native-svg'
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

const { width, height } = Dimensions.get('window')
const AnimatedCircle = Animated.createAnimatedComponent(Circle)
// const AnimatedCustom = Animated.createAnimatedComponent(Image)

const CIRCLE_LENGTH = 1000 // 2*PI*R
const R = CIRCLE_LENGTH / (Math.PI * 2)

export default function AnimatedSvgCircle() {
  const [theme, setTheme] = useState<Theme>('dark')
  const themeProgress = useDerivedValue(
    () => (theme === 'dark' ? withTiming(0) : withTiming(1)),
    [theme],
  )

  const progress = useSharedValue(0)

  const progressText = useDerivedValue(() => `${Math.floor(progress.value * 100)}`)

  const animatedBackground = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      themeProgress.value,
      [0, 1],
      [colors.dark.background, colors.light.background],
    )
    return {
      backgroundColor,
    }
  })

  const animatedText = useAnimatedStyle(() => {
    const color = interpolateColor(
      themeProgress.value,
      [0, 1],
      [colors.dark.text, colors.light.text],
    )
    return {
      color,
    }
  })

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }))

  const toggleProgress = useCallback(() => {
    return (progress.value = withTiming(progress.value > 0 ? 0 : 1, { duration: 2000 }))
  }, [progress])

  useEffect(() => {
    setTheme('dark')

  }, [])

  return (
    <Animated.View style={[styles.container, animatedBackground]}>
      <RectButton
        style={styles.button}
        rippleColor="orangered"
        onPress={toggleProgress}
      >
        <Icon name="superpowers" size={32} color="white" />
        <Animated.Text style={[styles.title, animatedText]}>
          Animated SVG Circle
        </Animated.Text>
      </RectButton>
      <Svg>
        <ReText style={styles.progress} text={progressText} />
        <Circle
          cx={width / 2}
          cy={height / 3.5}
          r={R}
          stroke="whitesmoke"
          strokeOpacity={0.1}
          strokeWidth={24}
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 3.5}
          r={R}
          stroke="orangered"
          strokeWidth={16}
          strokeDasharray={CIRCLE_LENGTH}
          strokeLinecap="round"
          animatedProps={animatedProps}
        />
      </Svg>
    </Animated.View>
  )
}
