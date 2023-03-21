import React, {useEffect, useState} from 'react';
import {Podcast} from "../../models/Podcast/Podcast";

interface props {
  data: Podcast[];
  filteredNumber: number;
  onFilterData: (data: Podcast[]) => void;
}

interface state {
  textInput: string;

}

export const FilterInput = (props: props) => {
  const [state, setState] = useState<state>({textInput: ""})

  useEffect(() => {
    const dataFiltered = props.data.filter((podcastToFilter) => {
      return podcastToFilter.name.toUpperCase().includes(state.textInput.toUpperCase()) || podcastToFilter.author.toUpperCase().includes(state.textInput.toUpperCase());
    })

    props.onFilterData(dataFiltered);
  }, [state.textInput])
  return (
      <div className={"filter-input-container"}>
        <span>{props.filteredNumber}</span>
        <input
            value={state.textInput}
            type={"text"}
            onChange={(event) => {
              setState((prevState) => ({...prevState, textInput: event.target.value}));
            }}
        />
      </div>
  );
}