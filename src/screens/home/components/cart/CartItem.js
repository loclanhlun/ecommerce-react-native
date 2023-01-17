import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const CartItem = ({ id, image, title, price, quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
      }}
    >
      <View
        style={{
          width: 100,
          height: 80,
          backgroundColor: '#ececea',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            height: 70,
            width: 70,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
          }}
        >
          ${price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          style={{
            width: 40,
            height: 30,
            backgroundColor: '#fdebe5',
            borderRadius: 3,
          }}
          onPress={() => {
            decreaseQuantity(id)
          }}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#f77951',
              }}
            >
              -
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', alignItems: 'center', width: 30 }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
            }}
          >
            {quantity}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 40,
            height: 30,
            backgroundColor: '#fdebe5',
            borderRadius: 3,
          }}
          onPress={() => increaseQuantity(id)}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#f77951',
              }}
            >
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItem
