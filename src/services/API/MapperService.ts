import {Podcast, PodcastDetails} from "../../models/Podcast/Podcast";

const getBiggerImage = (element: any) => {
  let image: string | null = null
  const images = element["im:image"];
  const heightImages = images.map((imageElement: any) => imageElement.attributes.height);
  const higherHeightOfAnImage = Math.max(...heightImages);

  images.forEach((imageElement: any) => {
    if (imageElement.attributes.height == higherHeightOfAnImage) {
      image = imageElement.label;
    }
  });

  return image;
}

export const podcastMapper = (entry: any): Podcast[] => {
  const podcasts: Podcast[] = [];
  entry.forEach((element: any) => {
    const podcastElement: Podcast = {
      image: getBiggerImage(element),
      name: element["im:name"].label,
      author: element["im:artist"].label,
      id: element.id.attributes["im:id"],
      summary: element.summary.label,
    }
    podcasts.push(podcastElement);
  });
  return podcasts;
}

export const podcastDetailsListMapper = (results: any[]): PodcastDetails[] => {
  const podcastDetailsList: PodcastDetails[] = [];
  results.forEach((element, index) => {
    if (index == 0) return;
    podcastDetailsList.push({
      episodeURL: element.episodeUrl,
      title: element.trackName,
      description: element.description,
      releaseDate: element.releaseDate,
      trackTimeMillis: element.trackTimeMillis,
    });
  });

  return podcastDetailsList;
}