const REQUEST_DESKS = 'REQUEST_DESKS'
const CREATE_NEW_DESK = 'CREATE_NEW_DESK'
const CREATE_NEW_QUESTION = 'CREATE_NEW_QUESTION'

export function receiveDesks (desks) {
  return {
    type: RECEIVE_ENTRIES,
    desks,
  }
}

export function createNewDesk (deskname) {
  return {
    type: RECEIVE_ENTRIES,
    deskname,
  }
}

export function createNewQuestion (deskname, question, answer) {
  return {
    type: RECEIVE_ENTRIES,
    deskname,
    question,
    answer,
  }
}
