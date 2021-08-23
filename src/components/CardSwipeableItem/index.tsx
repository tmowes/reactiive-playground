import React from 'react'
import { Dimensions, Text } from 'react-native'
import { CardSwipeableItemProps } from './types'
import { CARD_HEIGHT, styles } from './styles'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome'

const { width } = Dimensions.get('window')
const DELETE_THRESHOLD = -(width * 0.3)

export default function CardSwipeableItem(props: CardSwipeableItemProps) {
  const { item, onDismiss, simultaneousHandlers } = props

  const translateX = useSharedValue(0)
  const cardHeight = useSharedValue(CARD_HEIGHT)
  const marginVertical = useSharedValue(6)
  const cardOpacity = useSharedValue(1)

  const onGesture = useAnimatedGestureHandler({
    onStart: () => {},
    onActive: ({ translationX }) => {
      translateX.value = translationX

    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < DELETE_THRESHOLD
      if (shouldBeDismissed) {
        translateX.value = withSpring(-width)
        cardHeight.value = withTiming(0)
        marginVertical.value = withTiming(0)
        cardOpacity.value = withTiming(0, {}, isFinished => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(item)
          }
        })
        return
      }
      translateX.value = withSpring(0)
    },
  })

  const animatedSwipe = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))
  const animatedIcon = useAnimatedStyle(() => ({
    opacity: withTiming(translateX.value < DELETE_THRESHOLD ? 1 : 0, { duration: 100 }),
  }))
  const animatedCard = useAnimatedStyle(() => ({
    height: cardHeight.value,
    marginVertical: marginVertical.value,
    opacity: cardOpacity.value,
  }))

  return (
    <Animated.View style={[styles.itemContainer, animatedCard]}>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={onGesture}
      >
        <Animated.View style={[styles.item, animatedSwipe]}>
          <Text style={[styles.title]}>{item}</Text>
        </Animated.View>
      </PanGestureHandler>
      <Animated.View style={[styles.deleteContainer, animatedIcon]}>
        <Icon name="trash-o" size={32} color="firebrick" />
      </Animated.View>
    </Animated.View>
  )
}
