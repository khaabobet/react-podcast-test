import React from 'react';
import {Podcast} from "../../models/Podcast/Podcast";
import {PodcastItem} from "./PodcastItem";

interface props {
  podcasts: Podcast[]
}

export const PodcastList = (props: props) => {
  return (
      <div className={'podcast-list-container'}>
        {props.podcasts.map((podcast, index) => {
          return <PodcastItem podcast={podcast} key={index}/>
        })}
      </div>
  );
}