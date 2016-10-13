import { combineReducers } from 'redux';
import { CHARACTERS_FETCH_SUCCEEDED } from '../actions/characters';

const characters = (state = [], { type, data }) => {
  switch (type) {
    case CHARACTERS_FETCH_SUCCEEDED:
      return data.items
    default:
      return state;
  }
}

export default combineReducers({ characters });
