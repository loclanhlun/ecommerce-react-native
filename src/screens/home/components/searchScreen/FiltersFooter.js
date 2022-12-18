import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

const FilterFooter = ({ onPress }) => {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: 70,
          width: '70%',
          backgroundColor: '#f77951',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FilterFooter
