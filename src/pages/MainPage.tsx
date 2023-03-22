import React, {useContext} from 'react';
import {PageStateContext} from "../context/PageState/PageStateContext";
import {PageState, PageStates} from "../models/PageState/PageState";
import {HomePagePodcast} from "./HomePagePodcast";
import {PodcastDetailsPage} from "./PodcastDetailsPage";

export const MainPage = () => {
  const pageStateContext = useContext(PageStateContext);

  const goHomePage = () => {
    const nextPageState: PageState = {
      state: PageStates.mainState,
      podcastInfoSelected: null,
    };

    pageStateContext.changePageState(nextPageState);
  };

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
      <div className={'main-page-container'}>
        <div className={'title-container'}>
          <h2 onClick={goHomePage}>{'Podcaster'}</h2>
        </div>
        {renderStates()}
      </div>
  );
}