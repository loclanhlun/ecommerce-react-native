import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnBroding } from './screens'
const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onbroding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onbroding" component={OnBroding} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
