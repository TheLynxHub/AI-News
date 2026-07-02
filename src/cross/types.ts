export type NewsSource = {
  id: string;
  name: string;
  type: 'website' | 'youtube';
  url: string;
  feedUrl: string;
  enabled: boolean;
};

export type NewsItem = {
  id: string;
  sourceId: string;
  sourceName: string;
  title: string;
  link: string;
  pubDate: string;
  isoDate: string;
  thumbnail: string;
  snippet: string;
  type: 'website' | 'youtube';
};
