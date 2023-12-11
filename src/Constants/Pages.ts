export const PAGES: PageLink[] = [
  {
    name: 'music',
    link: 'https://open.spotify.com/playlist/3BEcw7WkLRmutsBUqZsHQ4?si=184a965ff9354756&nd=1',
  },
  {
    name: 'about',
    link: '',
  },
  {
    name: 'booking',
    link: 'https://www.fiverr.com/s/PN9xA0',
  },
  // TODO: Unblock this once portfolio page is done
  // {
  //   name: 'portfolio',
  //   link: '/portfolio',
  // },
  {
    name: 'contact',
    link: 'mailto:hi@saintstephmusic.com',
  },
];

export interface PageLink {
  name: string;
  link: string;
}
