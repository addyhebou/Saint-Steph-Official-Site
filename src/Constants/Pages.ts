export const PAGES: PageLink[] = [
  {
    name: 'music',
    link: 'https://open.spotify.com/playlist/3BEcw7WkLRmutsBUqZsHQ4?si=184a965ff9354756&nd=1',
  },
  {
    name: 'about',
    link: 'https://open.spotify.com/playlist/3BEcw7WkLRmutsBUqZsHQ4?si=184a965ff9354756&nd=1',
  },
  {
    name: 'booking',
    link: 'https://beat-shop-client-frontend.web.app/',
  },
  {
    name: 'contact',
    link: 'mailto:hi@saintstephmusic.com',
  },
];

export interface PageLink {
  name: string;
  link: string;
}
