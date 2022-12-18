import React from 'react'
import { Text, View } from 'react-native'
import Categories from './Categories'
import NewArrival from './NewArrival'
import SearchBar from './SearchBar'

const BodyHome = ({
  data,
  selectedId,
  setSelectedId,
  newArrialData,
  selectedNewArrivalId,
  setSelectedNewArrivalId,
  setIsSearch,
}) => {
  const handleSetSelectedId = () => {
    setSelectedId()
    setIsSearch(true)
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

      {/* Search bar */}
      <SearchBar />
      <Categories data={data} selectedId={selectedId} setSelectedId={handleSetSelectedId} />
      <NewArrival
        newArrialData={newArrialData}
        selectedId={selectedNewArrivalId}
        setSelectedId={setSelectedNewArrivalId}
      />
    </View>
  )
}

export default BodyHome
