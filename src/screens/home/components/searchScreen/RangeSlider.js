import MultiSlider from '@ptomasroos/react-native-multi-slider'
import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'

const RangeSlider = ({ title, values, setValues, sliderLength, category, step }) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: 'black',
          }}
        >
          {title}
        </Text>
        {category == 'PRICING' ? (
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'black',
            }}
          >
            ${values[0]}-${values[1]}
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'black',
            }}
          >
            {values[0] >= 1000 ? values[0] / 1000 : values[0]}
            {values[0] >= 1000 ? 'Km' : 'M'}-{values[1] >= 1000 ? values[1] / 1000 : values[1]}
            {values[1] >= 1000 ? 'Km' : 'M'}
          </Text>
        )}
      </View>
      <MultiSlider
        onValuesChange={(e) => {
          setValues(e)
        }}
        isMarkersSeparated
        sliderLength={sliderLength}
        enableLabel={true}
        values={values}
        min={values[0]}
        max={values[1]}
        step={step}
        valuePrefix={values}
        valueSuffix={values}
      />
    </>
  )
}

export default RangeSlider
