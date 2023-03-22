import {PageState} from "../../models/PageState/PageState";

interface ChangePageStateAction {
  type: 'changePageState';
  payload: PageState;
}

export const PageStateReducer = (
    state: PageState,
    action: ChangePageStateAction): PageState => {
  switch (action.type) {
    case "changePageState":
      return action.payload;
    default:
      return state;
  }
}
