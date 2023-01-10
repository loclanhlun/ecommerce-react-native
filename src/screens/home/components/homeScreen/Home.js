import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import BodyHome from './BodyHome'
import FooterHome from './FooterHome'
import Header from '../Header'
import Search from '../searchScreen/Search'
import Filters from '../searchScreen/Filters'
import { useDispatch, useSelector } from 'react-redux'
import { productsSlice } from '../../redux/productSlice'
import ProductDetails from '../productDetailScreen/ProductDetail'
import products from '../../mocks/productTableMock'
import Spinner from 'react-native-loading-spinner-overlay'
import SearchBar from './SearchBar'
import Card from '../card/Card'
const { actions } = productsSlice

const Home = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null)
  const [selectedNewArrivalId, setSelectedNewArrivalId] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [isAddToCard, setIsAddToCard] = useState(false)
  const [productDetailsVisible, setProductDetailsVisible] = useState(false)
  const [selectedFilterId, setSelectedFilterId] = useState(1)
  const dispatch = useDispatch()
  const productsState = useSelector((state) => state.product)
  const getAllProduct = () => {
    dispatch({ type: actions.productsStartCall().type })
  }
  const getProductById = (productId) => {
    dispatch({ type: actions.productDetailsStartCall().type, productId: productId })
  }
  const getProductByCategory = (category) => {
    dispatch({ type: actions.productsByCategoryStartCall().type, category: category })
  }
  const addToCard = (product) => {
    setIsAddToCard(true)
    dispatch({ type: actions.addCardStartCall().type, product })
  }
  useEffect(() => {
    getAllProduct()
  }, [])

  console.log(productsState.cardData)

  useEffect(() => {
    if (searchText != '') {
      setTimeout(() => {
        getProductByCategory(searchText)
      }, 300)
    }
  }, [searchText])

  const DATA_CATEGORIES = [
    {
      id: '1',
      title: 'Dress',
      name: 'dess',
      image: require('../../../../../assets/images/dress-icon.png'),
    },
    {
      id: '3',
      title: 'Shirt',
      name: 'shirt',
      image: require('../../../../../assets/images/shirt-icon.png'),
    },
    {
      id: '2',
      title: 'Pants',
      name: 'pants',
      image: require('../../../../../assets/images/pants-icon.png'),
    },
    {
      id: '4',
      title: 'Tshirt',
      name: 'tshirt',
      image: require('../../../../../assets/images/tshirt-icon.png'),
    },
  ]

  const handleClickProduct = (productId) => {
    getProductById(productId)
    setProductDetailsVisible(true)
  }

  return (
    <>
      <Spinner
        visible={productsState.productDetails?.isLoading || productsState.products?.isLoading}
        textStyle={{
          color: '#FFF',
        }}
      ></Spinner>
      <Header navigation={navigation} />
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        {/* Search bar */}
        <SearchBar
          setModalVisible={setModalVisible}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        {searchText == '' && (
          <>
            <BodyHome
              data={DATA_CATEGORIES}
              newArrialData={products}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              selectedNewArrivalId={selectedNewArrivalId}
              setSelectedNewArrivalId={setSelectedNewArrivalId}
              handleClickProduct={handleClickProduct}
              setSearchText={setSearchText}
              searchText={searchText}
              navigation={navigation}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </>
        )}
        {productsState.products?.isLoading || searchText == '' ? (
          ''
        ) : (
          <Search
            navigation={navigation}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            handleClickProduct={handleClickProduct}
            productsData={productsState.products}
          />
        )}
      </ScrollView>
      <Filters
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        selectedId={selectedFilterId}
        setSelectedId={setSelectedFilterId}
      />
      <FooterHome />
      {productsState.productDetails?.isLoading ? (
        ''
      ) : (
        <ProductDetails
          modalVisible={productDetailsVisible}
          setModalVisible={setProductDetailsVisible}
          productDetailsData={productsState?.productDetails?.data}
          image={productsState?.productDetails?.data.image}
          addToCard={addToCard}
        />
      )}

      {/* {!productsState.cardData?.isLoading && !isAddToCard ? '' : <Card />} */}
    </>
  )
}

export default Home
