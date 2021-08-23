import React, { useCallback, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import LottieView from 'lottie-react-native'

import { styles } from './styles'

import nothing from '../../assets/nothing-to-show2.json'
import add from '../../assets/add-circle.json'
import { useRef } from 'react'
import { AnimatedWrapper, CardSwipeableItem } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

export default function AnimatedSwipeDelete() {
  const [items, setItems] = useState<string[]>([])

  const addRef = useRef<LottieView>(null)
  const scrollRef = useRef<ScrollView>(null)

  const onDelete = useCallback((item: string) => {
    setItems(currentItems => currentItems.filter(curr => curr !== item))
  }, [])

  const onAdd = useCallback(() => {
    addRef.current?.reset()
    addRef.current?.play(0, 75)
    const id = new Date().getTime().toString()
    setItems(currentItems => [...currentItems, id])
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Icon name="superpowers" size={48} color="white" />
        <Text style={styles.title}>Animated Swipe Delete</Text>
      </View>
      <AnimatedWrapper
        showAnimation={items.length === 0}
        title={'Nenhum evento encontrado'}
        source={nothing}
      >
        <ScrollView ref={scrollRef} style={styles.scrollView}>
          {items.map(item => (
            <CardSwipeableItem
              key={item}
              item={item}
              onDismiss={() => onDelete(item)}
              simultaneousHandlers={scrollRef}
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
    </View>
  )
}
