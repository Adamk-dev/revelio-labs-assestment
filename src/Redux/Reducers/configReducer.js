import {DARK_MODE, SAVE_LIST} from '../types';

const initialState = {
  mode: false,
  starred: []
};

export default (state = initialState, action) => {

  console.log("redux", state)
  switch (action.type) {
    case DARK_MODE:
      return {...state, mode: action.payload};
    case SAVE_LIST:
      return {...state, starred: [...state.starred,action.payload]}
      // return []

    default:
      return state;
  }
};


