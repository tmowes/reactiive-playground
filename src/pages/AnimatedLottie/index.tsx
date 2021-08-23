/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
import { ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native'
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
import LottieView from 'lottie-react-native'

import { styles } from './styles'

import unsplash from '../../assets/unsplash.jpg'
import nothing from '../../assets/nothing-to-show2.json'
import add from '../../assets/add-circle.json'
import heart from '../../assets/heart.png'
import { TapGestureHandler } from 'react-native-gesture-handler'
import { useRef } from 'react'
import { AnimatedWrapper, CardItem } from '../../components'

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

export default function AnimatedLottie() {
  const doubleTapRef = useRef(null)
  const [items, setItems] = useState<number[]>([])
  const [theme, setTheme] = useState<Theme>('dark')
  const progress = useDerivedValue(
    () => (theme === 'dark' ? withTiming(0) : withTiming(1)),
    [theme],
  )
  const addRef = useRef<LottieView>(null)
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

  const onDelete = useCallback((index: number) => {
    setItems(currentItems =>
      currentItems.filter((_, currentItemIndex) => currentItemIndex !== index),
    )
  }, [])

  const onAdd = useCallback(() => {
    addRef.current?.reset()
    addRef.current?.play(0, 75)
    setItems(currentItems => [...currentItems, 0])
  }, [])

  useEffect(() => {

  }, [])



  return (
    <Animated.View style={[styles.container, animatedBackground]}>
      <View style={styles.button}>
        <Icon name="superpowers" size={48} color="white" />
        <Animated.Text style={[styles.title, animatedText]}>
          Animated Lottie List
        </Animated.Text>
      </View>
      <AnimatedWrapper
        showAnimation={items.length === 0}
        title={'Nenhum evento encontrado'}
        source={nothing}
      >
        <ScrollView style={styles.scrollView}>
          {items.map((_, index) => (
            <CardItem
              key={index.toString()}
              onPress={() => onDelete(index)}
              rippleColor="orangered"
            />
          ))}
        </ScrollView>
      </AnimatedWrapper>

      <TouchableOpacity style={styles.floatingButton} onPress={onAdd}>
        <LottieView
          ref={addRef}
          source={add}
          loop={false}
          speed={1.5}
          style={{ transform: [{ scale: 1.09 }] }}
        />
      </TouchableOpacity>
    </Animated.View>
  )
}
