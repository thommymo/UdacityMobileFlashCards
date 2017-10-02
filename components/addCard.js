import React, {Component} from 'react'
import { connect } from 'react-redux'
import { MyKeyboardAvoidingView, MyTextInput, GridFooter, BlueView, GridTop, GridBottom, BigBlueText, SmallBlueText, BlueLightView, Button, ButtonGreen, ButtonText } from '../components/styledComponents'
import { View } from 'react-native'
import { createNewCard} from '../actions'
import { gray, reddark } from '../utils/colors'


class addCard extends Component {

  state = {
    textQuestion: 'Enter your Question',
    textAnswer: 'Enter your Answer',
    color: gray
  }

  onSubmitForm = () => {
    if (this.state.textQuestion === '' || this.state.textQuestion === 'Enter your Question'){
      this.setState({textQuestion: "Enter your Question", color: reddark})
    } else if (this.state.textAnswer === '' || this.state.textAnswer === 'Enter your Answer'){
        this.setState({textAnswer: "Enter your Answer", color: reddark})
    } else {
      this.props.dispatch(createNewCard(this.props.navigation.state.params.id, this.state.textQuestion, this.state.textAnswer))
      this.props.navigation.navigate('Deck', {title: this.props.navigation.state.params.id})
    }
  }

  render(){
    return(

        <BlueLightView>
          <MyKeyboardAvoidingView>
            <GridTop>
              <BigBlueText>
                Question
              </BigBlueText>
              <MyTextInput
                onChangeText = {(textQuestion) => this.setState({textQuestion})}
                placeholder = {this.state.textQuestion}
                placeholderTextColor = {this.state.color}
              />
              <BigBlueText>
                Answer
              </BigBlueText>
              <MyTextInput
                onChangeText = {(textAnswer) => this.setState({textAnswer})}
                placeholder = {this.state.textAnswer}
                placeholderTextColor = {this.state.color}
              />
              <View style={{height:50}}/>
              <GridTop>
                <ButtonGreen onPress={() => this.onSubmitForm()}>
                  <ButtonText>
                    Submit Card
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

export default connect(mapStateToProps)(addCard)
