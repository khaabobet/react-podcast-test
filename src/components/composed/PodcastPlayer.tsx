import React from "react";
import {PodcastEpisode} from "../../models/Podcast/Podcast";

interface props {
  episode: PodcastEpisode
}
export const PodcastPlayer = (props: props) => {
  return (
    <div className={'podcast-player-container'}>
      <span className={'title'}>{props.episode.title}</span>
      <span className={'description'}>{props.episode.description}</span>
      <audio src={props.episode.episodeURL} controls>
            Your browser does not support the audio element.
      </audio>
    </div>
  );
}