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

const Categories = ({ data, handleSetSelectedId }) => {
  return (
    <View>
      <FlatList
        horizontal
        scrollEnabled={true}
        data={data}
        renderItem={({ item }) => {
          return (
            <CategoryItem
              onPress={() => handleSetSelectedId(item.name)}
              title={item.title}
              image={item.image}
            />
          )
        }}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Categories
