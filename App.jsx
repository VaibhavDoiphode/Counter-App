import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux/es/exports'
import Counter from './Component/Counter'
import { counterStore } from './Component/counterStore'
const App = () => {
  return (
    <Provider store={counterStore}>
      <Counter/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})