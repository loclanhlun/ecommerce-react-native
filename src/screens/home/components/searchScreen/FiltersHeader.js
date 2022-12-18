import React from 'react'
import { Text, View, Pressable, Image } from 'react-native'

const FilterHeader = ({ onPress }) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <Text>Clear</Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: 'black',
          }}
        >
          Filters
        </Text>
        <Pressable onPress={onPress}>
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={require('../../../../../assets/images/close-icon.png')}
          />
        </Pressable>
      </View>
      <View
        style={{
          borderTopColor: '#ccc',
          borderTopWidth: 1,
          width: '100%',
        }}
      ></View>
    </>
  )
}

export default FilterHeader
