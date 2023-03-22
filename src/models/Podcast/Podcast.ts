export interface Podcast {
  image: string | null;
  name: string;
  author: string;
  id: string;
  summary: string;
}

export interface PodcastEpisode {
  episodeURL: string;
  title: string;
  description: string;
  releaseDate: string;
  trackTimeMillis: number;
}

export interface PodcastSave {
  date: Date;
  podcastList: Podcast[];
}

export interface PodcastEpisodeSave {
  date: Date;
  podcastDetailsList: PodcastEpisode[]
}

export interface PodcastInfoSelected {
  podcast: Podcast,
  podcastDetail: PodcastEpisode[]
}