import * as Actions from '../actions/repos';

export const initialPage = {
  start: 1,
  limit: 10
};

export const initialSorting = {
  sort: 'full_name',
  direction: 'asc'
}

export const initialState = {
  items: [],
  ...initialPage,
  ...initialSorting,
  page: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.REQUEST_REPOS:
      return Object.assign({}, state, typeof action.options === 'object' ? action.options : {});
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
