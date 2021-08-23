import { StyleSheet } from 'react-native'

export const DOT_SIZE = 16

export const styles = StyleSheet.create({
  container: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    marginRight: DOT_SIZE / 2,
    borderWidth: DOT_SIZE / 6,
    borderColor: 'white',
  },
})
