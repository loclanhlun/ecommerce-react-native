import React from 'react'
import { Modal, Image, Dimensions, View, ScrollView, Text } from 'react-native'
import ProductDetailsHeader from './ProductDetailsHeader'
import RadioForm, { RadioButton, RadioButtonInput } from 'react-native-simple-radio-button'
import { useState } from 'react'
import { TextButton } from '../../../../components/ComponentUtils'

const HEIGHT_MODAL = Dimensions.get('window').height
const WIDTH_MODAL = Dimensions.get('window').width
const ProductDetails = ({ modalVisible, setModalVisible, productDetailsData, addToCard }) => {
  const onPress = (index) => {
    setValue3Index(index)
  }
  const radio_props = [
    {
      label: 'red',
      value: 0,
      color: 'red',
    },
    {
      label: 'green',
      value: 1,
      color: '#ccc',
    },
  ]
  const [value3Index, setValue3Index] = useState(0)

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#ccc',
          justifyContent: 'space-between',
        }}
      >
        {/* Product image */}
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#ccc',
            marginTop: 20,
          }}
        >
          <ProductDetailsHeader handleBack={() => setModalVisible(false)} />
          <Image
            source={{ uri: `${productDetailsData.image}` }}
            style={{
              width: WIDTH_MODAL,
              height: HEIGHT_MODAL * 0.5,
              resizeMode: 'contain',
            }}
          />
        </View>
        {/* Product information */}
        <View
          style={{
            height: HEIGHT_MODAL * 0.4,
            backgroundColor: '#fbfbfd',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
        >
          <View
            style={{
              marginHorizontal: 20,
              paddingTop: 20,
              paddingBottom: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: 'black',
                maxWidth: 200,
                fontSize: 20,
              }}
            >
              {productDetailsData.title}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
              }}
            >
              ${productDetailsData.price}
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, marginHorizontal: 20 }}
          >
            <Text
              style={{
                fontSize: 16,
              }}
            >
              {productDetailsData.description}
            </Text>
            <Text
              style={{
                marginTop: 20,
                marginBottom: 20,
                fontSize: 16,
              }}
            >
              Colors
            </Text>

            <RadioForm formHorizontal={true} animation={true}>
              {/* To create radio buttons, loop through your array of options */}
              {radio_props.map((obj, i) => (
                <RadioButton labelHorizontal={true} key={i}>
                  {/*  You can set RadioButtonLabel before RadioButtonInput */}
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={value3Index === i}
                    onPress={onPress}
                    borderWidth={2}
                    buttonInnerColor={obj.color}
                    buttonOuterColor={value3Index === i ? obj.color : obj.color}
                    buttonSize={20}
                    buttonOuterSize={30}
                    buttonStyle={{
                      backgroundColor: value3Index === i ? 'transparent' : obj.color,
                    }}
                    buttonWrapStyle={{ marginRight: 10 }}
                  />
                </RadioButton>
              ))}
            </RadioForm>
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: 'transparent',
            }}
          >
            <TextButton title={'Add to Card'} disable={false} onPress={() => console.log('aaaa')} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ProductDetails
