import React, { useCallback, useEffect } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome'

import { styles } from './styles'

import { PAGES } from '../../constants/skatesData'
import { AnimatedDot, OnboardingItem } from '../../components'
import { PAGE_WIDTH } from '../../components/OnboardingItem/styles'

export default function AnimatedOnboarding() {
  const translateX = useSharedValue(0)

  const animatedScrollRef = useAnimatedRef<ScrollView>()

  const onScroll = useAnimatedScrollHandler(
    ({ contentOffset }) => (translateX.value = contentOffset.x),
  )

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / PAGE_WIDTH)
  })

  const onNext = useCallback(() => {
    if (activeIndex.value === PAGES.length - 1) {
      return
    }
    animatedScrollRef.current?.scrollTo({ x: PAGE_WIDTH * (activeIndex.value + 1) })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {}, [])

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Icon name="superpowers" size={48} color="white" />
        <Text style={[styles.title]}>Animated OnBoarding</Text>
      </View>

      <Animated.ScrollView
        ref={animatedScrollRef as any}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        pagingEnabled
      >
        {PAGES.map((page, index) => (
          <OnboardingItem
            key={index.toString()}
            page={page}
            index={index}
            translateX={translateX}
          />
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
        <View style={styles.left}>
          {PAGES.map((_, index) => (
            <AnimatedDot
              key={index.toString()}
              index={index}
              activeDot={activeIndex}
              translateX={translateX}
            />
          ))}
        </View>
        <View style={styles.center}>
          <Text style={styles.footerTitle}>view board</Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity style={styles.nextButton} onPress={onNext}>
            <Icon
              name="chevron-right"
              size={36}
              color="white"
              style={styles.nextIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
