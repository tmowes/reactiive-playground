import Animated from 'react-native-reanimated'

export type PageCardProps = {
  word: string
  index: number
  translateX: Animated.SharedValue<number>
}
