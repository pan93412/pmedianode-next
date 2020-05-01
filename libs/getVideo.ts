import fetch from 'node-fetch';

// docs/api.md
//   GET /api/get-video
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

export default async function getVideo() {
  const data = await fetch('/api/get-video').then(r => r.json())

  return data
}
