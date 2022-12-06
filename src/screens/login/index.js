import React, { useState } from 'react'
import { Image, ScrollView, View, Dimensions, Text, StatusBar } from 'react-native'
import LoginForm from './components/LoginForm'
import Separation from './components/Separation'
import SignUpForm from './components/SignUpForm'
import SocialLogin from './components/SocialLogin'
const windowWidth = Dimensions.get('window').width
const Login = ({ navigation }) => {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fbfbfd',
      }}
    >
      <View>
        <Image
          style={{
            width: windowWidth,
            marginTop: 50,
          }}
          source={require('../../../assets/images/logo.png')}
        />

        <Text
          style={{
            marginTop: 20,
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '500',
            color: 'black',
          }}
        >
          {isSignUp ? 'Sign Up' : 'Log in'}
        </Text>

        <View
          style={{
            marginTop: 30,
          }}
        >
          {!isSignUp ? (
            <LoginForm navigation={navigation} />
          ) : (
            <SignUpForm navigation={navigation} />
          )}
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <Separation />
        </View>
        <View
          style={{
            marginTop: 30,
          }}
        >
          <SocialLogin />
        </View>

        <Text
          style={{
            marginTop: 50,
            marginBottom: 40,
            textAlign: 'center',
          }}
        >
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <Text
            onPress={() => {
              setIsSignUp(!isSignUp)
            }}
            style={{
              color: 'black',
            }}
          >
            {isSignUp ? 'Log in' : 'Sign Up'}
          </Text>
        </Text>
      </View>
    </ScrollView>
  )
}

export default Login
