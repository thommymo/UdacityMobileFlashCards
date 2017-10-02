import {
  REQUEST_DESKS,
  CREATE_NEW_DESK,
  CREATE_NEW_QUESTION,
} from "../actions"

function decks (state = initialFlashCards, action){
  switch(action.type){
    case REQUEST_DESKS:
      //Todo: Gets all Desks and ads it to the Redux Store
      return state
    case CREATE_NEW_DESK:
      //Todo: Adds a new Desk to the Desks
      return state
    case CREATE_NEW_QUESTION:
      //Todo: Adds a new Question to a Desk
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
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export default decks
