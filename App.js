import React from 'react'
import { View, StatusBar, Text } from 'react-native'
import styled from 'styled-components/native'
import Decks from './components/decks'
import Deck from './components/deck'
import Quiz from './components/quiz'
import addDeck from './components/addDeck'
import addCard from './components/addCard'
import { Constants } from 'expo'
import { blue, red, redlight, white, bluelight } from './utils/colors'
import { Font } from 'expo';
import { Asset, AppLoading } from 'expo';
import { StackNavigator } from 'react-navigation';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {
  state = {
    isReady: false,
  };
  render() {
    if (!this.state.isReady) {
      return(
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <StatusBarView>
            <StatusBar
              translucent
              backgroundColor={blue}
              barStyle="light-content"
            />
          </StatusBarView>
          <Stack/>
        </View>
      </Provider>
    )
  }
  async _cacheResourcesAsync() {
    const fonts = [
      require('./assets/fonts/SourceSansPro-Light.ttf'),
    ];

    for (let font of fonts) {
      await Font.loadAsync({
        'source-sans-pro-light': require('./assets/fonts/SourceSansPro-Light.ttf'),
      })
    }
  }
}

//TODO: Create Component that extends TabNavigator to use css from styled components

const Stack = StackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      title: 'All Decks',

    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.title,
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.title,
    }),
  },
  addDeck: {
    screen: addDeck,
    navigationOptions: {
      title: 'Add Deck',
    },
  },
  addCard: {
    screen: addCard,
    navigationOptions: {
      title: 'Add Card',
    },
  },
},{
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    }
  }
)

const StatusBarView = styled.View`
  height: ${Constants.statusBarHeight};
  background: ${ blue };
`
