import React, {Component} from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import {
  BlueText,
  BlueView,
  DeckView,
  DeckTitleText,
  DeckSubTitleText,
  BlueLightView,
  ButtonGreen,
  ButtonText,
  GridTop,
  GridBottom,
  GridFooter
} from '../components/styledComponents'

class Decks extends Component {

  render(){
    const { decks, navigation } = this.props
    return(
      <BlueView>
        <GridTop>
          {Object.keys(decks).map((deckname) => (
            <DeckView key={deckname} onPress={() => navigation.navigate('Deck', { title: decks[deckname].title })}>
              <DeckTitleText>{decks[deckname].title}</DeckTitleText>
              <DeckSubTitleText>{decks[deckname].questions.length} Card(s)</DeckSubTitleText>
            </DeckView>
          ))}
        </GridTop>

        <GridFooter>
          <ButtonGreen onPress={() => navigation.navigate('addDeck')}>
            <ButtonText>Add Deck</ButtonText>
          </ButtonGreen>
        </GridFooter>
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
