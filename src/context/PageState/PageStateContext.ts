import {createContext} from "react";
import {PageState} from "../../models/PageState/PageState";

interface props {
  pageState: PageState,
  changePageState: (pageState: PageState) => void
}

export const PageStateContext = createContext<props>({} as props)

