import React from 'react';
import {Podcast} from "../../models/Podcast/Podcast";

interface props {
  podcasts: Podcast[]
}

export const PodcastList = (props: props) => {
  console.log('podcast lists', props.podcasts);
  return <p>Lista! :D </p>
}