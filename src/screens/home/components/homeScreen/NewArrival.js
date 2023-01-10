import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

const NewArrialItem = ({ title, image, price, textColor, backgroundColor, onPress }) => {
  return (
    <View
      style={{
        width: 170,
        marginRight: 20,
        borderRadius: 10,
        padding: 5,
        backgroundColor: backgroundColor,
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
    </View>
  )
}

const NewArrival = ({ newArrialData, handleClickProduct }) => {
  return (
    <View
      style={{
        marginTop: 30,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            color: 'black',
            fontWeight: '500',
          }}
        >
          New Arrival
        </Text>
        <Text
          style={{
            fontSize: 15,
          }}
        >
          See All
        </Text>
      </View>
      <FlatList
        horizontal
        scrollEnabled={true}
        data={newArrialData}
        renderItem={({ item }) => {
          return (
            <NewArrialItem
              backgroundColor={'#ffffff'}
              onPress={() => handleClickProduct(item.id)}
              textColor={'black'}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          )
        }}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default NewArrival
