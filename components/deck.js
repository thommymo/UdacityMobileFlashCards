import React, {Component} from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { white, bluelight } from '../utils/colors'

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

class Decks extends Component {

  render(){
    return(
      <BlueView>
        <BlueText>Deck View</BlueText>
      </BlueView>
    )
  }
}

export default Decks
