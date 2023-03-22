import React, {useReducer} from "react";
import {PageState, PageStates} from "../../models/PageState/PageState";
import { PageStateContext } from "./PageStateContext";
import {PageStateReducer} from "./PageStateReducer";

interface props {
  children: JSX.Element | JSX.Element[]
}


const INITIAL_STATE: PageState = {
  state: PageStates.mainState,
  podcastInfoSelected: null,
}

export const PageStateProvider = ({children}: props) => {
  const [pageStateState, dispatch] = useReducer(PageStateReducer, INITIAL_STATE);

  const changePageState = (pageState: PageState) => {
    dispatch({type: "changePageState", payload: pageState});
  };

  return (
      <PageStateContext.Provider value={{
        pageState: pageStateState,
        changePageState
      }}>
        {children}
      </PageStateContext.Provider>
  )
}
