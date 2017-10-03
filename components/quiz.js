import React, {Component} from 'react'
import { Text, View, ProgressViewIOS, Platform, ProgressBarAndroid } from 'react-native'
import styled from 'styled-components/native'
import { white, bluegreendark, bluelight, blue, reddark, red, bluedark } from '../utils/colors'
import {connect} from 'react-redux'
import { TextLink, BlueView, GridTop, GridBottom, BigBlueText, SmallBlueText, BlueLightView, Button, ButtonGreen, ButtonText } from '../components/styledComponents'
import { updateSuccess } from '../actions'

const ButtonRed = Button.extend`
  background-color: ${red};
`

const BlueText = BigBlueText.extend`
  font-size: 30px;
`
const RedButtonText = ButtonText.extend`
  color: ${bluedark};
`

const ButtonSmall = Button.extend`

`


class Quiz extends Component {

  state = {
    showAnswer: false
  }

  answer = (value) => {
    const { decks, navigation } = this.props
    const { title, id, counter } = navigation.state.params
    const correct = counter===0 ? value : decks[id].correct + value

    // Count correct Answer and Store this in the Redux Store
    this.props.dispatch(updateSuccess(id, correct))
    // Go to next Qustion
    navigation.navigate('Quiz', {
      title,
      id,
      counter: counter+1
    })
  }

  showAnswer = () => {
    this.setState(() => ({showAnswer: true}))
  }

  showQuestion = () => {
    this.setState(() => ({showAnswer: false}))
  }

  render(){
    const {decks, navigation} = this.props
    const {id, counter} = navigation.state.params
    const currentdeck = decks[id]
    const progress = counter/currentdeck.questions.length

    return(

      <BlueLightView>
        {Platform.OS === "ios"
          ?
            <ProgressViewIOS
              progress={progress}
              progressTintColor={white}
              trackTintColor={blue}
              style={{width: 200, paddingBottom: 10, marginTop: 20}}
            />
          :
          <ProgressBarAndroid
            progress={progress}
            color={white}
            trackTintColor={blue}
            styleAttr = 'Horizontal'
            indeterminate={false}
            style={{width: 200, marginTop: 20}}
          />

        }
        { counter<currentdeck.questions.length
          ?
            <BlueLightView>

              <SmallBlueText>{counter+1}/{currentdeck.questions.length}</SmallBlueText>
              { this.state.showAnswer===true
                ?
                  <GridTop>
                    <BlueText>
                      {currentdeck.questions[counter].answer}
                    </BlueText>
                    <TextLink onPress={()=>(this.showQuestion())}>
                      <RedButtonText>Show Question</RedButtonText>
                    </TextLink>
                  </GridTop>
                :
                <GridTop>
                  <BigBlueText>
                    {currentdeck.questions[counter].question}
                  </BigBlueText>
                  <TextLink onPress={()=>(this.showAnswer())}>
                    <RedButtonText>Show Answer</RedButtonText>
                  </TextLink>
                </GridTop>
              }
              <GridBottom>
                <ButtonGreen onPress={() => this.answer(1)}>
                  <ButtonText>Correct</ButtonText>
                </ButtonGreen>
                <ButtonRed onPress={() => this.answer(0)}>
                  <ButtonText>Incorrect</ButtonText>
                </ButtonRed>
              </GridBottom>
            </BlueLightView>
          :
          <BlueLightView>
            <SmallBlueText>All questions answered!</SmallBlueText>
            <GridTop>

              <SmallBlueText>
                Correct answers:
              </SmallBlueText>
              <BigBlueText>
                {Math.round(100*currentdeck.correct/currentdeck.questions.length)}%
              </BigBlueText>
              <SmallBlueText>
                {`This is ${currentdeck.correct} out of ${currentdeck.questions.length} questions.`}
              </SmallBlueText>
            </GridTop>
            <GridBottom>
              <ButtonGreen onPress={() => navigation.navigate('Quiz', { title: `${currentdeck.title} Quiz`, id: currentdeck.title, counter: 0 })}>
                <ButtonText>Start again</ButtonText>
              </ButtonGreen>
              <Button onPress={() => navigation.navigate('Decks')}>
                <ButtonText>Show all Desks</ButtonText>
              </Button>
            </GridBottom>
          </BlueLightView>
        }
      </BlueLightView>
    )
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Quiz)
