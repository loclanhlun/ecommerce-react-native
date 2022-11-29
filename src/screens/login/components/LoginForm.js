import React from 'react'
import { Text, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { InputIcon, TextButton } from '../../../components/ComponentUtils'
const LoginForm = ({
  setEmailValue,
  setPasswordValue,
  isSignUp,
  setNameValue,
  setIsSelected,
  isSelected,
}) => {
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      {isSignUp && (
        <InputIcon
          tintColor="#f77951"
          onchangeText={setNameValue}
          placeholder="Name"
          icon={require('../../../../assets/images/user-icon.png')}
        />
      )}
      <InputIcon
        tintColor="#f77951"
        onchangeText={setEmailValue}
        placeholder="Email"
        icon={require('../../../../assets/images/email-icon.png')}
      />
      <InputIcon
        tintColor="#f77951"
        onchangeText={setPasswordValue}
        placeholder="Password"
        icon={require('../../../../assets/images/password-icon.png')}
      />
      {!isSignUp ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Text
            style={{
              color: 'black',
            }}
          >
            "Forgot password?"
          </Text>
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <CheckBox
            value={isSelected}
            onValueChange={setIsSelected}
            // style={{ alignSelf: 'center' }}
          />
          <Text>
            I accept all this <Text style={{ color: 'black' }}>Term & Conditions</Text>
          </Text>
        </View>
      )}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 30,
        }}
      >
        <TextButton title={isSignUp ? 'Sign Up' : 'Log in'} onPress={() => console.log('Log in')} />
      </View>
    </View>
  )
}

export default LoginForm
