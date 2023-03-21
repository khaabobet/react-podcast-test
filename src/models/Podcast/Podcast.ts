export interface Podcast {
  image: string | null;
  name: string;
  author: string;
  id: string;
}

export interface PodcastSave {
  date: Date;
  podcastList: Podcast[];
}