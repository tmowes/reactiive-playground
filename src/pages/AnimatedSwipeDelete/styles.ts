import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export const CIRCLE_WIDTH = width
export const CIRCLE_RADIUS = CIRCLE_WIDTH / 2

export const SQUARE = width * 0.64

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#14151B',
    position: 'relative',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 8,
  },
  icons: {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 48,
    bottom: -64,
    left: 0,
    right: 0,
    textAlign: 'center',
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
  image: {
    position: 'absolute',
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,
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
    borderRadius: SQUARE / 2,
    elevation: 8,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },

  floatingButton: {
    height: 56,
    width: 56,
    backgroundColor: 'white',
    borderRadius: 56 / 2,
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.09,
    shadowRadius: 10,
    elevation: 5,
    position: 'absolute',
    bottom: 128,
    right: 32,
  },
})
