import React from 'react'
import { View, Text } from 'react-native'
import { TextButton } from '../../../../components/ComponentUtils'
const CartFooter = ({ totalPrice, onPress }) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
          }}
        >
          Subtotal:
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
          }}
        >
          ${totalPrice}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TextButton onPress={onPress} title={'Checkout'} disable={false} />
      </View>
    </View>
  )
}

export default CartFooter
