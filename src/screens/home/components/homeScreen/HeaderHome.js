import React from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native'

const HeaderHome = ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#fbfbfd',
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          style={{ height: 30, width: 30 }}
          source={require('../../../../../assets/images/menu-icon.png')}
        />
      </TouchableOpacity>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Image
          style={{ height: 20, width: 20 }}
          source={require('../../../../../assets/images/location-icon.png')}
        />
        <Text>14/2 New Texas</Text>
      </View>
      <Image
        style={{ height: 30, width: 30 }}
        source={require('../../../../../assets/images/bell-icon.png')}
      />
    </View>
  )
}

export default HeaderHome
