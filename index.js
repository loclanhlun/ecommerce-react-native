/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import axios from 'axios'
import mockAxios from './src/redux/mockAxios'

mockAxios(axios)

AppRegistry.registerComponent(appName, () => App)
