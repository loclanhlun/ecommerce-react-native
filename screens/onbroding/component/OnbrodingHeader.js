import React from 'react'
import { View, Text, Button } from 'react-native'

const OnBrodingHeader = ({ screenIndex }) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{
          fontSize: 18,
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{screenIndex}</Text>/3
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
        }}
      >
        Skip
      </Text>
    </View>
  )
}

export default OnBrodingHeader
