import React from 'react'
import { View, Image, Text, Button, TouchableWithoutFeedback } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
const OnbrodingBody = ({ setScreenIndex, dataOnbrodingScreen }) => {
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
        source={dataOnbrodingScreen.image}
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
        <TouchableWithoutFeedback
          onPress={() => {
            setScreenIndex((prevIndex) => {
              if (prevIndex < 3) {
                return prevIndex + 1
              } else {
                return 3
              }
            })
          }}
        >
          <View
            style={{
              elevation: 8,
              backgroundColor: '#f77951',
              borderRadius: 30,
              width: 200,
              height: 50,
              paddingVertical: 10,
              paddingHorizontal: 12,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}
            >
              {dataOnbrodingScreen?.labelButton}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default OnbrodingBody
