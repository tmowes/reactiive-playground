import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export const CIRCLE_WIDTH = width * 0.8
export const CIRCLE_RADIUS = CIRCLE_WIDTH / 2

export const SQUARE = CIRCLE_WIDTH * 0.2

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#14151B',
    position: 'relative',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 8,
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
