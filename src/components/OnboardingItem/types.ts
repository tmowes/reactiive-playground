import Animated from 'react-native-reanimated'
import { PageInterface } from '../../constants/skatesData'

export type OnboardingItemProps = {
  page: PageInterface
  index: number
  translateX: Animated.SharedValue<number>
}
