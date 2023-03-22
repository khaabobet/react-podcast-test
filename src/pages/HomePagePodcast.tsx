import React, {useEffect, useState} from 'react';
import {PodcastList} from "../components/composed/PodcastList";
import PodcastAPI from "../services/API/PodcastAPI";
import {Podcast, PodcastSave} from "../models/Podcast/Podcast";
import {FilterInput} from "../components/atomic/FilterInput";

interface state {
  podcasts: Podcast[],
  podcastsFiltered: Podcast[],
}

export const HomePagePodcast = () => {
  const PODCAST_LIST_SAVE_KEY = "PODCAST_LIST_SAVE";
  const initialState: state = {
    podcasts: [],
    podcastsFiltered: [],
  }
  const [state, setState] = useState<state>(initialState);

  const getPodcastListFromApi = () => {
    PodcastAPI.getPodcastList()
        .then(podcastsResponse => {
              setState((prevState) => ({
                ...prevState,
                podcasts: podcastsResponse,
                podcastsFiltered: podcastsResponse,
              }));
              const podcastListSave: PodcastSave = {
                date: new Date(),
                podcastList: podcastsResponse,
              };
              localStorage.setItem(PODCAST_LIST_SAVE_KEY, JSON.stringify(podcastListSave));
            }
        );
  }

  const getPodcastList = () => {
    const podcastSave = localStorage.getItem(PODCAST_LIST_SAVE_KEY);
    const podcastSaveJSON: PodcastSave | null = podcastSave && JSON.parse(podcastSave);
    const oneDay = 60 * 60 * 24 * 1000;
    const todayInMillis = new Date().getTime();
    if (!podcastSaveJSON) {
      getPodcastListFromApi();
      return;
    }
    const hasPassedOneDay = todayInMillis - new Date(podcastSaveJSON.date).getTime() > oneDay;
    if (hasPassedOneDay) {
      getPodcastListFromApi();
      return;
    }
    setState((prevState) => ({
      ...prevState,
      podcasts: podcastSaveJSON.podcastList,
      podcastsFiltered: podcastSaveJSON.podcastList,
    }));

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
        <div className={'filter-container'}>
          <FilterInput data={state.podcasts} filteredNumber={state.podcastsFiltered.length} onFilterData={onFilterHandler}/>
        </div>
        <PodcastList podcasts={state.podcastsFiltered} />
      </div>
  );
};