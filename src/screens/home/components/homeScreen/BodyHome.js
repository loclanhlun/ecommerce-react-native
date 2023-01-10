import React from 'react'
import { Text, View } from 'react-native'
import Categories from './Categories'
import NewArrival from './NewArrival'
import SearchBar from './SearchBar'

const BodyHome = ({
  data,
  newArrialData,
  handleClickProduct,
  setSearchText,
  searchText,
  setModalVisible,
}) => {
  const handleSetSelectedId = (category) => {
    setSearchText(category)
  }
  return (
    <View
      style={{
        marginHorizontal: 20,
      }}
    >
      {/* Title */}

      <Text
        style={{
          marginTop: 10,
          fontSize: 30,
          fontWeight: '500',
          color: 'black',
        }}
      >
        Explore
      </Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 25,
          marginBottom: 20,
        }}
      >
        best Outfits for you
      </Text>

      <Categories data={data} handleSetSelectedId={handleSetSelectedId} />
      <NewArrival newArrialData={newArrialData} handleClickProduct={handleClickProduct} />
    </View>
  )
}

export default BodyHome
