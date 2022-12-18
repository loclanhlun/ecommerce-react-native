import React from 'react'
import { View } from 'react-native'
import ProductItem from './ProductItem'

const ProductList = ({ productListData, selectedId, setSelectedId }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '100%',
      }}
    >
      {productListData.map((item) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#ffffff'
        const color = item.id === selectedId ? 'white' : 'black'
        return (
          <ProductItem
            key={item.id}
            backgroundColor={backgroundColor}
            image={item.image}
            price={item.price}
            textColor={color}
            title={item.title}
            onPress={() => setSelectedId(item.id)}
          />
        )
      })}
    </View>
  )
}

export default ProductList
