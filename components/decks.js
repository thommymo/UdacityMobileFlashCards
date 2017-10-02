import React, {Component} from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { white, bluelight } from '../utils/colors'
import { connect } from 'react-redux'

const BlueText = styled.Text`
  color: ${white};
  font-family: "source-sans-pro-light";
  font-size: 40px;
  flex:1;
`

const BlueView = styled.View`
  background-color: ${bluelight};
  flex:1;
  align-items: center;
`

const DeckView = styled.View`
  flex:1;
`

class Decks extends Component {

  render(){
    return(
      <BlueView>
        <BlueText>Decks View</BlueText>

        {Object.keys(this.props.decks).map((deckname) => (
          <DeckView key={deckname}>
            <Text>{this.props.decks[deckname].title}</Text>
            <Text>{this.props.decks[deckname].questions.length}</Text>
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
