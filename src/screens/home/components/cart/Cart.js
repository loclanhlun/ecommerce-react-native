import React from 'react'
import { View, Modal, ScrollView } from 'react-native'
import CartFooter from './CartFooter'
import CartHeader from './CartHeader'
import CartItem from './CartItem'

const Cart = ({
  modalVisible,
  setModalVisible,
  cardData,
  increaseQuantity,
  decreaseQuantity,
  totalPrice,
}) => {
  const handleBack = () => {
    setModalVisible(false)
  }
  return (
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <CartHeader handleBack={handleBack} />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#fbfbfd',
        }}
      >
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 30,
          }}
        >
          {cardData.map((item, index) => (
            <CartItem
              key={index}
              id={item.id}
              image={item.image}
              title={item.productName}
              price={item.price}
              quantity={item.quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))}
        </View>
      </ScrollView>
      <CartFooter totalPrice={totalPrice} onPress={() => console.log('Checkout')} />
    </Modal>
  )
}

export default Cart
