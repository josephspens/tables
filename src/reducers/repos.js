import * as Actions from '../actions/repos';

export const firstPage = {
  start: 1,
  limit: 10
};

export const initialState = {
  items: [],
  ...firstPage,
  page: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.REQUEST_REPOS:
      return {
        ...state,
        ...action.options
      };
    case Actions.RECEIVE_REPOS:
      return {
        ...state,
        items: action.repos,
        page: action.links
      };
    default:
      return state;
  }
};
