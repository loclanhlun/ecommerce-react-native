import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Image } from 'react-native'

const ProductDetailsHeader = ({ handleBack }) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
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
      <TouchableOpacity onPress={console.log('Back')}>
        <Image
          source={require('../../../../../assets/images/heart-fill-icon.png')}
          style={{
            width: 30,
            height: 30,
          }}
          tintColor={'red'}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ProductDetailsHeader
