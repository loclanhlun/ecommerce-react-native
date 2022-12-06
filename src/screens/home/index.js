import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import Home from './components/homeScreen/Home'
const Drawer = createDrawerNavigator()
const DrawerMenu = ({ navigation }) => {
  return (
    <>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </>
  )
}

export default DrawerMenu
