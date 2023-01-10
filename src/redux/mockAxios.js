import MockAdapter from 'axios-mock-adapter'
import mockProduct from '../screens/home/mocks/mockProduct'
export default function mockAxios(axios) {
  const mock = new MockAdapter(axios, { delayResponse: 300 })
  mockProduct(mock)
  return mock
}
