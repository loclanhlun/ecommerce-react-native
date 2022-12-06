import React from 'react'
import { Image, TextInput, View } from 'react-native'

export const InputIcon = ({ placeholder, icon, tintColor, handleChange, value }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        elevation: 1,
        padding: 10,
        borderRadius: 10,
        width: '100%',
        marginBottom: 20,
      }}
    >
      <Image
        style={{
          width: 50,
          height: 50,
          padding: 10,
        }}
        source={icon}
        tintColor={tintColor}
      />
      <TextInput
        style={{
          flex: 1,
          paddingTop: 10,
          paddingRight: 10,
          paddingBottom: 10,
          paddingLeft: 10,
          backgroundColor: '#fff',
          color: '#424242',
        }}
        placeholder={placeholder}
        onChangeText={handleChange}
        value={value}
        underlineColorAndroid="transparent"
      />
    </View>
  )
}
