import { ADD_ALERT, REMOVE_ALERT, ADD_ALERT_SUCCESS, ADD_ALERT_DANGER, ADD_ALERT_WARNING } from './actionTypes';
import IAction from '../../models/action.model';

const defaultStore: any = {
  isActive: false,
}

export default function alert(
  state: any = defaultStore,
  action: IAction,
) {
  switch (action.type) {
    case ADD_ALERT:
      return {
        isActive: true,
        payload: action.payload
      };
      break;
    case ADD_ALERT_SUCCESS:
      return {
        isActive: true,
        payload: {
          ...action.payload,
          className: 'is-success'
        }
      };
      break;
    case ADD_ALERT_WARNING:
      return {
        isActive: true,
        payload: {
          ...action.payload,
          className: 'is-warning'
        }
      };
      break;
    case ADD_ALERT_DANGER:
      return {
        isActive: true,
        payload: {
          ...action.payload,
          className: 'is-danger'
        }
      };
      break;
    case REMOVE_ALERT:
      return {
        ...state,
        isActive: false,
      }

    default:
      return state;
  }
}
