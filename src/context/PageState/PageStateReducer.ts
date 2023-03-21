import {PageState} from "../../models/PageState/PageState";

export const PageStateReducer = (state: PageState, action: {
  type: 'changePageState',
  payload: PageState
}): PageState => {
  switch (action.type) {
    case "changePageState":
      return action.payload;
    default:
      return state;
  }
}
