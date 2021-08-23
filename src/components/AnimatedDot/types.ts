import Animated from 'react-native-reanimated'

export type AnimatedDotProps = {
  index: number
  activeDot: Animated.SharedValue<number>
  translateX: Animated.SharedValue<number>
}
