import React from 'react';
import {PodcastInfoSelected} from "../models/Podcast/Podcast";

interface props {
  podcastInfoSelected: PodcastInfoSelected | null
}

export const PodcastDetailsPage = (props: props) => {
  return (
      <div>
        <p>
          {props.podcastInfoSelected?.podcast.name}
        </p>
        <p>
          {props.podcastInfoSelected?.podcast.author}
        </p>
        <p>
          {props.podcastInfoSelected?.podcast.summary}
        </p>
      </div>
  )
}