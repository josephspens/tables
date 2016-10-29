import * as Actions from '../actions/repos';

export const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.RECEIVE_REPOS:
      return action.repos
    default:
      return state;
  }
};
