import audios from '../testdata/audio.json';

export interface IAudioTracks {
  name: string;
  url: string;
}

export interface IAudioMeta {
  id: string;
  title: string;
  desc: string;
  author: string;
  tags: string[];
  tracks: IAudioTracks[];
}

export interface IAudioData {
  audios: IAudioMeta[];
}

export default function getAudio(): IAudioData {
  return audios;
}
