import React, { useEffect } from 'react'
import { View, Image, Text, Button, TouchableWithoutFeedback } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { TextButton } from '../../../components/ComponentUtils'
import { onbrodingLoading, onbrodingReceived, onbrodingFailed } from '../redux/onbrodingSlice'
const OnbrodingBody = ({ setScreenIndex, dataOnbrodingScreen }) => {
  // const onbroding = useSelector((state) => state.onbroding)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(onbrodingLoading())
  //   dispatch(onbrodingReceived())
  // }, [])

  return (
    <View
      style={{
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Image
        style={{
          marginTop: 50,
          width: '100%',
          flex: 6,
        }}
        source={dataOnbrodingScreen?.image}
      />

      <Text
        style={{
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 25,
        }}
      >
        {dataOnbrodingScreen?.title}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 16,
          fontWeight: '400',
          fontSize: 15,
        }}
      >
        {dataOnbrodingScreen?.subtitle}
      </Text>

      <View
        style={{
          flex: 2,
          marginTop: 20,
        }}
      >
        <TextButton
          title={dataOnbrodingScreen?.labelButton}
          onPress={() => {
            setScreenIndex((prevIndex) => {
              return prevIndex + 1
            })
          }}
        />
      </View>
    </View>
  )
}

export default OnbrodingBody
