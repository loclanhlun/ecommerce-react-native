import React from 'react'
import { Text, View } from 'react-native'

const Separation = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
      }}
    >
      <View
        style={{
          width: '30%',
          borderTopColor: 'black',
          borderTopWidth: 2,
        }}
      ></View>
      <Text
        style={{
          color: 'black',
        }}
      >
        Or
      </Text>
      <View
        style={{
          width: '30%',
          borderTopColor: 'black',
          borderTopWidth: 2,
        }}
      ></View>
    </View>
  )
}

export default Separation
