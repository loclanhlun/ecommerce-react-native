import React from 'react'
import { useState } from 'react'
import { View, Modal, Pressable, Text, Dimensions, Image } from 'react-native'
import FilterBody from './FiltersBody'
import FilterFooter from './FiltersFooter'
import FilterHeader from './FiltersHeader'

const HEIGHT_MODAL = Dimensions.get('window').height
const Filters = ({ modalVisible, setModalVisible, selectedId, setSelectedId }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#ccc',
          justifyContent: 'flex-end',
          opacity: 0.9,
        }}
      >
        <View
          style={{
            height: HEIGHT_MODAL * 0.8,
            backgroundColor: '#fbfbfd',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
        >
          <FilterHeader onPress={() => setModalVisible(false)} />
          <FilterBody setSelectedId={setSelectedId} selectedId={selectedId} />
          <FilterFooter onPress={() => console.log('Apply')} />
        </View>
      </View>
    </Modal>
  )
}

export default Filters
