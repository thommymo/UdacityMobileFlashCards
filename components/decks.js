import React, {Component} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { white, bluelight, blue, bluedark } from '../utils/colors'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'

const BlueView = styled.View`
  background-color: ${blue};
  flex:1;
  align-items: center;
  justify-content: flex-start;
`
const DeckView = styled.TouchableOpacity`
  flex:1;
  min-width: 100%;
  max-height: 120px;
  justify-content: center;
  align-items: center;
  background-color: ${bluelight};
  margin-bottom:0.5px;
`
const DeckTitelText = styled.Text`
  font-family: 'source-sans-pro-light';
  font-size: 25px;
  color: ${white};
`
const DeckSubTitelText = styled.Text`
  font-family: 'source-sans-pro-light';
  font-size: 15px;
  color: ${white};
`

class Decks extends Component {

  render(){
    const { decks, navigation } = this.props
    return(
      <BlueView>

        {Object.keys(decks).map((deckname) => (
          <DeckView key={deckname} onPress={() => navigation.navigate('Deck', { title: decks[deckname].title })}>
            <DeckTitelText>{decks[deckname].title}</DeckTitelText>
            <DeckSubTitelText>{decks[deckname].questions.length} Card(s)</DeckSubTitelText>
          </DeckView>
        ))}

      </BlueView>
    )
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks)
