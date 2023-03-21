import {Podcast} from "../../models/Podcast/Podcast";

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
    }
    podcasts.push(podcastElement);
  });
  return podcasts;
}