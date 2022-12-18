import React from 'react'
import { Dimensions, Text } from 'react-native'
import { TouchableOpacity, View } from 'react-native'
import ProductList from './ProductList'
import SearchBar from './SearchBar'
const windowWidth = Dimensions.get('window').width

const SearchBody = ({
  productListData,
  selectedId,
  setSelectedId,
  likedId,
  setLikedId,
  setModalVisible,
}) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
      }}
    >
      <SearchBar setModalVisible={setModalVisible} />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'black',
          }}
        >
          Recent searches
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
          }}
        >
          {'>'}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderTopColor: '#ccc',
          borderTopWidth: 2,
          width: '100%',
        }}
      ></View>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'black',
          }}
        >
          Search results showing for "Shirt"
        </Text>
        <View
          style={{
            marginLeft: -20,
            width: windowWidth,
          }}
        >
          <ProductList
            productListData={productListData}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            likedId={likedId}
            setLikedId={setLikedId}
          />
        </View>
      </View>
    </View>
  )
}

export default SearchBody
