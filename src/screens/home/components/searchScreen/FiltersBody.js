import React from 'react'
import { useState } from 'react'
import { Text, TouchableOpacity, View, Dimensions } from 'react-native'
import RangeSlider from './RangeSlider'

const WIDTH = Dimensions.get('window').width
const FilterBody = ({ selectedId, setSelectedId }) => {
  const [pricingValues, setPricingValues] = useState([0, 500])
  const [distanceValues, setDistanceValues] = useState([0, 5000])
  const categories = [
    {
      id: 1,
      name: 'New Arrival',
    },
    {
      id: 2,
      name: 'Top Tranding',
    },
    {
      id: 3,
      name: 'Featured Products',
    },
  ]

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          color: 'black',
          marginBottom: 20,
        }}
      >
        Category
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {categories.map((item) => {
          const backgroundColor = item.id == selectedId ? '#f77951' : '#ffffff'
          const color = item.id == selectedId ? 'white' : 'black'
          return (
            <View
              key={item.id}
              style={{
                backgroundColor: backgroundColor,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 5,
              }}
            >
              <TouchableOpacity onPress={() => setSelectedId(item.id)}>
                <Text
                  style={{
                    fontSize: 16,
                    color: color,
                    fontWeight: '500',
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
      <View
        key={1}
        style={{
          marginTop: 40,
        }}
      >
        <RangeSlider
          step={1}
          category={'PRICING'}
          title={'Pricing'}
          values={pricingValues}
          setValues={setPricingValues}
          sliderLength={WIDTH - 40}
        />
      </View>
      <View
        key={2}
        style={{
          marginTop: 40,
        }}
      >
        <RangeSlider
          step={10}
          category={'DISTANCE'}
          title={'Distance'}
          values={distanceValues}
          setValues={setDistanceValues}
          sliderLength={WIDTH - 40}
        />
      </View>
    </View>
  )
}

export default FilterBody
