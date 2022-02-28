import { ActionType } from '../action-types';
import { Action } from '../actions/index';
import { openMenu } from '../action-creator/index';


const initialState = {
  openMenu: false
}



const globalReducer = (state = initialState, action: Action) => {
  switch (action.type){
    case ActionType.OPENMENU:
      return {
        ...state,
        openMenu: !state.openMenu
      }
     ;
    default:
      return state
  }
}

export default globalReducer ;