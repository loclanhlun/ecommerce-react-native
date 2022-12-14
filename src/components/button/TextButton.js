import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export const TextButton = ({ onPress, title, disable }) => {
  return (
    <TouchableOpacity disabled={disable} onPress={onPress}>
      <View
        style={{
          elevation: 8,
          backgroundColor: '#f77951',
          borderRadius: 30,
          width: 200,
          height: 50,
          paddingVertical: 10,
          paddingHorizontal: 12,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
