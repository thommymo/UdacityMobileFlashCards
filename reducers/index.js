import {
  RECEIVE_DECKS,
  CREATE_NEW_DECK,
  CREATE_NEW_CARD,
  UPDATE_SUCCESS,
} from "../actions"

function decks (state = initialFlashCards, action){
  switch(action.type){
    case RECEIVE_DECKS:
      //Todo: Gets all Desks and ads it to the Redux Store
      return state
    case CREATE_NEW_DECK:
      return ( {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [],
          correct: 0,
        }
      })
      //Todo: Adds a new Desk to the Desks
    //  return state
    case CREATE_NEW_CARD:
      console.log(state[action.deckname])
      state[action.deckname].questions.push({question: action.question, answer: action.answer})
      /*return Object.assign({}, state, {
        state[action.title].questions:
      })*/
      return state
    case UPDATE_SUCCESS:
      state[action.deckname].correct = action.correct
      return state
    default:
      return state
  }
}

const initialFlashCards = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ],
    correct: 0,
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ],
    correct: 0,
  }
}

export default decks
