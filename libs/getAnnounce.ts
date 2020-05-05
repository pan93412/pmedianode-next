import announcements from '../testdata/announcement.json';

export interface IAnnounce {
  id: string;
  title: string;
  content: string;
}

export interface IAnnounceSets {
  announcements: IAnnounce[];
}

export default function getAnnouncements(): IAnnounceSets {
  return announcements;
}
