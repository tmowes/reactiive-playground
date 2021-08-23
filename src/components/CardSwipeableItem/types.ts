import { PanGestureHandlerProperties } from 'react-native-gesture-handler'

export type CardSwipeableItemProps = Pick<
  PanGestureHandlerProperties,
  'simultaneousHandlers'
> & {
  item: string
  onDismiss: (item: string) => void
}
