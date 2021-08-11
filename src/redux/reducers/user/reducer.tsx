import { SET, FETCH, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';
import IState from '../../models/state.model';
import IAction from '../../models/action.model';


const defaultStore: IState = {
  username: 'test'
}

export default function user(
  state: IState = defaultStore,
  action: IAction,
) {
  switch (action.type) {
    case SET: 
      return {
        ...state,
        username: action.payload
      };

    case FETCH: 
      return {
        ...state
      };
    
    case FETCH_SUCCESS: 
      return {
        ...state,
        username: action.payload
      }
    
    case FETCH_FAILURE: 
      return {
        ...state
      }

    default:
      return state;
  }
}
