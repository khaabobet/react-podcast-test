import React, {useContext} from 'react';
import {Podcast, PodcastEpisode, PodcastEpisodeSave} from "../../models/Podcast/Podcast";
import PodcastAPI from "../../services/API/PodcastAPI";
import {PageStateContext} from "../../context/PageState/PageStateContext";
import {PageState, PageStates} from "../../models/PageState/PageState";

interface props {
  podcast: Podcast;
}

export const PodcastItem = (props: props) => {
  const pageStateContext = useContext(PageStateContext);

  const setSelectedPodcastInState = (podcastDetailsList: PodcastEpisode[]) => {
    const nextPageState: PageState = {
      state: PageStates.podcastState,
      podcastInfoSelected: {
        podcast: props.podcast,
        podcastDetail: podcastDetailsList,
      }
    };

    pageStateContext.changePageState(nextPageState);
  }

  const getPodcastDetailsFromApi = (podcastLocalStoreKey: string) => {
    PodcastAPI.getPodcastDetailsList(props.podcast.id).then((podcastDetailsList) => {
      const podcastDetailsSave: PodcastEpisodeSave = {
        date: new Date(),
        podcastDetailsList: podcastDetailsList,
      };

      localStorage.setItem(podcastLocalStoreKey, JSON.stringify(podcastDetailsSave));
      setSelectedPodcastInState(podcastDetailsList);
    });
  };

  const handleOnClickPodcast = () => {
    const PODCAST_DETAILS_SAVE_KEY = "PODCAST_DETAILS_SAVE_" + props.podcast.id;
    const podcastDetailsSave = localStorage.getItem(PODCAST_DETAILS_SAVE_KEY);
    const podcastDetailsSaveJSON: PodcastEpisodeSave = podcastDetailsSave && JSON.parse(podcastDetailsSave);
    const oneDay = 60 * 60 * 24 * 1000;
    const todayInMillis = new Date().getTime();
    if (!podcastDetailsSave) {
      getPodcastDetailsFromApi(PODCAST_DETAILS_SAVE_KEY);
      return;
    }

    const hasPassedOneDay = todayInMillis - new Date(podcastDetailsSaveJSON.date).getTime() > oneDay;
    if (hasPassedOneDay) {
      getPodcastDetailsFromApi(PODCAST_DETAILS_SAVE_KEY);
      return;
    }

    setSelectedPodcastInState(podcastDetailsSaveJSON.podcastDetailsList);
  };

  return (
      <div className={'podcast-item-container'} onClick={handleOnClickPodcast}>
        <div className={"info-container"}>
          {props.podcast.image && <img src={props.podcast.image} alt={"Podcast Image"}/>}
          <div>
            <span className={"name"}>{props.podcast.name.toUpperCase()}</span>
          </div>
          <div>
            <span>{props.podcast.author}</span>
          </div>
        </div>
      </div>
  )
}