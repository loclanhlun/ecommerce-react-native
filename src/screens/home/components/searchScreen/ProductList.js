import React from 'react'
import { View } from 'react-native'
import ProductItem from './ProductItem'

const ProductList = ({ productsData, handleClickProduct }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '100%',
      }}
    >
      {productsData.data.map((item) => {
        return (
          <ProductItem
            key={item.id}
            image={item.image}
            price={item.price}
            title={item.title}
            backgroundColor={'#ffffff'}
            onPress={() => handleClickProduct(item.id)}
          />
        )
      })}
    </View>
  )
}

export default ProductList
