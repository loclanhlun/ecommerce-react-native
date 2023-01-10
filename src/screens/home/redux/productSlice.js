import { createSlice } from '@reduxjs/toolkit'

const initialProductsState = {
  products: {
    data: [],
    isLoading: false,
    error: null,
  },
  productDetails: {
    data: {},
    isLoading: false,
    error: null,
  },
  cardData: {
    data: [],
    isLoading: false,
    error: null,
  },
}

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    productsStartCall: (state, action) => {
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: true,
        },
      }
    },
    productsReceived: (state, action) => {
      return {
        ...state,
        products: {
          data: action.payload,
          isLoading: false,
          error: null,
        },
      }
    },
    productsFailed: (state, action) => {
      return {
        ...state,
        products: {
          data: [],
          isLoading: false,
          error: action.payload,
        },
      }
    },
    productDetailsStartCall: (state, action) => {
      return {
        ...state,
        productDetails: {
          ...state.productDetails,
          isLoading: true,
        },
      }
    },
    productDetailsReceived: (state, action) => {
      return {
        ...state,
        productDetails: {
          data: action.payload,
          isLoading: false,
          error: null,
        },
      }
    },
    productDetailsFailed: (state, action) => {
      return {
        ...state,
        productDetails: {
          data: {},
          isLoading: false,
          error: action.payload,
        },
      }
    },
    productsByCategoryStartCall: (state, action) => {
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: true,
        },
      }
    },
    productsByCategoryReceived: (state, action) => {
      return {
        ...state,
        products: {
          data: action.payload,
          isLoading: false,
          error: null,
        },
      }
    },
    productsByCategoryFailed: (state, action) => {
      return {
        ...state,
        products: {
          data: {},
          isLoading: false,
          error: action.payload,
        },
      }
    },
    addCardStartCall: (state, action) => {
      return {
        ...state,
        cardData: {
          ...state.cardData,
          isLoading: true,
        },
      }
    },
    addCardReceived: (state, action) => {
      let oldData = state
      console.log(oldData)
      // const newData = oldData.push(action.payload)
      return {
        ...state,
        cardData: {
          data: oldData,
          isLoading: false,
          error: null,
        },
      }
    },
    addCardFailed: (state, action) => {
      return {
        ...state,
        products: {
          data: [state.cardData.data],
          isLoading: false,
          error: action.payload,
        },
      }
    },
  },
})

export default productsSlice.reducer
