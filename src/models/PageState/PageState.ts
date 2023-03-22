import {PodcastInfoSelected} from "../Podcast/Podcast";

export interface PageState {
  state: MAIN_STATE | PODCAST_STATE | PODCAST_EPISODE,
  podcastInfoSelected: PodcastInfoSelected | null,
  loading: boolean,
}

export type MAIN_STATE = 0;
export type PODCAST_STATE = 1;
export type PODCAST_EPISODE = 2;

export const PageStates = {
  mainState: 0 as MAIN_STATE,
  podcastState: 1 as PODCAST_STATE,
  podcastEpisode: 2 as PODCAST_EPISODE,
};