import React, {useContext} from 'react';
import {PageStateContext} from "../context/PageState/PageStateContext";
import {PageStates} from "../models/PageState/PageState";
import {HomePagePodcast} from "./HomePagePodcast";
import {PodcastDetailsPage} from "./PodcastDetailsPage";

export const MainPage = () => {
  const pageStateContext = useContext(PageStateContext);

  const renderStates = () => {
    switch (pageStateContext.pageState.state) {
      case PageStates.mainState:
        return <HomePagePodcast />
      case PageStates.podcastState:
        return <PodcastDetailsPage podcastInfoSelected={pageStateContext.pageState.podcastInfoSelected}/>
      case PageStates.podcastEpisode:
        return <div>3</div>
    }
  }

  return (
      <div>
        {renderStates()}
      </div>
  );
}