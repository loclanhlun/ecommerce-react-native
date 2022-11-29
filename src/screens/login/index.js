import React, { useState } from 'react'
import { Image, ScrollView, View, Dimensions, Text, StatusBar } from 'react-native'
import LoginForm from './components/LoginForm'
import Separation from './components/Separation'
import SocialLogin from './components/SocialLogin'
const windowWidth = Dimensions.get('window').width
const Login = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [isSelected, setIsSelected] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  console.log(emailValue, passwordValue)

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
          <LoginForm
            setEmailValue={setEmailValue}
            setPasswordValue={setPasswordValue}
            setNameValue={setNameValue}
            setIsSelected={setIsSelected}
            isSelected={isSelected}
            isSignUp={isSignUp}
          />
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
