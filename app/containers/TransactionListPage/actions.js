import {
	INIT,
  LIST_LOADED,
  PAGINATION_LOADED,
  PAGE,
} from './constants';

export function init() {
  return {
    type: INIT,
  };
}

export function listLoaded(list) {
  return {
    type: LIST_LOADED,
    list,
  };
}

export function paginationLoaded(pagination) {
  return {
    type: PAGINATION_LOADED,
    pagination,
  };
}

export function page(page) {
  return {
    type: PAGE,
    page,
  };
}