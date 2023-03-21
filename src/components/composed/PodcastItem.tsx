import React from 'react';
import {Podcast} from "../../models/Podcast/Podcast";

interface props {
  podcast: Podcast;
}

export const PodcastItem = (props: props) => {
  return (
      <div className={'podcast-item-container'}>
        <div className={"info-container"}>
          {props.podcast.image && <img src={props.podcast.image}/>}
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