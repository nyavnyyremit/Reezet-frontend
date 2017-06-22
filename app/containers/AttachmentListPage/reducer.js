import { fromJS } from 'immutable';

import {
  INIT,
  LIST_LOADED,
  PAGINATION_LOADED,
  PAGE,
} from './constants';

const initialState = fromJS({
	list: false,
  pagination: false,
  currentPage: 0,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT:
      return state
        .set('list', false)
        .set('pagination', false)
        .set('currentPage', 0)
    case LIST_LOADED:
      return state
        .set('list', action.list)
    case PAGINATION_LOADED:
      return state
        .set('pagination', action.pagination)
    case PAGE:
      return state
        .set('currentPage', action.page)
    default:
      return state;
  }
}

export default reducer;