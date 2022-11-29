import React from 'react'
import { Image, View } from 'react-native'

const SocialLoginItem = ({ icon, tintColor }) => {
  return (
    <View
      style={{
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#ffffff',
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
        }}
        tintColor={tintColor ? tintColor : null}
        source={icon}
      />
    </View>
  )
}
const SocialLogin = () => {
  return (
    <View
      style={{
        height: 81,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <SocialLoginItem
        icon={require('../../../../assets/images/facebook-icon.png')}
        tintColor={'#076fe6'}
      />
      <SocialLoginItem icon={require('../../../../assets/images/google-icon.png')} />
    </View>
  )
}

export default SocialLogin
