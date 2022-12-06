import React from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'

const SearchBar = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          elevation: 1,
          height: 50,
          borderRadius: 10,
          width: '100%',
          marginBottom: 20,
        }}
      >
        <Image
          style={{
            width: 20,
            height: 20,
            padding: 10,
            marginLeft: 10,
          }}
          source={require('../../../../../assets/images/search-icon.png')}
          // tintColor={tintColor}
        />
        <TextInput
          style={{
            flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            backgroundColor: '#fff',
            //   color: '#424242',
          }}
          placeholder={'Search items...'}
          onChangeText={(value) => {
            console.log(value)
          }}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity>
          <Image
            style={{
              width: 40,
              height: 40,
              padding: 10,
              marginRight: 8,
            }}
            source={require('../../../../../assets/images/submit-search-icon.png')}
            // tintColor={tintColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SearchBar
