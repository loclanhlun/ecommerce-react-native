import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import OnbrodingBody from './component/OnbrodingBody'
import OnBrodingHeader from './component/OnbrodingHeader'
import { Dimensions } from 'react-native'
const OnBroding = ({ navigation }) => {
  const [screenIndex, setScreenIndex] = useState(1)
  const windowHeight = Dimensions.get('window').height
  const handleNavigator = () => {
    navigation.navigate('Login')
  }

  useEffect(() => {
    if (screenIndex > 3) {
      handleNavigator()
    }
  }, [screenIndex])
  const dataOnbrodingScreen = [
    {
      image: require('../../../assets/images/image1.png'),
      title: 'Choose Product',
      subtitle:
        'A product is the item offered for sale. A product can be a service or an item. It can be physical or in virtual or cyber form',
      labelButton: 'Next',
    },
    {
      image: require('../../../assets/images/image2.png'),
      title: 'Make Payment',
      subtitle:
        'Payment is the transfer of money services in exchange product or Payments typically made terms agreed',
      labelButton: 'Next',
    },
    {
      image: require('../../../assets/images/image3.png'),
      title: 'Get Your Order',
      subtitle:
        'Business or commerce an order is a stated intention either spoken to engage in a commercial transaction specific products',
      labelButton: 'Get Started',
    },
  ]

  return (
    <View
      style={{
        paddingRight: 10,
        paddingLeft: 10,
        display: 'flex',
        flex: 10,
        flexDirection: 'column',
        backgroundColor: '#fbfbfd',
        height: windowHeight,
      }}
    >
      <OnBrodingHeader screenIndex={screenIndex} handleNavigator={handleNavigator} />
      <OnbrodingBody
        dataOnbrodingScreen={dataOnbrodingScreen[screenIndex - 1]}
        setScreenIndex={setScreenIndex}
      />
    </View>
  )
}

export default OnBroding
