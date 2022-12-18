import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import BodyHome from './BodyHome'
import FooterHome from './FooterHome'
import Header from '../Header'
import Search from '../searchScreen/Search'

const Home = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null)
  const [selectedNewArrivalId, setSelectedNewArrivalId] = useState(null)
  const [isSearch, setIsSearch] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const DATA_CATEGORIES = [
    {
      id: '1',
      title: 'Dress',
      image: require('../../../../../assets/images/dress-icon.png'),
    },
    {
      id: '3',
      title: 'Shirt',
      image: require('../../../../../assets/images/shirt-icon.png'),
    },
    {
      id: '2',
      title: 'Pants',
      image: require('../../../../../assets/images/pants-icon.png'),
    },
    {
      id: '4',
      title: 'Tshirt',
      image: require('../../../../../assets/images/tshirt-icon.png'),
    },
    {
      id: '5',
      title: 'Tshirt',
      image: require('../../../../../assets/images/tshirt-icon.png'),
    },
  ]

  const DATA_NEW_ARRIVAL = [
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
      {!isSearch ? (
        <>
          <Header navigation={navigation} />
          <ScrollView
            style={{
              flex: 1,
            }}
          >
            <BodyHome
              data={DATA_CATEGORIES}
              newArrialData={DATA_NEW_ARRIVAL}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedNewArrivalId={selectedNewArrivalId}
              setSelectedNewArrivalId={setSelectedNewArrivalId}
              setIsSearch={setIsSearch}
              isSearch={isSearch}
              navigation={navigation}
            />
          </ScrollView>
          <FooterHome />
        </>
      ) : (
        <Search
          navigation={navigation}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </>
  )
}

export default Home
