import React from 'react'
import { View, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import Decks from './components/decks'
import { Constants } from 'expo'
import { blue } from './utils/colors'


export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBarView>
          <StatusBar
            translucent
            backgroundColor={blue}
            barStyle="light-content"
          />
        </StatusBarView>
        <Decks />
      </View>
    )
  }
}

const StatusBarView = styled.View`
  height: ${Constants.statusBarHeight}
  background: ${ blue }
`
