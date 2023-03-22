export interface Podcast {
  image: string | null;
  name: string;
  author: string;
  id: string;
  summary: string;
}

export interface PodcastDetails {
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

export interface PodcastDetailsSave {
  date: Date;
  podcastDetailsList: PodcastDetails[]
}

export interface PodcastInfoSelected {
  podcast: Podcast,
  podcastDetail: PodcastDetails[]
}