import {Podcast} from "../../models/Podcast/Podcast";
import {podcastMapper} from "./MapperService";

const getPodcastList = (): Promise<Podcast[]> => {
  return fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Network response was not ok.')
        }
      })
      .then(data => {
        return podcastMapper(JSON.parse(data.contents).feed.entry);
      })
      .catch(error => {
        console.error('error', error);
        return []
      });
}

const PodcastAPI = {
  getPodcastList
};

export default PodcastAPI;

