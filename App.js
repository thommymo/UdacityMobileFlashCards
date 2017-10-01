import React from 'react'
import { View, StatusBar, Text } from 'react-native'
import styled from 'styled-components/native'
import Decks from './components/decks'
import Deck from './components/deck'
import { Constants } from 'expo'
import { blue, red, redlight } from './utils/colors'
import { Font } from 'expo';
import { Asset, AppLoading } from 'expo';
import { TabNavigator } from 'react-navigation';

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
      <View style={{flex: 1}}>
        <StatusBarView>
          <StatusBar
            translucent
            backgroundColor={blue}
            barStyle="light-content"
          />
        </StatusBarView>
        <Tabs  style={{flex: 1}}/>
      </View>
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

const Tabs = TabNavigator({
  Deck: {
    screen: Deck,
    navigationOptions: {
      tabBarLabel: 'Deck View',
    },
  },
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks View',
    },
  },
},{
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    inactiveBackgroundColor: redlight,
    activeBackgroundColor: red,
    tinColor: '#fff',
    activeTintColor: '#eee',
    inactiveTintColor: '#fff',
    showIcon: true,
    showLabel: true,
    lazyLoad: true,
    upperCaseLabel: false,
    indicatorStyle: {
      backgroundColor: red
    },
    style: {
      borderTopWidth: 1,
      borderTopColor: '#FFF',
    },
    labelStyle: {
      flex: 1,
      fontSize: 20,
      fontFamily: 'source-sans-pro-light',
      paddingBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
})

const StatusBarView = styled.View`
  height: ${Constants.statusBarHeight};
  background: ${ blue };
`
