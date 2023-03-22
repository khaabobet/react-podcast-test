import React from 'react';
import {PodcastEpisode, PodcastInfoSelected} from "../models/Podcast/Podcast";

interface props {
  podcastInfoSelected: PodcastInfoSelected | null
}

export const PodcastDetailsPage = (props: props) => {
  if (!props.podcastInfoSelected) {
    return <></>
  }

  const millisToDesiredFormat = (ms: number): string => {
    let seconds = ms / 1000;
    const hours = Math.round(seconds / 3600);
    seconds = seconds % 3600;
    const minutes = Math.round(seconds / 60);
    seconds = seconds % 60;
    return (hours < 10 ? "0" + hours : hours)+":"+(minutes < 10 ? "0" + minutes : minutes)+":"+(seconds < 10 ? "0" + seconds : seconds);
  }

  const selectPodcastToPlay = (episode: PodcastEpisode) => {
    console.log('play', episode.episodeURL)
  }

  return (
      <div className={'podcast-details-page-container'}>
        <div className={'podcast-details-info-container'}>
          <div className={'podcast-details-info-delimiter'}>
            {props.podcastInfoSelected.podcast.image && <img alt={"Podcast image"} src={props.podcastInfoSelected.podcast.image} />}
            <span className={'title'}>{props.podcastInfoSelected.podcast.name}</span>
            <span className={'subtitle'}>by {props.podcastInfoSelected.podcast.author}</span>
            <span className={'description-title'}>Description: </span>
            <span className={'description'}>{props.podcastInfoSelected.podcast.summary}</span>
          </div>
        </div>
        <div className={'podcast-details-episodes-container'}>
          <span className={'episode-number-container'}>Episodes: {props.podcastInfoSelected.podcastDetail.length}</span>
          <div className={'table-container'}>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {props.podcastInfoSelected.podcastDetail.map((element,index) => {
                  const dateReleased = new Date(element.releaseDate);
                  const day = dateReleased.getDate();
                  const month = dateReleased.getMonth() + 1;
                  const year = dateReleased.getFullYear();
                  const dateToRender = day + "/" + month + "/" + year;
                  return (
                    <tr key={index} onClick={() => selectPodcastToPlay(element)}>
                      <td className={'episode-name'}>{element.title}</td>
                      <td>{dateToRender}</td>
                      <td>{millisToDesiredFormat(element.trackTimeMillis)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}