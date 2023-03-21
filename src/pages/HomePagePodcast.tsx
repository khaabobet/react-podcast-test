import React, {useEffect, useState} from 'react';
import {PodcastList} from "../components/composed/PodcastList";
import PodcastAPI from "../services/API/PodcastAPI";
import {Podcast} from "../models/Podcast/Podcast";

interface state {
  podcasts: Podcast[]
}

export const HomePagePodcast = () => {
  const initialState: state = {
    podcasts: [],
  }
  const [state, setState] = useState<state>(initialState);

  const getPodcastList = () => {
    PodcastAPI.getPodcastList()
        .then(podcastsResponse =>
            setState((prevState) => ({
              ...prevState,
              podcasts: podcastsResponse
            }))
        );
  }

  useEffect(() => {
    getPodcastList();
  }, []);

  return (
      <div className={'home-page-podcast-container'}>
        <div className={'title-container'}>
          <h2>{'Podcaster'}</h2>
        </div>
        <div className={'filter-container'}></div>
        <PodcastList podcasts={state.podcasts}/>
      </div>
  );
};