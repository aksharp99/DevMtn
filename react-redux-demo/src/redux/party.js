const ADD_GUEST = 'party/ADD_GUEST';

const initialState = {
  guest: ['Batman','Alfred','Catwoman']
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case ADD_GUEST:
      return {
        guests: [...state.guests, action.payload]
      }
  }
}

// var example = {
//   type: ADD_GUEST,
//   payload: 'Jeff'
// }

dispatch({type: 'ADD_GUEST', payload:'Jeff'})

export function addGuest(guest) {
  return {
    type:ADD_GUEST,
    payload: guest
  }
}
