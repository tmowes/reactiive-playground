import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const PAGE_WIDTH = width
export const PAGE_HEIGHT = height
export const CIRCLE_SIZE = width * 0.7

export const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  circleContainer: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  circle: {
    width: '100%',
    height: '100%',
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: 'orangered',
  },
  image: {
    position: 'absolute',
    height: PAGE_HEIGHT * 0.5,
    aspectRatio: 1,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'whitesmoke',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: 'lightgray',
  },
})
