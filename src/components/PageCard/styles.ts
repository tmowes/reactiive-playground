import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const CIRCLE_WIDTH = width * 0.8
export const CIRCLE_RADIUS = CIRCLE_WIDTH / 2

export const SQUARE = width * 0.64

export const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 48,
    marginTop: 8,
  },
  button: {
    position: 'absolute',
    bottom: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  circle: {
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,
    borderRadius: CIRCLE_RADIUS,
    borderColor: 'orangered',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    width: SQUARE,
    height: SQUARE,
    backgroundColor: 'orangered',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    borderRadius: 8,
  },
})
