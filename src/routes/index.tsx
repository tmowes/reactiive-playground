import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'

import * as P from '../pages'
import { screenOptions } from './DrawerOptions/screenOptions'

const { Navigator, Screen } = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Navigator screenOptions={screenOptions} initialRouteName="AnimatedOnboarding">
      <Screen name="AnimatedDoubleTap" component={P.AnimatedDoubleTap} />
      <Screen name="AnimatedHScroll" component={P.AnimatedHScroll} />
      <Screen name="AnimatedLottie" component={P.AnimatedLottie} />
      <Screen name="AnimatedOnboarding" component={P.AnimatedOnboarding} />
      <Screen name="AnimatedSvgCircle" component={P.AnimatedSvgCircle} />
      <Screen name="AnimatedSwipeDelete" component={P.AnimatedSwipeDelete} />
      <Screen name="GestureRect" component={P.GestureRect} />
      <Screen name="AnimatedToggleCircle" component={P.AnimatedToggleCircle} />
      <Screen name="AnimatedToggleTheme" component={P.AnimatedToggleTheme} />
      <Screen name="AnimatedToggleRect" component={P.AnimatedToggleRect} />
    </Navigator>
  )
}
