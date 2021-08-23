import React from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import DrawerRoutes from './routes'

export default function AppSrc() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <DrawerRoutes />
    </NavigationContainer>
  )
}
