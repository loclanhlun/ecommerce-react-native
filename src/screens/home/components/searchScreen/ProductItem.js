import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const ProductItem = ({ image, backgroundColor, textColor, price, title, onPress }) => {
  return (
    <View
      style={{
        width: '40%',
        borderRadius: 10,
        padding: 5,
        marginTop: 20,
        backgroundColor: backgroundColor,
        position: 'relative',
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{ height: 150, width: '100%', resizeMode: 'contain' }}
          source={{ uri: image }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              width: 80,
              color: textColor,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: textColor,
            }}
          >
            {price}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('../../../../../assets/images/heart-icon.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ProductItem
