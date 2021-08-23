import { AnimatedLottieViewProps } from 'lottie-react-native'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'

export type AnimatedWrapperProps = AnimatedLottieViewProps & {
  children: React.ReactNode
  showAnimation?: boolean
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  title?: string
}
