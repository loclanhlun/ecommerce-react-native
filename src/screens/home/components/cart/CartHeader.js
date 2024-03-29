import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

const CartHeader = ({ handleBack }) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
      }}
    >
      <TouchableOpacity onPress={handleBack}>
        <Image
          source={require('../../../../../assets/images/back-icon.png')}
          style={{
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          color: 'black',
        }}
      >
        My Cart
      </Text>
      <Text></Text>
    </View>
  )
}

export default CartHeader
