import { DrawerNavigationOptions } from '@react-navigation/drawer'

export const screenOptions: DrawerNavigationOptions = {
  headerShown: false,
  drawerType: 'slide',
  drawerStyle: {
    flex: 1,
    width: '65%',
    paddingRight: 20,
    // backgroundColor: 'transparent',
    backgroundColor: '#14151B',
  },
  sceneContainerStyle: {
    backgroundColor: 'transparent',
  },
  drawerActiveTintColor: 'white',
  drawerInactiveTintColor: 'gray',
}
