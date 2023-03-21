import React, {useEffect, useState} from 'react';
import {PodcastList} from "../components/composed/PodcastList";
import PodcastAPI from "../services/API/PodcastAPI";
import {Podcast} from "../models/Podcast/Podcast";
import {FilterInput} from "../components/atomic/FilterInput";

interface state {
  podcasts: Podcast[],
  podcastsFiltered: Podcast[],
}

export const HomePagePodcast = () => {
  const initialState: state = {
    podcasts: [],
    podcastsFiltered: [],
  }
  const [state, setState] = useState<state>(initialState);

  const getPodcastList = () => {
    PodcastAPI.getPodcastList()
        .then(podcastsResponse =>
            setState((prevState) => ({
              ...prevState,
              podcasts: podcastsResponse,
              podcastsFiltered: podcastsResponse,
            }))
        );
  }

  useEffect(() => {
    getPodcastList();
  }, []);

  const onFilterHandler = (podcastFiltered: Podcast[]) => {
    setState((prevState) => ({
      ...prevState,
      podcastsFiltered: podcastFiltered,
    }));
  }

  return (
      <div className={'home-page-podcast-container'}>
        <div className={'title-container'}>
          <h2>{'Podcaster'}</h2>
        </div>
        <div className={'filter-container'}>
          <FilterInput data={state.podcasts} onFilterData={onFilterHandler}/>
        </div>
        <PodcastList podcasts={state.podcastsFiltered} />
      </div>
  );
};