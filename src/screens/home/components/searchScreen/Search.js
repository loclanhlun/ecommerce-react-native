import React from 'react'
import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Header from '../Header'
import Filters from './Filters'
import SearchBody from './SearchBody'

const Search = ({
  navigation,
  modalVisible,
  setModalVisible,
  handleClickProduct,
  productsData,
}) => {
  const [selectedFilterId, setSelectedFilterId] = useState(1)
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <SearchBody
          productsData={productsData}
          setModalVisible={setModalVisible}
          handleClickProduct={handleClickProduct}
        />
      </ScrollView>
      <Filters
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        selectedId={selectedFilterId}
        setSelectedId={setSelectedFilterId}
      />
    </>
  )
}

export default Search
