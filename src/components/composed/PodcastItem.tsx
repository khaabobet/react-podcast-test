import React, {useContext} from 'react';
import {Podcast} from "../../models/Podcast/Podcast";
import PodcastAPI from "../../services/API/PodcastAPI";
import {PageStateContext} from "../../context/PageState/PageStateContext";
import {PageState, PageStates} from "../../models/PageState/PageState";

interface props {
  podcast: Podcast;
}

export const PodcastItem = (props: props) => {
  const pageStateContext = useContext(PageStateContext);
  const handleOnClickPodcast = () => {
    PodcastAPI.getPodcastDetailsList(props.podcast.id).then((podcastDetailsList) => {
      const nextPageState: PageState = {
        state: PageStates.podcastState,
        podcastInfoSelected: {
          podcast: props.podcast,
          podcastDetail: podcastDetailsList
        }
      }
      pageStateContext.changePageState(nextPageState);
    });
  }

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