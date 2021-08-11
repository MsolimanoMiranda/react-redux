import { FETCH, SET, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

export function set(payload: any) {
  return {
    type: SET,
    payload
  }
}

export function fetch(payload: any) {
  return {
    type: FETCH,
    payload
  }
}

export function fetchSuccess(payload?: any) {
  return {
    type: FETCH_SUCCESS,
    payload
  }
}

export function fetchFail(payload: any) {
  return {
    type: FETCH_FAILURE,
    payload
  }
}
