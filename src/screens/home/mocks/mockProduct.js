import products from './productTableMock'

export default function mockProduct(mock) {
  mock.onGet('api/product').reply((config) => {
    // `config` is the axios config and contains things like the url
    // return an array in the form of [status, data, headers]
    return [
      200,
      {
        products,
      },
    ]
  })

  mock.onPost(`api/product/find`).reply((config) => {
    const { productId } = JSON.parse(config.data)
    const product = products.find((item) => {
      return item.id === +productId
    })
    return [200, { product }]
  })

  mock.onPost(`api/product/find/category`).reply((config) => {
    const { category } = JSON.parse(config.data)
    const product = products.filter((item) => {
      return item.category === category
    })
    return [200, { product }]
  })
}
