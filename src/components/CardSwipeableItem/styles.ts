import { StyleSheet } from 'react-native'

export const CARD_HEIGHT = 80

export const styles = StyleSheet.create({
  itemContainer: {
    height: CARD_HEIGHT,
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  item: {
    flex: 1,
    width: '90%',
    backgroundColor: 'dimgray',
    borderRadius: 10,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
  },
  deleteContainer: {
    height: CARD_HEIGHT,
    position: 'absolute',
    right: '12%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
