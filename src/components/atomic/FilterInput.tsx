import React, {useEffect, useState} from 'react';
import {Podcast} from "../../models/Podcast/Podcast";

interface props {
  data: Podcast[];
  onFilterData: (data: Podcast[]) => void;
}

interface state {
  textInput: string;
  podcastsFiltered: Podcast[]
}

export const FilterInput = (props: props) => {
  const [state, setState] = useState<state>({textInput: "", podcastsFiltered: props.data})

  useEffect(() => {
    props.onFilterData(state.podcastsFiltered);
  }, [state.podcastsFiltered]);

  useEffect(() => {
    const dataFiltered = props.data.filter((podcastToFilter) => {
      return podcastToFilter.name.toUpperCase().includes(state.textInput.toUpperCase()) || podcastToFilter.author.toUpperCase().includes(state.textInput.toUpperCase());
    })

    setState((prevState) => ({
      ...prevState,
      podcastsFiltered: dataFiltered
    }));
  }, [state.textInput]);

  return (
      <div className={"filter-input-container"}>
        <span>{state.podcastsFiltered.length}</span>
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