import { createSlice, current } from '@reduxjs/toolkit'

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
      let data = [...state.cardData.data]
      const productIndex = data.findIndex((item) => {
        const product = action.payload.productToAdd
        return product.id == item.id
      })
      if (productIndex != -1) {
        const quantity = data[productIndex].quantity + 1
        state.cardData.data[productIndex].quantity = quantity
      } else {
        data.push(action.payload.productToAdd)
        return {
          ...state,
          cardData: {
            data: data,
            isLoading: false,
            error: null,
          },
        }
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
    increaseQuantity: (state, action) => {
      const data = state.cardData.data
      const productIndex = data.findIndex((item) => {
        const id = action.id
        return item.id == id
      })

      state.cardData.data[productIndex].quantity += 1
    },
    decreaseQuantity: (state, action) => {
      const data = state.cardData.data
      const productIndex = data.findIndex((item) => {
        const id = action.id
        return item.id == id
      })

      const quantity = state.cardData.data[productIndex].quantity
      if (quantity >= 0) {
        state.cardData.data[productIndex].quantity -= 1
        if (state.cardData.data[productIndex].quantity < 1) {
          state.cardData.data.splice(productIndex, 1)
        }
      }
    },
  },
})

export default productsSlice.reducer
