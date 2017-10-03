import React, {Component} from 'react'
import { connect } from 'react-redux'
import { MyKeyboardAvoidingView, MyTextInput, GridFooter, BlueView, GridTop, GridBottom, BigBlueText, SmallBlueText, BlueLightView, Button, ButtonGreen, ButtonText } from '../components/styledComponents'
import { View } from 'react-native'
import { createNewDeck } from '../actions'
import { gray, reddark } from '../utils/colors'
import { saveDeckTitle } from '../utils/api'


class addDeck extends Component {

  state = {
    text: 'Enter your Title',
    color: gray
  }

  onSubmitForm = () => {
    if (this.state.text === '' || this.state.text === 'Enter your Title'){
      this.setState({text: "Enter your Title", color: reddark})
    } else {
      this.props.dispatch(createNewDeck(this.state.text))
      saveDeckTitle(this.state.text)
      this.props.navigation.navigate('Decks')
    }
  }

  render(){
    return(

        <BlueLightView>
          <MyKeyboardAvoidingView>
            <GridTop>
              <BigBlueText>
                Title of Deck
              </BigBlueText>
              <MyTextInput
                onChangeText = {(text) => this.setState({text})}
                placeholder = {this.state.text}
                placeholderTextColor = {this.state.color}
              />
              <View style={{height:50}}/>
              <GridTop>
                <ButtonGreen onPress={() => this.onSubmitForm()}>
                    <ButtonText>
                      Submit Deck
                    </ButtonText>
                  </ButtonGreen>
                </GridTop>
                </GridTop>
          </MyKeyboardAvoidingView>
        </BlueLightView>

    )
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(addDeck)
