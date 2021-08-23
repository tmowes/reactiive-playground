import React from 'react'
import { View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { CardItemProps } from './types'
import { styles } from './styles'

export default function CardItem(props: CardItemProps) {
  const { ...attrs } = props
  return (
    <View style={styles.itemContainer}>
      <RectButton style={styles.item} {...attrs} />
    </View>
  )
}
