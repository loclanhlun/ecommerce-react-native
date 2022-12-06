import React from 'react'
import { Image, View } from 'react-native'

const FooterHome = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#fbfbfd',
        elevation: 20,
      }}
    >
      <Image
        style={{ height: 30, width: 30 }}
        source={require('../../../../../assets/images/home-icon.png')}
      />
      <Image
        style={{ height: 30, width: 30 }}
        source={require('../../../../../assets/images/cart-icon.png')}
      />
      <Image
        style={{ height: 30, width: 30 }}
        source={require('../../../../../assets/images/heart-icon.png')}
      />
      <Image
        style={{ height: 30, width: 30 }}
        source={require('../../../../../assets/images/profile-icon.png')}
      />
    </View>
  )
}

export default FooterHome
