import React from 'react'
import { Text, View } from 'react-native'
import LottieView from 'lottie-react-native'
import { AnimatedWrapperProps } from './types'
import { styles } from './styles'

export default function AnimatedWrapper(props: AnimatedWrapperProps) {
  const {
    children,
    showAnimation,
    containerStyle,
    textStyle,
    title,
    style,
    ...lottieProps
  } = props

  if (!showAnimation) {
    return <>{children}</>
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <LottieView style={[styles.lottie, style]} autoPlay loop {...lottieProps} />
      {title && <Text style={[styles.title, textStyle]}>{title}</Text>}
    </View>
  )
}
