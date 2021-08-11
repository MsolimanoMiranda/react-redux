import { ADD_ALERT, REMOVE_ALERT, ADD_ALERT_SUCCESS, ADD_ALERT_DANGER, ADD_ALERT_WARNING } from './actionTypes';

interface IPayload {
  message: string,
  description: string,
  isHtml?: boolean,
}

const addAlert = (payload: any) => {
    return {
      type: ADD_ALERT,
      payload
    };
  };

const success = (payload: IPayload) => {
  return {
    type: ADD_ALERT_SUCCESS,
    payload
  };
};

const danger = (payload: IPayload) => {
  return {
    type: ADD_ALERT_DANGER,
    payload
  };
};

const warning = (payload: IPayload) => {
  return {
    type: ADD_ALERT_WARNING,
    payload
  };
};
  
const remove = () => {
    return {
      type: REMOVE_ALERT,
      payload: {
        message: '',
        description: ''
      }
    };
  };


const AlertActions = {
  addAlert,
  success,
  danger,
  warning,
  remove
}

export default AlertActions;
