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
  status: boolean;
  videos: IVideoMeta[];
}

export default async function getVideo() {
  const data: Promise<IVideoData> = await fetch('/api/get-video').then(r => r.json())

  return data
}
