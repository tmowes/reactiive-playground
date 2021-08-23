import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  itemContainer: {
    height: 80,
    width: '100%',
    marginVertical: 6,
    alignItems: 'center',
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
  },
})
