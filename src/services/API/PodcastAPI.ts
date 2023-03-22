import {Podcast, PodcastDetails} from "../../models/Podcast/Podcast";
import {podcastDetailsListMapper, podcastMapper} from "./MapperService";

const getAllOriginUrl = (url: string): string => {
  return `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
}

const getPodcastList = (): Promise<Podcast[]> => {
  return fetch(getAllOriginUrl('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'))
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

const getPodcastDetailsList = (id: string): Promise<PodcastDetails[]> => {
  return fetch(getAllOriginUrl(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`))
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Network response was not ok.')
        }
      })
      .then(data => {
        return podcastDetailsListMapper(JSON.parse(data.contents).results)
      })
      .catch((error) => {
        console.error('error', error);
        return [];
      })
}

const PodcastAPI = {
  getPodcastList,
  getPodcastDetailsList,
};

export default PodcastAPI;

