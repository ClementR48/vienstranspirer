import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";


export const openMenu = () =>  {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.OPENMENU,
    })
  }
}