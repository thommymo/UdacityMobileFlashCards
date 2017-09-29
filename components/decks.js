import React, {Component} from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { bluedark } from '../utils/colors'

const BlueText = styled.Text`
  color: ${bluedark};
  font-size: 60px;
  font-weight: 800;
`

class Decks extends Component {
  render(){
    return(
      <View>
        <BlueText>Decks View</BlueText>
      </View>
    )
  }
}

export default Decks
