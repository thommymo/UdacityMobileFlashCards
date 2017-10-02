import React, {Component} from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { white, bluelight, blue } from '../utils/colors'
import { connect } from 'react-redux'


const TitleView = styled.View`
  min-width: 100%;
  align-items: center;
`
const TitleText = styled.Text`
  color: ${white};
  font-family: "source-sans-pro-light";
  font-size: 40px;
  height: 50px;
`
const BlueView = styled.View`
  background-color: ${bluelight};
  flex:1;
  align-items: center;
  justify-content: flex-start;
`
const DeckView = styled.View`
  flex:1;
  min-width: 100%;
  max-height: 120px;
  justify-content: center;
  align-items: center;
  background-color: ${blue};
  margin-top:1px;
`

class Decks extends Component {

  render(){
    const { decks } = this.props
    return(
      <BlueView>
        <TitleView>
          <TitleText>Decks View</TitleText>
        </TitleView>

        {Object.keys(decks).map((deckname) => (
          <DeckView key={deckname}>
            <Text>{decks[deckname].title}</Text>
            <Text>{decks[deckname].questions.length} Card(s)</Text>
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
