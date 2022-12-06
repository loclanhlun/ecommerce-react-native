import React from 'react'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native'

const CategoryItem = ({ title, image, textColor, backgroundColor, onPress }) => {
  return (
    <View
      style={{
        width: 70,
        marginRight: 20,
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: backgroundColor,
      }}
    >
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPress}>
        <Image style={{ height: 50, width: 50 }} source={image} />
        <Text
          style={{
            color: textColor,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const Categories = ({ data, selectedId, setSelectedId }) => {
  return (
    <View>
      <FlatList
        horizontal
        scrollEnabled={true}
        data={data}
        renderItem={({ item }) => {
          const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#ffffff'
          const color = item.id === selectedId ? 'white' : 'black'
          return (
            <CategoryItem
              backgroundColor={backgroundColor}
              onPress={() => setSelectedId(item.id)}
              textColor={color}
              title={item.title}
              image={item.image}
            />
          )
        }}
        extraData={selectedId}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Categories
