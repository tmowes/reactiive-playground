import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'
import { PageCard } from '../../components'

import { styles } from './styles'

const WORDS = ['Julius', 'Mowius', 'Mobilius']

export default function AnimatedHScroll() {
  const translateX = useSharedValue(0)

  const onScroll = useAnimatedScrollHandler(
    ({ contentOffset }) => (translateX.value = contentOffset.x),
  )

  useEffect(() => {

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.title}>Animate Horizontal ScrollView</Text>
      </View>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        pagingEnabled
      >
        {WORDS.map((word, index) => (
          <PageCard key={word} word={word} index={index} translateX={translateX} />
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  )
}
