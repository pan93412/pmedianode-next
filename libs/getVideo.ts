import videos from '../testdata/video.json';

export interface IVideoEpisodes {
  name: string;
  url: string;
}

export interface IVideoMeta {
  id: string;
  title: string;
  desc: string;
  author: string;
  tags: string[];
  episodes: IVideoEpisodes[];
}

export interface IVideoData {
  videos: IVideoMeta[];
}

export default function getVideo(): IVideoData {
  return videos;
}

