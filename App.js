import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnBroding, Login, DrawerMenu } from './src/screens'
import { Provider } from 'react-redux'
import { persistor, store } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>LOADING...</Text>} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="DrawerMenu"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Onbroding" component={OnBroding} />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                animationTypeForReplace: 'push',
                animation: 'slide_from_right',
              }}
            />
            <Stack.Screen
              name="DrawerMenu"
              component={DrawerMenu}
              options={{
                animationTypeForReplace: 'push',
                animation: 'slide_from_right',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
