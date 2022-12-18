import React from 'react'
import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Header from '../Header'
import Filters from './Filters'
import SearchBody from './SearchBody'

const Search = ({ navigation, modalVisible, setModalVisible }) => {
  const [selectedId, setSelectedId] = useState(null)
  const [selectedFilterId, setSelectedFilterId] = useState(1)
  const productListData = [
    {
      id: '1',
      title: 'Long Sleeve Shirts',
      price: 165,
      image: require('../../../../../assets/images/shirts1.png'),
    },
    {
      id: '3',
      title: 'Casual Henley Shirts',
      price: 275,
      image: require('../../../../../assets/images/shirts2.png'),
    },
    {
      id: '2',
      title: 'Long Sleeve Shirts',
      price: 165,
      image: require('../../../../../assets/images/shirts1.png'),
    },
    {
      id: '4',
      title: 'Casual Henley Shirts',
      price: 275,
      image: require('../../../../../assets/images/shirts2.png'),
    },
    {
      id: '5',
      title: 'Long Sleeve Shirts',
      price: 165,
      image: require('../../../../../assets/images/shirts1.png'),
    },
  ]
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <SearchBody
          setModalVisible={setModalVisible}
          productListData={productListData}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
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
