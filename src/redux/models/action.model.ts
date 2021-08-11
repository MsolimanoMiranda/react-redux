import IState from "./state.model";

export default interface IAction {
  type: string;
  payload: IState;
}
